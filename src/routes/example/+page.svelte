<script>
    import SectionText from "$lib/components/sectionText.svelte";

    let keys1 = ["componentHeader1", "componentText1"];
    let keys2 = ["componentHeader2", "componentText2"];

</script>
<h1 data-contentify="pageHeader">Another Page</h1>
<p data-contentify="pageContent">What about repeating components?</p>

<SectionText keys={keys1} />
<SectionText keys={keys2} />