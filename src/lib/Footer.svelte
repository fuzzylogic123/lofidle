<script>
  import { createEventDispatcher } from "svelte";
  import InfoIcon from "../assets/svg/info.svelte";
  import StatsIcon from "../assets/svg/stats.svelte";
  import PlayButton from "./PlayButton.svelte";

  export let nowPlaying;

  const dispatch = createEventDispatcher();
</script>

<div class="footer">
  <InfoIcon on:click={()=> dispatch("info")} />
  
  <PlayButton on:click {nowPlaying} />

  <StatsIcon />
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
