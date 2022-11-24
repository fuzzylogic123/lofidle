<script>
  import MusicNote from "../assets/svg/MusicNote.svelte";
  import QuestionMark from "../assets/svg/QuestionMark.svelte";
  import Modal from "./Modal.svelte";
  import StylisedButton from "./StylisedButton.svelte";
</script>

<Modal on:click>
  <div class="content">
    <h1 class="title">How to Play</h1>

    <div class="instructions-container">
      <div class="instruction-container">
        <MusicNote />
        <p class="body">Listen to a Lofi cover of a popular song</p>
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
  </div>
</Modal>

<style>

  .content {
    background-color: #f5ddec;
    z-index: 100;
    border-radius: 1em;
    border: 2px black solid;
    filter: drop-shadow(-1em 1em 0 #d66ee7);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2em;
    padding-bottom: 2em;
    max-width: 360px;
    margin-left: 1em;
    gap: 1em;
  }

  .title {
    color: #713f8f;
    font-family: "Vibur";
    font-size: 4em;
    margin: 0;
  }

  .button-text {
    font-size: 3em;
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
