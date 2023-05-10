import { parse } from "node-html-parser";
import { createClient } from 'redis';
import { json } from '@sveltejs/kit';

// const client = createClient({
//     url: "redis://default:XoHxlMoZc52Ep17ubr4mWHioIgmflR48@redis-14041.c8.us-east-1-4.ec2.cloud.redislabs.com:14041"
// })

export async function POST({ request }){
    const { a, b } = await request.json();
    return json(a + b);
    // let page = await fetch("http://localhost:5173/")
    // .then(response => response.text())
    // .then(html => {
    //     return html;
    // })

    // const root = parse(page)

    // let editable = root.querySelectorAll("[data-contentify]")

    // await client.connect();

    // for(let element of editable){
    //     let contentify = element.getAttribute("data-contentify");
    //     await client.set(contentify, element.innerText);
    //     element.contentEditable = true;
    // }
    // await client.disconnect();
}