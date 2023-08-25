<script>
    import {page} from '$app/stores'
    import tabler from 'yesvelte/css/tabler.min.css?url'
  import Sidebar from './[...route]/Sidebar.svelte';
</script>

<svelte:head>
    <link rel="stylesheet" href={tabler}/>    
</svelte:head>
<Sidebar/>
<div style="margin-left: 240px">

<nav class="y-el-d-flex y-el-gap-3 y-el-p-3 y-el-bg-color-light y-el-border-bottom" >
    <a href="/">Home</a>
    <a href="/test">Test</a>

    <a href="/about">About</a>
    <a href="/users">UserList</a>
    <a href="/users/1">User 1</a>
    <a href="/users/2">User 2</a>
</nav>
{#key $page.url.pathname}
    <slot/>
{/key}
</div>
