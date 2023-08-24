<script>
    export let label;
    export let col;
    export let colXs;
    export let colSm;
    export let colMd;
    export let colLg;    
    export let colXl;
    export let offsetXs;
    export let offsetSm;
    export let offsetMd;
    export let offsetLg;    
    export let offsetXl;

    export let value;
    export let name;
    export let size;

</script>
<div u-form-field u-col-col={col} u-col-col-sm={colSm} u-col-col-xs={colXs} u-col-col-md={colMd} u-col-col-lg={colLg} u-col-col-xl={colXl} u-col u-col-offset={offset} u-col-offset-sm={offsetSm} u-col-offset-xs={offsetXs} u-col-offset-md={offsetMd} u-col-offset-lg={offsetLg} u-col-offset-xl={offsetXl} {...$$restProps}>
    <label u-form-field-label>{label}</label>
    <input u-input {name} {value} u-input-size={size}>
</div>