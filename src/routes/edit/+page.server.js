import { parse } from "node-html-parser";

export async function load(){

    let page = await fetch("http://localhost:5173/")
    .then(response => response.text())
    .then(html => {
        return html;
    })

    const root = parse(page)

    let editable = root.querySelectorAll("[data-contentify]")

    for(let element of editable){
        let contentify = element.getAttribute("data-contentify");
        console.log(contentify);
        console.log(element.innerText);
    }
}