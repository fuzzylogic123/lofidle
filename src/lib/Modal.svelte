<div on:click|self on:keypress|self class="modal">
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .modal {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }

  .content {
    background-color: #f5ddec;
    z-index: 100;
    border-radius: 1em;
    border: 2px black solid;
    filter: drop-shadow(-1em 1em 0 #d66ee7);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2em;
    padding-bottom: 2em;
    max-width: 360px;
    margin-left: 1em;
    gap: 1em;
  }
</style>
