import { createClient } from 'redis';

const client = createClient({
    url: "redis://default:XoHxlMoZc52Ep17ubr4mWHioIgmflR48@redis-14041.c8.us-east-1-4.ec2.cloud.redislabs.com:14041"
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