<script>
    import Dynamic from './Dynamic.svelte'

    export let data;
    

    console.log(data)
</script>

<Dynamic item={data.page} components={data.components}/>


<style>
    :global(html),:global(body) {
        background-color: #e3e3e3;
    }
</style>