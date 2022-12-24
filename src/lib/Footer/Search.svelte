<script>
  import { songs } from "../../assets/music/songs";
  import SearchIcon from "../../assets/svg/SearchIcon.svelte";
  import { createEventDispatcher } from "svelte";
  import StylisedButton from "../Buttons/StylisedButton.svelte";

  let inputRef;
  let query = "";
  let autoCompleteOptions = [];
  let showAutoCompleteList = false;

  const dispatch = createEventDispatcher();

  // const debounce = (func, delay) => {
  //   let debounceTimer;
  //   return function () {
  //     const context = this;
  //     const args = arguments;
  //     clearTimeout(debounceTimer);
  //     debounceTimer = setTimeout(() => func.apply(context, args), delay);
  //   };
  // };

  const scrollToBottom = (node) => {
    const scroll = () =>
      node.scroll({
        top: node.scrollHeight,
      });
    scroll();

    return { update: scroll };
  };

  async function getAutoCompleteOptions() {
    showAutoCompleteList = true;
    autoCompleteOptions = [];
    const RESULT_LIMIT = 30;
    let result_counter = 0;
    if (query === "") return;
    for (let i = 0; i < songs.length; i++) {
      const song = songs[i].replace(/'/g, '');
      if (song.includes(query.toLowerCase().replace(/'/g, ''))) {
        autoCompleteOptions.push(song);
        result_counter += 1;
        if (result_counter > RESULT_LIMIT) {
          return;
        }
      }
    }
    autoCompleteOptions.sort((a, b) => a.length - b.length);
    showAutoCompleteList = true;
  }

  function selectGuess(autoCompleteOption) {
    autoCompleteOptions = [];
    query = autoCompleteOption;
    showAutoCompleteList = false;
  }

  function makeGuess() {
    dispatch("guess", query);
    query = "";
  }

  function makeGuessWrapper(event) {
    if (
      inputRef.value !== "" &&
      (event.key === undefined || event.key === "Enter") &&
      songs.includes(inputRef.value)
    ) {
      makeGuess();
    }
  }
</script>

<div class="flex-row">
  <div class="auto-complete-container">
    {#if autoCompleteOptions.length > 0 && showAutoCompleteList}
      <div class="auto-complete-list">
        {#each autoCompleteOptions as autoCompleteOption}
          <div
            class="auto-complete-option"
            on:click={() => selectGuess(autoCompleteOption)}
            on:keypress={() => selectGuess(autoCompleteOption)}
          >
            {autoCompleteOption}
          </div>
        {/each}
      </div>
    {/if}
    <div class="input-container">
      <SearchIcon />
      <input
        on:keypress={makeGuessWrapper}
        bind:value={query}
        on:input={() => getAutoCompleteOptions()}
        on:focus={() => getAutoCompleteOptions()}
        bind:this={inputRef}
        class="search-input"
        placeholder="Think you recognise this tune?"
      />
    </div>
  </div>
  <StylisedButton on:click={makeGuessWrapper}>GO</StylisedButton>
</div>

<style>
  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 1em;
    width: 90%;
    align-items: center;
  }
  /* .hidden {
    opacity: 0;
  } */
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
    z-index: 200;
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
    /* max-height: 50vh; */
    max-height: 250px;

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
    padding-right: 0;
    width: 100%;
    font-family: "nokia";
    color: whitesmoke;
  }

  .search-input::placeholder {
    color: rgba(255, 255, 255, 0.9);
  }

  .search-input:focus::placeholder {
    color: transparent;
  }
</style>
