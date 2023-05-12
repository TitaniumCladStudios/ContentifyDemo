import { redirect } from '@sveltejs/kit';
import { getAuth, signOut } from "firebase/auth";
import { json } from '@sveltejs/kit';

export async function GET(){
    const auth = getAuth();
    let response = await signOut(auth).then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });
    return json(response)
}