<script>
  export let guesses;
</script>


<div class="guesses">
    {#each guesses as guess}
    <div class="guess">

    </div>
    {/each}
</div>

<style>
  .guesses {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 1em;
    flex-grow: 1;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .guess {
    height: 2.5em;
    width: 90%;
    background-color: rgba(0, 0, 0, 0.35);
    border-radius: 0.6em;
    flex-shrink: 0;
    text-align: center;
  }
</style>