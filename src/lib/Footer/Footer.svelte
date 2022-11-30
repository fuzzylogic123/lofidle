<script>
  import { createEventDispatcher } from "svelte";
  import TutorialIcon from "../../assets/svg/Tutorial.svelte";
  import InfoIcon from "../../assets/svg/InfoIcon.svelte";
  import PlayButton from "../Buttons/PlayButton.svelte";
  import SkipButton from "../Buttons/SkipButton.svelte";

  export let nowPlaying;

  const dispatch = createEventDispatcher();

</script>

<div class="footer">
  <InfoIcon on:click={() => dispatch("info")} />

  <div class="flex-row">
    <PlayButton on:click={()=> dispatch("playSong")} {nowPlaying} />
    <SkipButton on:click={()=> dispatch("skipSegment")} />
  </div>

  <TutorialIcon on:click={() => dispatch("tutorial")} />
</div>

<style>

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
