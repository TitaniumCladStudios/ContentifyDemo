<script>
    import SectionText from "$lib/components/sectionText.svelte";

    let keys1 = ["componentHeader1", "componentText1"];
    let keys2 = ["componentHeader2", "componentText2"];

    export let data;
    console.log(data);

</script>
<h1 data-contentify="pageHeader">Another Page</h1>
<p data-contentify="pageContent">What about repeating components?</p>

<SectionText keys={keys1} componentHeader={data.content1.componentHeader1} componentText={data.content1.componentText1}/>
<SectionText keys={keys2} componentHeader={data.content2.componentHeader2} componentText={data.content2.componentText2}/>