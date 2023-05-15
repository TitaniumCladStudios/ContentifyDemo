<script>
    export let keys = [];
    export let content = {
        componentHeader: "Resusable Components",
        componentText: "Some components are reusable, and will need unique keys for the contentify database! You can easily achieve this by passing in an array of keys to the component and using them for your 'data-contentify' html attributes. Go ahead and inspect this element and you'll see it has a different contentify key than the other component on the page."
    }
</script>

<div class="section-text-container">
    <h2 data-contentify={keys[0]}>{content.componentHeader}</h2>
    <p data-contentify={keys[0]}>{content.componentText}</p>
</div>

<style>
    .section-text-container {
        background-color: #fff;
        padding: 2vw;
        border-radius: 15px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 50%;
        margin-top: 30px;
    }
</style>