<script>
  import SearchIcon from "../assets/svg/search-icon.svelte";
</script>

<div class="input-container">
  <SearchIcon />
  <input class="search-input" placeholder="Think you recognise this tune?" />
</div>

<style>
  .input-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;
    border: solid;
    border-color: rgba(245, 245, 245, 0.635);
    border-width: 1px;
    width: 90%;
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
