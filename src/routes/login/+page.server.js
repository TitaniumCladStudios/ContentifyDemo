import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

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

    return { form };
  }
};