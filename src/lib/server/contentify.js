import { createClient } from 'redis';
import { env } from "$env/dynamic/private";

const client = createClient({
    url: env.REDIS_CONNECTION_STRING
})

export async function fetchContent(keys){
    await client.connect()

    let data = {};

    const edited = await client.get('edited');
    if(edited == "true"){
        for(let key of keys){
            let value = await client.get(key);
            data[key] = value;
        }
    }
    await client.disconnect()

    return data;
}