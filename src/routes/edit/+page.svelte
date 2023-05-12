<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation"

    export let data;

    onMount(() => {
        let contentifyEls = document.querySelectorAll("[data-contentify]");
        for(let el of contentifyEls){
            el.contentEditable = true;
        }
    })
    async function saveData(){
        let modifiedEls = document.querySelectorAll("[data-contentify]");
        let elementMeta = [];
        for(let element of modifiedEls){
            let elementObj = {};
            let contentify = element.getAttribute("data-contentify");
            elementObj.contentify = contentify;
            elementObj.text = element.innerText;
            elementMeta.push(elementObj);
        }

        let postData = JSON.stringify({
            elements: elementMeta
        })

        const response = await fetch('/api/save', {
            method: 'POST',
            body: postData,
            headers: {
                'content-type': 'application/json'
            }
        });

        let status = await response.json();
        console.log(status);
        if(status === "Success"){
            document.getElementById("success").showModal();
        }
    }
    function cancel(){
        confirm("Are you sure you want to exit? Any unsave changes will be discarded.")
        goto("/");
    }
</script>

<div class="edit-banner">
    <div></div>
    <p>Editing page</p>
    <div class="button-bar">
        <button on:click={saveData}>Save</button>
        <button class="cancel" on:click={cancel}>Cancel</button>
    </div>
</div>

<dialog id="success">
    <h3>Your changes are live!</h3>
    <p>When you visit the page you will be able to see the copy edits you just made!</p>
    <div class="dialog-button-bar">
        <a href="/">View Page</a>
        <button on:click={() => document.getElementById('success').close()}>Keep Editing</button>
    </div>
</dialog>

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
    .cancel {
        background-color: #e35656;
    }
    dialog {
        width: 40%;
        border: none;
        padding: 2vw;
        border-radius: 15px;
    }
    dialog::backdrop {
        background: rgba(0, 0, 0, .6);
        /* backdrop-filter: blur(1px); */
    }
    .dialog-button-bar {
        display: flex;
        justify-content: end;
    }
    a {
        text-decoration: none;
        background-color: #7CFFC4;
        border: none;
        border-radius: 5px;
        padding: 10px 30px;
        font-weight: 400;
        font-family: 'Barlow', sans-serif;
        font-weight: bold;
        font-size: 14px;
        color: #000;
        margin-right: 10px;
    }
</style>

