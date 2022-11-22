<script>
  import { artists } from "../assets/songs";
  import SearchIcon from "../assets/svg/search-icon.svelte";
  let query = "";
  let autoCompleteOptions = [];

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const scrollToBottom = (node) => {
    const scroll = () =>
      node.scroll({
        top: node.scrollHeight
      });
    scroll();

    return { update: scroll };
  };

  function getAutoCompleteOptions() {
    autoCompleteOptions = [];
    if (query === "") return;
    for (let i = 0; i < artists.length; i++) {
      const artist = artists[i];
      for (let j = 0; j < artist.songs.length; j++) {
        const song = artist.songs[j];
        const songString = `${artist.artist}#${song.name}`.toLowerCase();
        if (songString.includes(query.toLowerCase())) {
          autoCompleteOptions.push({
            name: song.name,
            artist: artist.artist,
          });
        }
      }
    }
    autoCompleteOptions.sort((a, b) => b.artist.length - a.artist.length);
  }

  function getAutoCompleteOptionsWrapper() {
    return debounce(getAutoCompleteOptions(), 500);
  }
</script>

<div class="auto-complete-container">
  {#if autoCompleteOptions.length > 0}
    <div class="auto-complete-list" use:scrollToBottom>
      {#each autoCompleteOptions as autoCompleteOption}
        <div class="auto-complete-option">
          {`${autoCompleteOption.name} - ${autoCompleteOption.artist}`}
        </div>
      {/each}
    </div>
  {/if}
  <div class="input-container">
    <SearchIcon />
    <input
      bind:value={query}
      on:input={getAutoCompleteOptionsWrapper}
      on:focus={getAutoCompleteOptionsWrapper}
      on:blur={() => (autoCompleteOptions = [])}
      class="search-input"
      placeholder="Think you recognise this tune?"
    />
  </div>
</div>

<style>
  .auto-complete-option {
    font-size: 0.9em;
    border-color: whitesmoke;
    border: 1px;
    border-style: solid;
    border-radius: 0.5em;
    color: white;
    font-family: "nokia";
    display: grid;
    place-items: center;
    padding: 0.3em;
  }

  .auto-complete-list {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  .auto-complete-list::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  .auto-complete-option:hover {
    background-color: rgba(158, 99, 148, 0.9);
    cursor: pointer;
  }

  .auto-complete-container {
    position: relative;
    width: 90%;
  }

  .auto-complete-list {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    background-color: rgba(188, 115, 176, 0.867);
    padding: 0.6em;
    border-radius: 1em;
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    transform-origin: top;
    z-index: 99;
    max-height: 240px;
    overflow-y: scroll;
  }
  .input-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;
    border: solid;
    border-color: rgba(245, 245, 245, 0.635);
    border-width: 1px;
    border-radius: 1em;
  }

  .search-input {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 1em;
    width: 100%;
    font-family: "nokia";
  }

  .search-input::placeholder {
    color: rgba(255, 255, 255, 0.9);
  }

  .search-input:focus::placeholder {
    color: transparent;
  }
</style>
