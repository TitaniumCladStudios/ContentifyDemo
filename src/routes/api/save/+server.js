import { createClient } from 'redis';
import { json } from '@sveltejs/kit';
import { env } from "$/env/dynamic/private";

const client = createClient({
    url: env.REDIS_CONNECTION_STRING
})

export async function POST({ request }){
    
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