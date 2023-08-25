<script>
  import DynamicText from "./DynamicText.svelte";
  import DynamicWrapper from "./DynamicWrapper.svelte";

    export let item
    export let components;

    export let positions;

    export let edit;

    console.log(item)
</script>


{#if typeof item === 'string'}
    <DynamicText on:save {edit} bind:value={item}/>
{:else if item.slot && item.slot.length > 0}
    <svelte:component this={components[item.type ?? 'el/El']} {...item.props}>
        {#each item.slot as slot}
            <DynamicWrapper on:save bind:positions {edit} {components} bind:item={slot}/>
        {/each}
    </svelte:component>
{:else}
    <svelte:component this={components[item.type ?? 'el/El']} {...item.props} />
{/if}
