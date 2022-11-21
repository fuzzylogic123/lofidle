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

</script>

<div class="timeline-container">
    {#each Array(5) as _, i}
    <div class={"div-" + String(i+1) + " segment"}>
        <div class={"segment-" + String(i+1)}></div>
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
        padding: 1em;
        gap: 1em;
    }

    .div-1 {
        width: 3%;
    }

    .div-2 {
        width: 10%;
    }

    .div-3 {
        width: 20%;
    }

    .div-4 {
        width: 40%;
    }

    .div-5 {
        width: 27%;
    }

    .segment {
        height: 1em;
        background-color: rgba(240, 248, 255, 0.342);
        border-radius: 2em;
        z-index: -1;
    }

    .segment-4 {
        border-radius: 2em;
        width: 50%;
        height: 100%;
        background-color: navy;
    }

</style>