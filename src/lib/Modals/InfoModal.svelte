<script>
  import Modal from "./Modal.svelte";
  import StylisedButton from "../Buttons/StylisedButton.svelte";

</script>

<Modal on:click>
  <div class="content-wrapper">
  <h1 class="title">
    info
  </h1>
  
  <p class="body">
    See more by me:
    <br />
    <a href="https://patrickedwards.dev" target="_blank" rel="noopener noreferrer">
      patrickedwards.dev
    </a>
  </p>

  <p class="body">
    Made by <br />🔥 <b>Patrick Edwards</b> 🔥
  </p>

  <div class="button-container">
  <StylisedButton on:click>
    <div class="button-text">cool</div>
  </StylisedButton>
</div>

</div>
</Modal>


<style>

  .content-wrapper {
    padding: 1em;
    padding-top: 0;
    min-width: 375px;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding-bottom: 0;
  }
    .title {
    color: #713f8f;
    font-family: "Vibur";
    font-size: 4em;
    margin: 0.25em;
  }

  .button-text {
    font-size: 2em;
    height: 100%;
    padding: 0.1em;
  }

  .button-container {
    margin: 1em;
    margin-bottom: 0;
  }

  .body {
    color: #713f8f;
    font-size: 1.2em;
    font-family: "tauri";
  }
</style>