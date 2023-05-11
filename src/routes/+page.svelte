<script>
    let content = {
        mainHeader: "Contentify Demo",
        mainCopy: "This is a demo of Contentify. Contentify is a tool that stores mappings of elements on a webpage and their contents. An editor is then exposed to website administrators, allowing anyone to edit website content on the fly.",
        easeList1: "Easy to use for frontend developers.",
        easeList2: "Easy to use for website admins.",
        easeList3: "Free and open source.",
        easeList4: "Fast and secure.",
    };

    export let data;
    if(Object.keys(data).length !== 0){
        content = data;
    }
</script>

<div class="content-container">
    <h1 data-contentify="mainHeader">{content.mainHeader}</h1>

    <p data-contentify="mainCopy">{content.mainCopy}</p>

    <p>Contentify is:</p>
    <ul>
        <li data-contentify="easeList1">{content.easeList1}</li>
        <li data-contentify="easeList2">{content.easeList2}</li>
        <li data-contentify="easeList3">{content.easeList3}</li>
        <li data-contentify="easeList4">{content.easeList4}</li>
    </ul>
</div>

<style>
    .content-container {
        width: 40%;
        padding: 30px;
        background-color: #fff;
        border-radius: 30px;
    }
</style>
