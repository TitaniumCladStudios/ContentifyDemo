<script>
    import { onMount } from "svelte";

    export let data;

    onMount(() => {
        let contentifyEls = document.querySelectorAll("[data-contentify]");
        for(let el of contentifyEls){
            el.contentEditable = true;
        }
    })
    let a = 5;
    let b = 5;
    async function saveData(){
        const response = await fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify({ a, b }),
            headers: {
                'content-type': 'application/json'
            }
        });

        let total = await response.json();
        console.log(total);
    }
</script>

<div class="edit-banner">
    <div></div>
    <p>Editing page</p>
    <button on:click={saveData}>Save</button>
</div>

{@html data.page}


<style>
    .edit-banner {
        width:100%;
        height: 50px;
        background-color: #0e0e0e;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        top: 0;
        padding: 0px 2%;
        box-sizing: border-box;
    }
    button {
        background-color: #00BBE6;
        border: none;
        border-radius: 5px;
        padding: 10px 30px;
        font-weight: 400;
        font-family: 'Barlow', sans-serif;
        font-weight: bold;
        font-size: 14px;
    }
    button:hover {
        cursor: pointer;
    }
</style>

