<template>
  <main class="hero">
    <div class="hero__blur" />
    <div class="hero__content">
      <h1 class="hero__content__title">Find your driver</h1>
      <HomeSearch />
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .hero {
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
      flex-direction: column;
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
