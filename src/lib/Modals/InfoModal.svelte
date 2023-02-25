<script>
  import Modal from "./Modal.svelte";
  import StylisedButton from "../Buttons/StylisedButton.svelte";
</script>

<Modal on:click>
  <div class="content-wrapper">
    <h1 class="title">info</h1>

    <p class="body">
      See more by me:
      <br />
      <a
        href="https://patrickedwards.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        patrickedwards.dev
      </a>
      <br />
    </p>
    <div class="body small">
      For bugs or song suggestions, contact me:
      <br />
      <p class="smaller">edwards.patrick247@gmail.com</p>
    </div>

    <p class="made-by body">
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
    /* min-width: 375px; */
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5em;
    padding-bottom: 0;
  }
  .title {
    color: var(--modal-text-color);
    font-family: "Vibur";
    font-size: 4em;
    margin: 0.25em;
    margin-bottom: 0;
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
    color: var(--modal-text-color);
    font-size: 1em;
    font-family: "tauri";
    margin: 0.5em;
  }

  .small {
    font-size: 1em;
    width: 100%;
  }

  .smaller {
    margin: 0;
    /* margin-top: 0.1em; */
    font-weight: 600;
    font-style: italic;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  .made-by {
    margin-top: -0.1em;
    margin-bottom: 1em;
  }
</style>
