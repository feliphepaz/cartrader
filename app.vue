<template>
  <div>
  <!-- NAVBAR -->
  <header class="navbar">
    <a href="/" class="navbar__logo">cartrader</a>
  </header>
  <!-- NAVBAR -->

  <!-- HERO HOME -->
  <section class="hero-home">
    <div class="hero-home__blur" />
    <div class="hero-home__content">
      <h1 class="hero-home__content__title">Find your driver</h1>
    </div>
  </section>
  <!-- HERO HOME -->
  </div>
</template>

<style lang="scss" scoped>
  .navbar {
    position: sticky;
    top: 0;
    z-index: 50;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2em;
    background: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &__logo {
      font-family: monospace;
      font-weight: bold;
      font-size: 32px;
      text-decoration: none;
      color: black;
    }
  }

  .hero-home {
    position: relative;
    height: calc(100vh - 70px);
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    background-image: url('https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg');

    &__blur {
      position: absolute;
      z-index: 10;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: black;
      opacity: 0.5;
    }

    &__content {
      position: absolute;
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;

      &__title {
        font-family: serif;
        font-size: 84px;
        color: white;
        text-align: center
      }
    }
  }
</style>
