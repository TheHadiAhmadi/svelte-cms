<script>
  import { createEventDispatcher } from "svelte";

    export let value;
    export let edit;

    const dispatch = createEventDispatcher()
</script>

{#if edit}
    <span tabindex="0" on:blur={() => dispatch('save')} style="outline: none" contenteditable bind:innerText={value} />
{:else}
    <span>{value}</span>
{/if}