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

<h5>Page: {data.page}</h5>

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
h5{
    padding-left: 20px;
}
</style>
