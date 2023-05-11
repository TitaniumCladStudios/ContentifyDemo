import { parse } from "node-html-parser";
import { createClient } from 'redis';
import { env } from "$env/dynamic/private"

const client = createClient({
    url: "redis://default:XoHxlMoZc52Ep17ubr4mWHioIgmflR48@redis-14041.c8.us-east-1-4.ec2.cloud.redislabs.com:14041"
})

export async function load(){
    let page = await fetch(`${env.APP_BASE_URL}/`)
    .then(response => response.text())
    .then(html => {
        return html;
    })

    const root = parse(page)

    let editable = root.querySelectorAll("[data-contentify]")

    await client.connect();

    for(let element of editable){
        let contentify = element.getAttribute("data-contentify");
        await client.set(contentify, element.innerText);
        element.contentEditable = true;
    }
    await client.set("edited", "true");
    await client.disconnect();

    return {
        page: page
    }
}