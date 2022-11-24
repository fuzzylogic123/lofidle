<div class="icon-bars">
  <div class="bar" />
  <div class="bar" />
  <div class="bar" />
</div>

<style>
  .icon-bars {
    position: relative;
    width: 100px;
    transform-origin: 28px;
    height: 100px;
    transform: scale(0.2);
    z-index: 100000;
    box-sizing: border-box;
  }
  .icon-bars .bar {
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    width: 20px;
    background-color: #f99b9b;
    -webkit-animation: up-down 0.6s infinite;
    animation: up-down 0.6s infinite;
    transform-origin: bottom;
  }
  .icon-bars .bar:nth-child(2) {
    left: 40px;
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
  }
  .icon-bars .bar:nth-child(3) {
    left: 80px;
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
  }

  @-webkit-keyframes up-down {
    from {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }

  @keyframes up-down {
    from {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }
</style>
