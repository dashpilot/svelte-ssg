<script>
    import Nav from "../lib/Nav.svelte"
    export let data;
</script>

<Nav />

<div class="container mt-5">
    {#each data.posts as item}
    {#if item.page=='about'}
    <section class="p-3">
    <h1>{item.title}</h1>
    {@html item.body}
    </section>
    {/if}
    {/each}
</div>

    