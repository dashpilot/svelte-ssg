<script>
    import {onMount} from "svelte";

    import Nav from "./lib/Nav.svelte"
    import Post from "./lib/Post.svelte"
    export let data;

    onMount(async () => {
        console.log('hello')
    });
</script>

<Nav bind:data />

<div class="container mt-5">

<h5>{data.page.title}</h5>

    {#each data.posts as item}
    {#if item.page==data.page.slug}
    <Post bind:item />
    {/if}
    {/each}
</div>

<style>
h5{
    padding-left: 20px;
}
</style>
