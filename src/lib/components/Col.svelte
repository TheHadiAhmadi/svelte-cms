<script>
  export let col = 12;
</script>

<div class="u-col u-col-col-{col}">
  <slot />
</div>

<style>
  .u-col {
    --offset: 0;
    --col: 6
    padding-left: calc(var(--row-gutter) / 4);
    padding-right: calc(var(--row-gutter) / 4);

    padding-top: calc(var(--row-gutter) / 4);
    padding-bottom: calc(var(--row-gutter) / 4);

    margin-left: calc(var(--offset, 0) * 100% / 12);

    --col-width: calc(var(--col) * 100% / 12);
    width: var(--col-width, auto);
  }

  .u-col-col-1 {
    --col: 1;
  }
  .u-col-col-2 {
    --col: 2;
  }
  .u-col-col-3 {
    --col: 3;
  }
  .u-col-col-4 {
    --col: 4;
  }
  .u-col-col-5 {
    --col: 5;
  }
  .u-col-col-6 {
    --col: 6;
  }
  .u-col-col-7 {
    --col: 7;
  }
  .u-col-col-8 {
    --col: 8;
  }
  .u-col-col-9 {
    --col: 9;
  }
  .u-col-col-10 {
    --col: 10;
  }
  .u-col-col-11 {
    --col: 11;
  }
  .u-col-col-12 {
    --col: 12;
  }
</style>
