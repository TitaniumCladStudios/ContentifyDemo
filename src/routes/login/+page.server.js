import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { env } from "$env/dynamic/private"

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

    if (!form.valid) {
      return fail(400, { form });
    }

    // TODO: Do something with the validated data
    let login = JSON.stringify({
      email: form.data.email,
      password: form.data.password
    });

    let response = await fetch(`${env.APP_BASE_URL}/api/auth/login`, {
        method: 'POST',
        body: login,
        headers: {
            'content-type': 'application/json'
        }
    });

    let loginStatus = await response.json();
    console.log(loginStatus);

    return { form };
  }
};