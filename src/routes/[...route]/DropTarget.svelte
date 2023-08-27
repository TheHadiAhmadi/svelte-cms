<script>
    export let horizontal = false;

    export let item;
    
    function onClick() {
        console.log("Should add new item here")
    }
    
</script>

<div on:clck={onClick} class="u-divi" class:u-divi-horizontal={horizontal}/>