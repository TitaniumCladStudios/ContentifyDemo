import { fetchContent } from "$lib/server/contentify";

export async function load(){
    let keys = ["mainHeader", "mainCopy", "easeList1", "easeList2", "easeList3", "easeList4"];

    let data = await fetchContent(keys);

    return data;
}