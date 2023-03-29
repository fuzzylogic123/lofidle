<script>
  import { createEventDispatcher } from "svelte";
  import TutorialIcon from "../../assets/svg/Tutorial.svelte";
  import InfoIcon from "../../assets/svg/InfoIcon.svelte";
  import StatsIcon from "../../assets/svg/StatsIcon.svelte";
  import PlayButton from "../Buttons/PlayButton.svelte";
  import SkipButton from "../Buttons/SkipButton.svelte";

  export let nowPlaying;
  export let showFinalPage;

  const dispatch = createEventDispatcher();
</script>

<div class="footer">
  <StatsIcon on:click={() => dispatch("stats")} />
  <div class="flex-row" class:hidePlayButtons={showFinalPage}>
    <PlayButton on:click={() => dispatch("playSong")} {nowPlaying} />
      <SkipButton on:click={() => dispatch("skipSegment")} />
      </div>
        {#if showFinalPage}
          <InfoIcon on:click={() => dispatch("info")} />
        {:else}
          <TutorialIcon on:click={() => dispatch("tutorial")} />
        {/if}
</div>

<style>
  .hidePlayButtons {
    visibility: hidden;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 6em;
    width: 100%;
  }
</style>
