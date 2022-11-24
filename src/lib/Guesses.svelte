<script>
  import X from "../assets/svg/x.svelte";

  export let guesses;
  export let increments;
</script>

<div class="guesses">
  {#each increments as _, i}
    <div class="guess">
      {#if i < guesses.length}
        <X />
        {guesses[i]}
      {/if}
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
    min-height: 3em;
    width: 90%;
    background-color: rgba(0, 0, 0, 0.35);
    border-radius: 0.6em;
    flex-shrink: 0;
    text-align: center;
    color: whitesmoke;
    font-family: "nokia";
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0.1em;
  }
</style>
