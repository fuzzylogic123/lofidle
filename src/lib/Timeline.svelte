<!--
to do timeline option 1:
mask out a normal animated progress bar
create png mask, screenshot css in black and white and then apply this mask distorting on the x axis to fit screen size

option 2:
accept as input the number that the bar is up to, activate the animation classes on these segments, create animation delay to 
be the cumulative time that the bar has been in motion. This idea is actually very easy.
Just set up classes with linear animation properties and animation delays and animation durations that are accurate.
Then activate this class if the segment that it is up to is shorter than the segment we are up to. This should be started as a callback from
when the audio starts playing

option 3:
give up and do lines in between the progress bar

Animation duration should match with song segment length in both cases
-->
<script>
  export let increments = [2, 2, 2, 4, 8, 16];

  const sum = (/** @type {Number[]} */ array) =>
    array.reduce((partialSum, a) => partialSum + a, 0);
</script>

<div class="timeline-container">
  {#each increments as increment, i}
    <div
      class={"segment"}
      style="width: {(increment / sum(increments)) * 100}%"
    >

    <div class="left" style="animation-delay: {sum(
        increments.slice(0, i)
      )}s; animation-duration: {increment}s;">

    </div>
      <div
        class={"inner-segment"}
        style="animation-delay: {sum(
          increments.slice(0, i)
        )}s; animation-duration: {increment}s;"
      />
    </div>
  {/each}
</div>

<style>
.left {
    height: 100%;
    width: 10px;
    opacity: 0;
    background-color: #ff99be;
    border-radius: 3em 0 0 3em;
    animation-name: reveal-left;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
}

  .timeline-container {
    width: 100%;
    height: 3em;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1em;
    gap: 1em;
  }

  .segment {
    height: 1em;
    background-color: rgba(240, 248, 255, 0.342);
    border-radius: 2em;
    z-index: -1;
    display: flex;
    align-items: center;
  }

  .inner-segment {
    border-radius: 0 3em 3em 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    background-color: #ff99be;
    animation-name: animate-progress;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    transform-origin: left;
  }

  @keyframes animate-progress {
    from {
      /* width: 10px; */
      opacity: 1;
      transform: scaleX(0%);
      /* width: 0%; */
    }
    to {
      /* width: 100%; */
      opacity: 1;
      transform: scaleX(100%);
    }
  }

  @keyframes reveal-left {
    from {
        opacity: 1
    }
    to {
        opacity: 1;
    }
  }
</style>
