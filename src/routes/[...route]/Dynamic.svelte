<script>
  import Col from "$components/Col.svelte";
  import DropTarget from "./DropTarget.svelte";
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
        {#each item.slot as slot, index}
            
            <DropTarget {item} posistion={index} horizontal={item.type !== 'Row'}/>
            {#if item.type === 'Row'}
            <Col col={item.props.cols?.[index] ?? 12}>
                <DropTarget horizontal item={slot} posistion="before"/>
                <DynamicWrapper on:save bind:positions {edit} {components} bind:item={slot}/>
                <DropTarget horizontal item={slot} posistion="after"/>

            </Col>

            {:else}
            <DynamicWrapper on:save bind:positions {edit} {components} bind:item={slot}/>
            {/if}
            
        {/each}
        <DropTarget {item} horizontal={item.type !== 'Row'}/>
    </svelte:component>
{:else}
    <svelte:component this={components[item.type ?? 'el/El']} {...item.props} />
{/if}
