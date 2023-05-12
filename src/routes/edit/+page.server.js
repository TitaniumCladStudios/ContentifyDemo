import { parse } from "node-html-parser";
import { createClient } from 'redis';
import { env } from "$env/dynamic/private"
import { redirect } from '@sveltejs/kit';
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDo1bBJXVQS7EQZtMc0xXlj-UGTEssrhFE",
    authDomain: "contentifydemo.firebaseapp.com",
    projectId: "contentifydemo",
    storageBucket: "contentifydemo.appspot.com",
    messagingSenderId: "829223919941",
    appId: "1:829223919941:web:67515f228008e674031e2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const client = createClient({
    url: "redis://default:XoHxlMoZc52Ep17ubr4mWHioIgmflR48@redis-14041.c8.us-east-1-4.ec2.cloud.redislabs.com:14041"
})

export async function load(){

    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);

    console.log(auth.currentUser);

    if(auth.currentUser == null){
        throw redirect(307, '/login');
    }

    let page = await fetch(`${env.APP_BASE_URL}/`)
    .then(response => response.text())
    .then(html => {
        return html;
    })

    const root = parse(page)

    let editable = root.querySelectorAll("[data-contentify]")

    await client.connect();

    for(let element of editable){
        let contentify = element.getAttribute("data-contentify");
        await client.set(contentify, element.innerText);
        element.contentEditable = true;
    }
    await client.set("edited", "true");
    await client.disconnect();

    return {
        page: page
    }
}