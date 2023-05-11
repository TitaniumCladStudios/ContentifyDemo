import { createClient } from 'redis';
import { json } from '@sveltejs/kit';

const client = createClient({
    url: "redis://default:XoHxlMoZc52Ep17ubr4mWHioIgmflR48@redis-14041.c8.us-east-1-4.ec2.cloud.redislabs.com:14041"
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