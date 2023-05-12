import { json } from '@sveltejs/kit';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

export async function POST({ request }) {
    const { email, password } = await request.json();
    const auth = getAuth();
    let response = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        console.log("Signed in");
        const user = userCredential.user;
        return "/edit";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        return "Error"
    });

    return json(response);
}