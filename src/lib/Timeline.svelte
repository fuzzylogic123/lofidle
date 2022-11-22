<script>
  export let increments;
  export let currentSegment;

  const sum = (/** @type {Number[]} */ array) =>
    array.reduce((partialSum, a) => partialSum + a, 0);
</script>

<div class="timeline-container">
  {#each increments as increment, i}
    <div class="segment" style="width: {(increment / sum(increments)) * 100}%">
      {#if i <= currentSegment}
        <div class="inner-segment" style="animation-delay: {sum(increments.slice(0, i))}s; animation-duration: {increment}s;"/>
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
    /* border-radius: 0 3em 3em 0; */
    border-radius: 3em;
    height: 100%;
    width: 100%;
    opacity: 0;
    background-color: #fdb8d1e2;
    animation-name: animate-progress;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    transform-origin: left;
  }

  @keyframes animate-progress {
    from {
      width: 10px;
      opacity: 1;
      /* transform: scaleX(0%); */
      /* width: 0%; */
    }
    to {
      width: 100%;
      opacity: 1;
      /* transform: scaleX(100%); */
    }
  }

  @keyframes reveal-left {
    from {
      opacity: 1;
    }
    to {
      opacity: 1;
    }
  }
</style>
