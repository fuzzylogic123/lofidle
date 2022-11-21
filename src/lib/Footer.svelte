<script>
  import InfoIcon from "../assets/svg/info.svelte";
  import StatsIcon from "../assets/svg/stats.svelte";
  import PlayButton from "../assets/svg/play-button.svelte";
</script>

<div class="footer">
  <InfoIcon />

  <button class="play-button">
    <PlayButton />
  </button>

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

  .play-button {
    border-radius: 1000em;
    height: 4em;
    width: 4em;
    background-color: white;
    filter: drop-shadow(-0.25em 0.45em 0 #d66ee7);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-bottom: 0.7em;
    outline: none;
    border: none;
    
  }

  .play-button:active {
    outline: none;
    transform: translate(-0.25em, 0.45em);
    filter: none;
  }
</style>
