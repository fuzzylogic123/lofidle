<script>
  import { sum } from "./lib/functions";
  import Footer from "./lib/Footer.svelte";
  import Guesses from "./lib/Guesses.svelte";
  import Search from "./lib/Search.svelte";
  import Timeline from "./lib/Timeline.svelte";

  let increments = [2, 4, 8, 16];
  let guesses;
  let currentSegment = 1;
  let audio = new Audio(
    "https://p.scdn.co/mp3-preview/0e96b1c387f7987f6eda026172e7e63f22a56b46?cid=774b29d4f13844c495f206cafdad9c86"
  );
  let audioPlayed = false;
  let nowPlaying = false;
  let timeoutHandle = null;

  function playMusic() {
    if (audio.paused) {
      audio.currentTime = 0;
      audio.play();
      nowPlaying = true;
      audioPlayed = true;
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
</script>

<main class="content">
  <h1 class="title">Lofidle</h1>
  <Guesses {guesses} {increments} />
  <Timeline {increments} {currentSegment} {nowPlaying} />
  <Search {audioPlayed} />
  <Footer on:click={playMusic} />
</main>

<div class="lines" />
<div class="background-image" />

<style>
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
    background-image: url("./assets/img/lofi.gif");
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
    gap: 1em;
    max-width: 640px;
    width: 100%;
    align-items: center;
  }
</style>
