<script>
    import {onMount} from "svelte";

    import Nav from "../lib/Nav.svelte"
    export let data;

    onMount(async () => {
        console.log('hello')
    });
</script>

<Nav />


<div class="container mt-5">

<h3>{data.page}</h3>

    {#each data.posts as item}
    {#if item.page=='index'}
    <section class="p-3">
    <h1>{item.title}</h1>
    {@html item.body}
    </section>
    {/if}
    {/each}
</div>



<style>
h3{
    padding-left: 20px;
}
</style>
