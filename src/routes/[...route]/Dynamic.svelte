<script>
    export let item
    export let components;


    console.log(item)
</script>


{#if typeof item === 'string'}
    {item}
{:else if item.slot && item.slot.length > 0}
    <svelte:component this={components[item.type ?? 'el/El']} {...item.props}>
        {#each item.slot as item}
            <svelte:self {components} {item} />
        {/each}
    </svelte:component>
{:else}
    <svelte:component this={components[item.type ?? 'el/El']} {...item.props} />
{/if}

