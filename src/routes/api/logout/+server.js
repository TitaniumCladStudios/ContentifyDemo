import { redirect } from '@sveltejs/kit';
import { getAuth, signOut } from "firebase/auth";

export async function GET(){
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    throw redirect(303, "/");
    }).catch((error) => {
    // An error happened.
    });
}