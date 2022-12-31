<script>
  export let graphableValues;
  export let maxGraphableValue;
  export let increment;
</script>

<div class="x-item">
  <div class="bar-wrapper">
    <div
      class="bar"
      style="height: {(graphableValues[increment] / maxGraphableValue) * 100}%;"
    >
      <div class="counter">
        {#if graphableValues[increment] > 0}
          {graphableValues[increment]}
        {/if}
      </div>
    </div>
  </div>
  <div class="x-label">
    <slot />
  </div>
</div>

<style>
  .counter {
    color: var(--modal-background-color);
    position: absolute;
    bottom: 0em;
    left: 0;
    right: 0;
    height: 1.3em;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.6em;
    font-weight: 900;
    line-height: 1.45em;
  }

  .bar-wrapper {
    height: 8em;
    margin: 0;
    width: 0.8em;
    position: relative;
  }

  .bar {
    background-color: var(--button-primary-color);
    width: 100%;
    border-radius: 0.25em;
    position: absolute;
    bottom: 0;
    text-align: center;
    min-height: 0.3em;
  }

  .x-label {
    text-align: center;
    margin-top: 0.5em;
    font-size: 0.7em;
  }

  .x-item {
    margin: 0.3em;
    color: var(--modal-text-color);
    font-size: 1.5em;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
