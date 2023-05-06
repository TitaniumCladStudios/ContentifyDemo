import { scrapeSite } from "@titanium-clad-studios/contentify-core";

let page = scrapeSite();

export async function load(){

    console.log(page);
}