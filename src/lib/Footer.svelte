<script>
  import { createEventDispatcher } from "svelte";
  import TutorialIcon from "../assets/svg/Tutorial.svelte";
  import InfoIcon from "../assets/svg/InfoIcon.svelte";
  import PlayButton from "./PlayButton.svelte";

  export let nowPlaying;

  const dispatch = createEventDispatcher();
</script>

<div class="footer">
  <InfoIcon on:click={()=> dispatch("info")} />
  
  <PlayButton on:click {nowPlaying} />
  
  <TutorialIcon on:click={()=> dispatch("tutorial")} />
</div>

<style>
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 6em;
    width: 100%;
  }

</style>
