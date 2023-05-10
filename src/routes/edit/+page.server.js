import { parse } from "node-html-parser";
import { createClient } from 'redis';

const client = createClient({
    url: "redis://default:XoHxlMoZc52Ep17ubr4mWHioIgmflR48@redis-14041.c8.us-east-1-4.ec2.cloud.redislabs.com:14041"
})

export async function load(){
    let page = await fetch("http://localhost:5173/")
    .then(response => response.text())
    .then(html => {
        return html;
    })

    const root = parse(page)

    let editable = root.querySelectorAll("[data-contentify]")

    await client.connect();

    for(let element of editable){
        let contentify = element.getAttribute("data-contentify");
        console.log(contentify);
        console.log(element.innerText);
        await client.set(contentify, element.innerText);
    }
    await client.disconnect();

    return {
        page: page
    }
}