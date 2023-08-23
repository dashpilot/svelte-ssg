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
    {#each data.posts as item}
    {#if item.page=='index'}
    <section class="p-3">
    <h1>{item.title}</h1>
    {@html item.body}
    </section>
    {/if}
    {/each}
</div>
