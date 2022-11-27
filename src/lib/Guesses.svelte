<script>
  import X from "../assets/svg/X.svelte";

  export let guesses;
  export let increments;
</script>

<div class="guesses">
  {#each increments as _, i}
    <div class="guess">
      {#if i < guesses.length}
        <!-- <div> -->
          <X correctArtist={guesses[i].status === "correctArtist"} />
        <!-- </div> -->
        <div class="song">
          {guesses[i].guess}
        </div>
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
    min-height: 2.7em;
    width: 90%;
    background-color: rgba(0, 0, 0, 0.35);
    background-color: rgba(255, 255, 255, 0.305);
    border-radius: 0.6em;
    font-size: smaller;
    text-align: left;
    color: whitesmoke;
    font-family: "nokia";
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0.3em;
    flex-direction: row;
  }

  .song {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    /* width: 90%; */
    flex-grow: 1;
  }
</style>
