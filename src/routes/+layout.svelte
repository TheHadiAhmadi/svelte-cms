<script>
    import {page} from '$app/stores'
</script>

<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/yesvelte@next/css/tabler.min.css"/>    
</svelte:head>

<nav class="y-el-d-flex y-el-gap-3 y-el-p-3 y-el-bg-color-light y-el-border-bottom" >
    <a href="/">Home</a>
    <a href="/test">Test</a>

    <a href="/about">About</a>
    <a href="/users">UserList</a>
    <a href="/users/1">User 1</a>
    <a href="/users/2">User 2</a>
</nav>

<slot/>