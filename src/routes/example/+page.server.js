import { fetchContent } from "$lib/server/contentify";

export async function load(){
    let keys1 = ["componentHeader1", "componentText1"];
    let keys2 = ["componentHeader2", "componentText2"];

    let content1 = await fetchContent(keys1);
    let content2 = await fetchContent(keys2);

    return {
        content1: content1,
        content2: content2
    };
}