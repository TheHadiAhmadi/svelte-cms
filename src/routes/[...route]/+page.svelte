<script lang="ts">
  import { El, Icon } from "yesvelte";
  import DynamicWrapper from "./DynamicWrapper.svelte";
  import Sidebar from "./Sidebar.svelte";

  // const edit = false
  const edit = true;

  async function save() {
    console.log('page', data)
    await fetch('', {
      method: 'POST',
      body: JSON.stringify({
        page: data.page
      })
    }).then(res => res.json())
    
  }
  

  export let data;

  let positions: any[] = [
    {
        element: null,
      top: 0,
      left: 0,
      width: 0,
      height: 0,
    },
  ];
</script>

<DynamicWrapper
  bind:positions
  on:save={save}
  {edit}
  bind:item={data.page}
  components={data.components}
/>

{#if edit}
  <El
    on:click!stopPropagation!preventDefault
    position="absolute"
    border
    borderColor="primary"
    style="top: {positions[positions.length - 1].top}px; left: {positions[
      positions.length - 1
    ].left}px; width: {positions[positions.length - 1]
      .width}px; height: {positions[positions.length - 1]
      .height}px; pointer-events: none"
  >
    <!-- <El
      d="inline-flex"
      p="1"
      alignItems="center"
      justifyContent="center"
      tag="span"
      bgColor="primary"
      textColor="light"
      style="border-radius: 50%; cursor: pointer;  pointer-events: all"
      on:click={(e) => console.log(positions[positions.length - 1].element)}
      m="1"
    >
      <Icon size="md" name="pencil" />
    </El> -->
  </El>
{/if}

<style>
  :global(html),
  :global(body) {
    background-color: #e3e3e3;
  }
</style>
