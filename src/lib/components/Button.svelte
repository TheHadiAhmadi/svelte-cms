<script lang="ts">
    export let color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'base' | 'light' | 'dark';
    export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'
    export let disabled = false;
    export let active = false;
    export let link = false;
</script>

<button u-button u-button-disabled={disabled || undefined} u-button-active={active || undefined} u-button-link={link || undefined} u-button-size="{size}" u-button-color="{color}" on:click>
    <slot />
</button>

  