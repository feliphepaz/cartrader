<template>
  <header class="navbar">
    <NuxtLink to="/" class="navbar__logo">cartrader</NuxtLink>
  </header>
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
</style>
