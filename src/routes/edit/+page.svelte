<script>
    import EditBanner from "$lib/components/editBanner.svelte";

    export let data;
</script>

<EditBanner />

{@html data.page}

