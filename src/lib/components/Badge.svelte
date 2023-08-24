<script lang="ts">
    export let color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'base' | 'light' | 'dark';
    export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'
</script>

<span u-badge u-badge-size="{size}" u-badge-color="{color}">
    <slot />
</span>

  