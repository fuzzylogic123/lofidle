<script>
  import { sum, parseMillisecondsIntoReadableTime } from "./lib/functions";
  import Footer from "./lib/Footer.svelte";
  import Guesses from "./lib/Guesses.svelte";
  import Search from "./lib/Search.svelte";
  import Timeline from "./lib/Timeline.svelte";
  import TutorialModal from "./lib/TutorialModal.svelte";
  import InfoModal from "./lib/InfoModal.svelte";
  import { getLofidle } from "./assets/answers.js";

  let showInfo = false;

  const lofidle = getLofidle();

  let showFinalPage = false;
  let increments = [2, 4, 8, 16];
  let guesses = [];
  let currentSegment = 1;
  let audio = new Audio(lofidle.lofi_preview_url);
  let nowPlaying = false;
  let timeoutHandle = null;
  let timeUntilNextLofidle = "soon";
  let showTutorial;

  updateFromLocalStorage();

  $: if (guesses.length !== 0) {
    localStorage.setItem("guesses", JSON.stringify(guesses));
  }

  $: if (currentSegment > 1) {
    localStorage.setItem("currentSegment", JSON.stringify(currentSegment));
  }

  function isSuccess() {
    return guesses.at(-1) ===`${lofidle.song_name} - ${lofidle.original_artist}`.toLocaleLowerCase()
  }

  $: if (guesses.length >= increments.length || isSuccess()) {
    visitLastPage();
  }

  function playMusic() {
    if (audio.paused) {
      audio.currentTime = 0;
      audio.play();
      nowPlaying = true;
      timeoutHandle = setTimeout(() => {
        audio.pause();
        nowPlaying = false;
        if (currentSegment < increments.length) {
          currentSegment += 1;
        }
      }, sum(increments.slice(0, currentSegment)) * 1000);
    } else {
      audio.pause();
      nowPlaying = false;
      clearTimeout(timeoutHandle);
    }
  }

  function setTimeUntilNextLofidle() {
    const now = new Date();
    const nextLofidle = new Date();
    nextLofidle.setHours(24, 0, 0, 0);

    const timeDiff = Math.max(nextLofidle.getTime() - now.getTime(), 0);
    timeUntilNextLofidle = parseMillisecondsIntoReadableTime(timeDiff);
  }

  function playAnswer() {
    audio.currentTime = 0;
    audio.src = lofidle.original_preview_url;
    audio.loop = true;
    audio.play();
  }

  function visitLastPage() {
    showFinalPage = true;
    setTimeUntilNextLofidle();
    setInterval(setTimeUntilNextLofidle, 1000);
    playAnswer();
  }

  function appendGuess(event) {
    const guess = event.detail;
    guesses.push(guess);
    guesses = guesses;
  }

  function updateFromLocalStorage() {
    if (
      !localStorage.getItem("lastCheckIn") ||
      new Date(
        JSON.parse(localStorage.getItem("lastCheckIn"))
      ).toDateString() !== new Date().toDateString()
    ) {
      localStorage.setItem("lastCheckIn", JSON.stringify(new Date()));
      localStorage.setItem("guesses", JSON.stringify([]));
      localStorage.setItem("currentSegment", JSON.stringify(1));
    } else {
      guesses = JSON.parse(localStorage.getItem("guesses"));
      currentSegment = JSON.parse(localStorage.getItem("currentSegment"));
      localStorage.setItem("lastCheckIn", JSON.stringify(new Date()));
    }

    showTutorial = !localStorage.getItem("firstVisit");
    localStorage.setItem("firstVisit", JSON.stringify(false));
  }
</script>

{#if showTutorial}
  <TutorialModal on:click={() => (showTutorial = false)} />
{:else if showInfo}
  <InfoModal on:click={() => (showInfo = false)} />
{/if}

<main class="content">
  <h1 class="title">Lofidle</h1>

  <!-- {#if false} -->
  {#if !showFinalPage}
    <Guesses {guesses} {increments} />
    <Timeline {increments} {currentSegment} {nowPlaying} />
    <Search showSearch={currentSegment > 0} on:guess={appendGuess} />
    <Footer
      on:click={playMusic}
      on:info={() => (showInfo = true)}
      on:tutorial={() => (showTutorial = true)}
      {nowPlaying}
    />
  {:else}
    <div class="answer-screen-content">
      <h1 class="outcome-message title">
        {isSuccess() ? "Congratulations!" : "Better Luck Next Time!"}
      </h1>
      <img class="image" src={`${lofidle.images[1].url}`} alt="album cover" />
      <div>
        <h2 class="song-name">
          {lofidle.song_name}
          <br />
          {lofidle.original_artist}
        </h2>
        <h4>
          lofi cover by: {lofidle.lofi_artist}
        </h4>
        <h5>
          Next Lofidle in {timeUntilNextLofidle}
        </h5>
      </div>
    </div>
  {/if}
</main>

<div class="lines" />
<div class="background-image" />

<style>
  .answer-screen-content > .title {
    font-size: 1.5em;
    padding: 1em;
  }
  .image {
    height: 10em;
    width: 10em;
  }
  .song-name {
    line-height: 1.3em;
  }
  .answer-screen-content {
    /* padding: 3em; */
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    gap: 1em;
    color: white;
    font-family: "nokia";
  }

  .lines {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    background-size: 1%;
    z-index: -1;
    opacity: 0.05;
    background-repeat: repeat;
    background-image: url("./assets/img/lines.jpg");
  }
  .background-image {
    z-index: -2;
    position: absolute;
    top: 0;
    left: 0;
    /* background-image: url("./assets/img/lake.gif"); */
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("./assets/img/lake.gif");
    background-blend-mode: multiply;
    background-size: cover;
    background-position: 50% 80%;
    height: 100%;
    width: 100vw;
    filter: blur(1px);
    -webkit-filter: blur(1px);
    box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.703);
  }

  .title {
    font-family: "nokia";
    position: relative;
    color: whitesmoke;
    font-size: 3em;
    margin: 0;
  }

  .content {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    gap: 0.6em;
    max-width: 640px;
    width: 100%;
    align-items: center;
  }
</style>
