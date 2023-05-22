import { createClient } from 'redis';
import { env } from "$env/dynamic/private";
import { getAuth } from "firebase/auth";
import { json } from "@sveltejs/kit"
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

const client = createClient({
    url: env.REDIS_CONNECTION_STRING
})

export async function POST({ request }){

    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);

    if(auth.currentUser == null){
        throw redirect(307, '/login');
    }
    
    const { elements } = await request.json();

    await client.connect();

    for(let element of elements){
        let contentify = element.contentify
        await client.set(contentify, element.text);
    }
    await client.set("edited", "true");
    await client.disconnect();

    return json("Success");
}