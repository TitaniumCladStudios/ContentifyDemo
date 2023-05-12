import { redirect } from '@sveltejs/kit';
import { getAuth, signOut } from "firebase/auth";

export async function load(){
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    throw redirect(307, "/");
    }).catch((error) => {
    // An error happened.
    });
}