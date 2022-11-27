<script>
  import PlayIcon from "../assets/svg/PlayIcon.svelte";
  import RoundButton from "./RoundButton.svelte";
  import Waveform from "./Waveform.svelte";

  export let nowPlaying;
</script>

<RoundButton on:mousedown>
  {#if !nowPlaying}
    <PlayIcon />
  {:else}
    <Waveform />
  {/if}
</RoundButton>
