<script>
  import { sum } from "../utils";
  export let increments;
  export let guesses;
  export let nowPlaying;

  $: if (nowPlaying) {
    document.querySelectorAll(".inner-segment").forEach((innerSegment) => {
      // @ts-ignore
      innerSegment.style.display = "none";
      // @ts-ignore
      innerSegment.offsetHeight;
      // @ts-ignore
      innerSegment.style.display = "block";
    });
  }
</script>

<div class="timeline-container">
  {#each increments as increment, i (i)}
    <div
      class:active-segment={i < guesses.length + 1}
      class="segment"
      style="width: {(increment / sum(increments)) * 100}%"
    >
      {#if nowPlaying}
        <div
          class="inner-segment"
          style:visibility="{i <= guesses.length ? 'visible' : 'hidden'}"
          style:animation-delay="{sum(increments.slice(0, i))}s"
          style:animation-duration="{increment}s"
        />
      {/if}
    </div>
  {/each}
</div>

<style>
  .timeline-container {
    width: 90%;
    height: 3em;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
    z-index: 10;
  }

  .segment {
    height: 1em;
    background-color: rgba(240, 248, 255, 0.326);
    border-radius: 2em;
    z-index: -1;
    display: flex;
    align-items: center;
  }

  .inner-segment {
    border-radius: 3em;
    height: 100%;
    width: 100%;
    opacity: 0;
    /* background-color: whitesmoke; */
    background-color: #e8ade8;
    animation-name: animate-progress;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    transform-origin: left;
  }

  .active-segment {
    /* background-color: #f9f8f890; */
    background-color: #e8ade88e;
  }

  @keyframes animate-progress {
    from {
      width: 10px;
      opacity: 1;
    }
    to {
      width: 100%;
      opacity: 1;
    }
  }
</style>
