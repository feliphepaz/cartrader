<template>
  <img src="https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg" alt="Car">
  <div class="head">
    <div class="head__info">
      <h2>Range Rover Sport</h2>
      <p>5 seats | 14,666 miles</p>
    </div>
    <span class="head__price">$84,777</span>
  </div>
</template>

<style lang="scss" scoped>
  .head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-family: sans-serif;
    margin: 40px 0px 20px 0px;

    &__info {
      display: flex;
      flex-direction: column;
      gap: 10px;

      h2 {
        font-size: 32px;
        font-weight: bold;
      }

      p {
        color: rgba(0, 0, 0, 0.7);
      }
    }

    &__price {
      font-size: 28px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.7);
    }
  }
</style>
