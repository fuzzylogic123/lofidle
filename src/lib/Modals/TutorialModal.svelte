<script>
  import Modal from "./Modal.svelte";
  import PlayButton from "../Buttons/PlayButton.svelte";
  import SkipButton from "../Buttons/SkipButton.svelte";
  import StylisedButton from "../Buttons/StylisedButton.svelte";
</script>

<Modal on:click>
  <h1 class="title">How to Play</h1>

  <div class="instructions-container">
    <div class="instruction-container">
      <PlayButton nowPlaying={false} />
      <p class="body">
        Listen to a Lofi cover of a song and guess the original
      </p>
    </div>

    <div class="instruction-container">
      <SkipButton />
      <p class="body">Press to skip your guess and hear more</p>
    </div>
  </div>

  <div class="button-container">
    <StylisedButton on:click>
      <div class="button-text">Got it</div>
    </StylisedButton>
  </div>
</Modal>

<style>
  .title {
    color: var(--modal-text-color);
    font-family: "Vibur";
    font-size: 3em;
    margin: 0.5em;
    margin-bottom: 0;
  }

  .button-text {
    font-size: 2em;
    height: 100%;
    padding: 0.1em;
  }

  .body {
    color: var(--modal-text-color);
    font-size: 1em;
    text-align: left;
    font-family: "tauri";
  }

  .instruction-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2em;
    padding: 1em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    width: 90%;
  }

  .instructions-container {
    padding-right: 1em;
    padding-left: 0.5em;
  }

  .button-container {
    margin: 1em;
  }
</style>
