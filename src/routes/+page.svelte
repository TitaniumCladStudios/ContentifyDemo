<script>
    import { scrapeSite } from "@titanium-clad-studios/contentify-core";
    import { onMount } from "svelte";

    onMount(() => {
        scrapeSite();
    });

</script>


<div class="content-container">
    <h1 data-contentify="mainHeader">Contentify Demo</h1>

    <p data-contentify="mainCopy">This is a demo of Contentify. Contentify is a tool that stores mappings of elements on a webpage and their contents. An editor is then exposed to website administrators, allowing anyone to edit website content on the fly.</p>

    <p>Contentify is:</p>
    <ul>
        <li data-contentify="easeList-1">Easy to use for frontend developers.</li>
        <li data-contentify="easeList-2">Easy to use for website admins.</li>
        <li data-contentify="easeList-3">Free and open source.</li>
        <li data-contentify="easeList-4">Fast and secure.</li>
    </ul>
</div>

<style>
    :global(body){
        background-image: linear-gradient(
        130deg,
        hsl(175deg 100% 40%) 0%,
        hsl(179deg 100% 40%) 11%,
        hsl(183deg 100% 41%) 22%,
        hsl(187deg 100% 43%) 33%,
        hsl(191deg 100% 45%) 44%,
        hsl(194deg 100% 47%) 56%,
        hsl(197deg 100% 49%) 67%,
        hsl(199deg 100% 50%) 78%,
        hsl(201deg 100% 50%) 89%,
        hsl(203deg 100% 50%) 100%
        );
        margin: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Barlow', sans-serif;
    }
    h1 {
        font-weight: bold;
    }
    .content-container {
        width: 40%;
        padding: 30px;
        background-color: #fff;
        border-radius: 30px;
    }
</style>
