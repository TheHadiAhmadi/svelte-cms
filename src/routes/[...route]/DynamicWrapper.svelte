<script lang="ts">
  import { El } from "yesvelte";
  import Dynamic from "./Dynamic.svelte";

  export let positions
  export let item;
  export let components;

  
  function onMouseEnter(e: any) {
    console.log('enter')
    const rect = e.target.getClientRects()[0];

    positions = [...positions, {
        element: e.target,
        top: rect.y,
        height: rect.height,
        left: rect.x,
        width: rect.width,
    }]
  }

  function onMouseLeave(e: any) {
    console.log('leave')
    console.log(positions.length)
    positions.pop()
    positions = positions

    // position = {
    //     top: 0,
    //     left: 0,
    //     width: 0,
    //     height: 0,
    // };

  }
  
  export let edit;
</script>

{#if edit}
  <El on:mouseenter={onMouseEnter} on:mouseleave={onMouseLeave}>
    <Dynamic on:save bind:positions {edit} {components} bind:item />
  </El>
{:else}
  <Dynamic {components} {item} />
{/if}

<style>
  :global(.item) {
    display: contents;
  }
  :global(.item > *) {
    border: 1px dashed #20202010;
  }

  :global(.item:hover > *) {
    border: 1px dashed #202080;
  }

  :global(.item.active > *) {
    border: 1px solid #202080;
  }

</style>
