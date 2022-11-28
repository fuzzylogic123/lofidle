<script>
  import { getLofidleIndex } from "./functions";
  import StylisedButton from "./StylisedButton.svelte";
  import { logEvent } from "firebase/analytics";
  import { analytics } from "../firebaseConfig";
  export let timeUsed;
  export let lofidle;
  export let timeUntilNextLofidle;
  export let guesses;
  export let MAX_GUESSES;
  const isSuccess = guesses.at(-1).status == "correct";
  let copiedSucessfully = false;

  async function copyResult() {
    logEvent(analytics, "share");
    let output = "";
    if (isSuccess) {
      output += "🔊 ";
    } else {
      output += "🔇 ";
    }
    output += `#Lofidle #${getLofidleIndex() + 1}`;
    output += "\n\n";

    for (let i = 0; i < guesses.length; i++) {
      const status = guesses[i].status;
      if (status === "incorrect") {
        output += "🟥";
      } else if (status === "correct") {
        output += "🟩";
      } else if (status === "correctArtist") {
        output += "🟧";
      } else {
        output += "⬛"
      }
    }

    for (let i = 0; i < MAX_GUESSES - guesses.length; i++) {
      output += "⬜";
    }

    output += "\n\n";
    output += "https://lofidle.com";

    await navigator.clipboard.writeText(output);
    copiedSucessfully = true;
  }
</script>

<div class="answer-screen-content">
  <div class="end-screen-content">
    <div>
      {#if isSuccess}
        <div class="result">
          <div class="title">Congratulations!</div>
          <p class="subtitle">
            You got today's Lofidle in {timeUsed} second{timeUsed === 1
              ? ""
              : "s"}
          </p>
        </div>
      {:else}
        <div class="title line-height">Better Luck Next Time!</div>
      {/if}
      <img class="image" src={`${lofidle.images[1].url}`} alt="album cover" />
      <div class="song-info">
        <div class="song-name line-height">
          {lofidle.song_name}
        </div>
        <h4 class="line-height">
          {lofidle.original_artist}
        </h4>
        <h4>
          lofi cover by: <br />{lofidle.lofi_artist}
        </h4>
        <div class="button-wrapper">
          <StylisedButton on:click={copyResult}>
            <div class="button-inner-text">
              {copiedSucessfully ? "Copied!" : "Share"}
            </div>
          </StylisedButton>
        </div>
      </div>
    </div>
  </div>
  <h5 class="timer">
    Next Lofidle in {timeUntilNextLofidle}
  </h5>
</div>

<style>

  .line-height {
    line-height: 1.2em;
  }
  .timer {
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
  .end-screen-content {
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .subtitle {
    font-size: 0.8em;
  }
  .button-wrapper {
    padding-top: 0.5em;
    padding-bottom: 1em;
  }

  .button-inner-text {
    /* font-size: 2em; */
    padding: 0.1em;
  }
  .result {
    margin-top: 0.5em;
    width: 100%;
  }
  .song-info {
    margin-left: 1em;
    margin-right: 1em;
    flex-grow: 2;
  }

  .image {
    height: 9em;
    width: 9em;
    margin: 0.5em;
  }
  .song-name {
    margin-bottom: 0;
    margin-top: 0.5em;
    font-size: 2.5em;
  }

  .answer-screen-content {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: "nokia";
    width: 100%;
    flex-grow: 1;
  }

  .title {
    font-size: 2em;
  }
</style>
