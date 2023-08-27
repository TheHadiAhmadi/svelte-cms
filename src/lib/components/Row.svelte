<div class="u-row">
  <slot />
</div>

<style>
    :global(body) {
        --row-gutter: 1rem !important;
        --color-primary-500: var(--y-primary);

    }
  .u-row {


    display: flex;
    flex-wrap: wrap;
    align-items: start;
    /* margin-left: calc(var(--row-gutter) / -4);
    margin-right: calc(var(--row-gutter) / -4);

    margin-top: calc(var(--row-gutter) / -4);
    margin-bottom: calc(var(--row-gutter) / -4);
     */
    margin: calc(var(--row-gutter) / -2) !important;

  }

  :global(.u-divi) {
    width: calc(var(--row-gutter) / 2);
    transition: all 0.2s ease;
    opacity: 0;
    position: relative;
    z-index: 1 !important;
  }
  :global(.u-divi::before) {
    content: "";
    background-color: var(--color-primary-500);
    opacity: 0.2;
    filter: blur(4px);
    position: absolute;
    top: -0.3rem;
    bottom: -0.3rem;
    left: -0.5rem;
    right: -0.5rem;
  }

  :global(.u-divi-horizontal::before) {
    top: -0.3rem;
    bottom: -0.3rem;
    left: 0.75rem;
    right: 0.75rem;
  }
  :global(.u-divi:not(.u-divi-horizontal)::before) {
    top: -0.3rem;
    bottom: -0.3rem;
    /* left: 0.5rem;
		right: 0.5rem; */
  }

  :global(.u-divi::after) {
    content: "";
    transition: scale 0.3s ease;
    background-color: var(--color-primary-500);
    position: absolute;
    top: 0.2rem;
    bottom: 0.2rem;
    left: 0.2rem;
    right: 0.2rem;
    scale: 0;
  }
  :global(.u-divi:hover::after) {
    scale: 1;
  }

  :global(.u-divi:not(.u-divi-horizontal)) {
    margin-top: calc(var(--row-gutter) / 2);
    margin-bottom: calc(var(--row-gutter) / 2);
    align-self: stretch;
  }

  :global(.u-divi-horizontal) {
    height: calc(var(--row-gutter) / 2);
    width: 100%;
  }

  :global(.u-divi:hover) {
    opacity: 1;
    scale: 1;
  }
  /* :global([u-row]:hover > .u-divi) {
		opacity: 1;
	}

	:global(.u-col:hover > .u-divi) {
		opacity: 1;
	} */

  :global(.u-col > .u-row) {
    margin: -0.25rem -0.25rem !important;
  }

  :global(.u-col) {
    padding: calc(var(--row-gutter) / 2) !important;
  }

  :global(.u-col > *) {
    background-color: var(--color-primary-100);
  }
  :global(.u-col:not(:first-child)) {
    margin-left: calc(var(--row-gutter) / -2) !important;
  }
  :global(.u-col:not(:last-child)) {
    margin-right: calc(var(--row-gutter) / -2) !important;
  }
</style>
