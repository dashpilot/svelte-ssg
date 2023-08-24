<script>
    export let data;
</script>

<nav>
    {#each data.pages as page}
    <a href="./{page.slug}">{page.title}</a>
    {/each}
</nav>


<style>
    nav {
        background-color: #f8f9fa;
        padding: 10px;
        padding-bottom: 12px;
        border-bottom: 1px solid #DDD;
    }

    nav a {
        margin-left: 10px;
        text-decoration: none;
    }
</style>

