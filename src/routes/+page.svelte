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

   <a href="/edit">Try it!</a> 

   <a href="/example">Or look at another page!</a>

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
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    a {
        color: #e35656;
        text-decoration: none;
        font-size: 20px;
        font-weight: bold;
        display: block;
    }
    a:hover {
        text-decoration: underline;
        color: #000;
    }
    @media(max-width: 850px){
        .content-container {
            width: 90%;
            margin: 10px;
        }
    }
</style>
