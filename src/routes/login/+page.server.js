import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { redirect } from '@sveltejs/kit';
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


const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});

export const load = async () => {
  // Server API:
  const form = await superValidate(schema);

  // Always return { form } in load and form actions.
  return { form };
};

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, schema);
    console.log('POST', form);

    if (!form.valid) {
      return fail(400, { form });
    }

    // TODO: Do something with the validated data
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.data.email, form.data.password)
    .then((userCredential) => {
        // Signed in 
        console.log("Signed in");
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

    return { form };
  }
};