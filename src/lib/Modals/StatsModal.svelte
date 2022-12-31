<script>
  // @ts-nocheck

  import Graph from "../Graph/Graph.svelte";
  import Modal from "./Modal.svelte";

  export let previousScores;
  export let maxIncrement;

  function getGamesWon() {
    return previousScores.filter((x) => x >= 1).length;
  }

  function getTotalGamesPlayed() {
    return previousScores.filter((x) => x !== 0).length;
  }

  function getMaxStreak() {
    let currentSequenceLength = 0;
    let longestSequenceLength = 0;

    for (let i = 0; i < previousScores.length; i++) {
      if (previousScores[i] > 0) {
        currentSequenceLength += 1;
        longestSequenceLength = Math.max(
          longestSequenceLength,
          currentSequenceLength
        );
      } else {
        currentSequenceLength = 0;
      }
    }
    return longestSequenceLength;
  }

  function getCurrentStreak() {
    let streakLength = 0;
    for (let i = previousScores.length - 1; i >= 0; i--) {
      if (previousScores[i] > 0) {
        streakLength += 1;
      } else {
        return streakLength;
      }
    }
    return 0;
  }

  function getAccuracy() {
    if (getTotalGamesPlayed() === 0) {
      return 0;
    }
    return Math.floor((getGamesWon() / getTotalGamesPlayed()) * 100);
  }
</script>

<Modal on:click>
  <div class="content-wrapper">
    <h1 class="title">Stats</h1>
    <Graph {maxIncrement} {previousScores} />
    <div class="stats-wrapper">
      <div class="stat-item">
        <h4 class="x-axis-label figure">{getGamesWon()}</h4>
        <h4 class="x-axis-label">correct</h4>
      </div>
      <div class="stat-item">
        <h4 class="x-axis-label figure">
          {getCurrentStreak()} : {getMaxStreak()}
        </h4>
        <h4 class="x-axis-label">current : max <br /> streak</h4>
      </div>
      <div class="stat-item">
        <h4 class="x-axis-label figure">
          {getAccuracy()}%
        </h4>
        <h4 class="x-axis-label">accuracy</h4>
      </div>
      <!-- <div class="stat-item">
        <h4 class="x-axis-label figure">1</h4>
        <h4 class="x-axis-label">streak</h4>
      </div> -->
    </div>
  </div>
</Modal>

<style>
  .stat-item {
    display: flex;
    flex-direction: column;
    height: 3em;
    width: 5rem;
    /* flex: 1 1 0px;
    width: 0; */
  }
  .x-axis-label {
    color: var(--modal-text-color);
    margin: 0;
    font-size: 0.7em;
    margin-top: 0.2em;
    text-transform: lowercase;
    line-height: 1em;
  }

  .figure {
    font-size: 1.5em;
    font-weight: 900;
    margin-bottom: 0.2em;
    font-weight: bold;
  }

  .stats-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    align-items: center;
  }

  .title {
    color: var(--modal-text-color);
    font-family: "Vibur";
    font-size: 3em;
    margin: 0.5em;
    margin-bottom: 0;
  }

  .content-wrapper {
    padding: 1em;
    padding-top: 0;
    width: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5em;
    padding-bottom: 0;
    margin-bottom: 0;
  }
</style>
