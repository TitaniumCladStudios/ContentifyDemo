<script>
    import { superForm } from 'sveltekit-superforms/client';
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
  
    export let data;
    console.log(data);
  
    // Client API:
    const { form, errors, constraints } = superForm(data.form);
</script>

<div class="content-container">
    <h1>Login to Edit</h1>
    <form method="POST">
        <label for="email">Email: </label>
        <input
            placeholder="email@gmail.com"
            type="email"
            name="email"
            data-invalid={$errors.email}
            bind:value={$form.email}
            {...$constraints.email} 
        />
        {#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
        <label for="name">Password: </label>
        <input
            placeholder="password"
            type="password"
            name="password"
            data-invalid={$errors.password}
            bind:value={$form.password}
            {...$constraints.password} 
        />
        {#if $errors.password}<span class="invalid">{$errors.password}</span>{/if}
      
        <button>Submit</button>
      </form>
</div>

<style>
    .content-container {
        width: 40%;
        padding: 30px;
        background-color: #fff;
        border-radius: 30px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .invalid {
        color: red;
    }
    form {
        display: flex;
        flex-direction: column;
    }
    input {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #000;
        background: none;
        margin-top: 5px;
        margin-bottom: 10px;
    }
    label {
        font-weight: bold;
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
        margin-top: 15px;
        align-self: end;
    }
    button:hover {
        cursor: pointer;
    }
    @media(max-width: 850px){
        .content-container {
            width: 90%;
            margin: 10px;
        }
    }
</style>
