<script>

    export let col;
    export let colXs;
    export let colSm;
    export let colMd;
    export let colLg;    
    export let colXl;
    export let offset;
    export let offsetXs;
    export let offsetSm;
    export let offsetMd;
    export let offsetLg;    
    export let offsetXl;

</script>
    

<div u-col u-col-col={col} u-col-col-sm={colSm} u-col-col-xs={colXs} u-col-col-md={colMd} u-col-col-lg={colLg} u-col-col-xl={colXl} u-col-offset={offset} u-col-offset-sm={offsetSm} u-col-offset-xs={offsetXs} u-col-offset-md={offsetMd} u-col-offset-lg={offsetLg} u-col-offset-xl={offsetXl}>
    <slot/>
</div>