<script>
  import MusicNote from "../assets/svg/MusicNote.svelte";
  import QuestionMark from "../assets/svg/QuestionMark.svelte";
  import Modal from "./Modal.svelte";
  import StylisedButton from "./StylisedButton.svelte";
</script>

<Modal on:click>
    <h1 class="title">How to Play</h1>

    <div class="instructions-container">
      <div class="instruction-container">
        <MusicNote />
        <p class="body">Listen to a LoFi cover of a popular song</p>
      </div>

      <div class="instruction-container">
        <QuestionMark />
        <p class="body">Try to guess what the original song was</p>
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
    color: #713f8f;
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
    color: #713f8f;
    font-size: 1.2em;
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

  .button-container {
    margin: 1em;
  }
</style>
