<script>
  import Bar from "./Bar.svelte";

  export let maxIncrement;
  export let previousScores;

  let increments = Array.from({ length: maxIncrement }, (_, i) => i);
  const [graphableValues, maxGraphableValue] =
    generateGraphValues(previousScores);

  /**
   * @param {number[]} previousScores
   */
  function generateGraphValues(previousScores) {
    let graphValues = [];
    for (let i = 1; i <= maxIncrement; i++) {
      graphValues.push(previousScores.filter((x) => x == i).length);
    }
    graphValues.push(previousScores.filter((x) => x == -1).length);
    const maxGraphableValue = Math.max(Math.max(...graphValues), 0);
    return [graphValues, maxGraphableValue];
  }
</script>

<div class="graph">
  <div class="x-axis">
    <!-- <div class="graph-spacing" /> -->
    {#each increments as increment}
    <Bar {increment} {maxGraphableValue} {graphableValues}>
      {increment + 1}
    </Bar>
    {/each}
    <Bar increment={maxIncrement} {maxGraphableValue} {graphableValues}>X</Bar>
  </div>
</div>

<style>
  .x-axis {
    display: flex;
    flex-direction: row;
  }

  .graph {
    margin-left: 1em;
    margin-right: 1em;
  }

  /* .graph-spacing {
    width: 0.5em;
  } */
</style>
