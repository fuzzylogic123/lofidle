<script>
  export let correctArtist;
</script>

<svg
  style:stroke={correctArtist ? "#b9951fb8" : "#e20909b8"}
  class="icon"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>

<style>
  .icon {
    fill: #b9951fb8;
    scale: 0.8;
    margin-right: 0.5em;
    aspect-ratio: 1/1;
    height: 3em;
    width: 3em;
    flex-shrink: 0;
  }
  .icon:hover {
    cursor: auto;
  }
</style>
