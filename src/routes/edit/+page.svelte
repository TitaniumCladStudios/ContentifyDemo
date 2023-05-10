<script>
    import EditBanner from "$lib/components/editBanner.svelte";
    import { onMount } from "svelte";

    export let data;

    onMount(() => {
        let contentifyEls = document.querySelectorAll("[data-contentify]");
        for(let el of contentifyEls){
            el.contentEditable = true;
        }
    })
</script>

<EditBanner />

{@html data.page}

