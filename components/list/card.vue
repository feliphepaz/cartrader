<template>
  <a class="card" href="#">
    <img src="https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg" alt="Car">
    <div class="card__details">
      <div class="card__details__info">
        <h3>Range Rover Sport</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolorum magni voluptate hic id velit perspiciatis.</p>
      </div>
      <span class="card__details__price">R$ 84,777</span>
    </div>
  </a>
</template>

<style lang="scss" scoped>
  .card {
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
    color: black;
    text-decoration: none;

    img {
      width: 300px;
      height: 220px;
      object-fit: cover;
    }

    &__details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;

      &__info {
        display: flex;
        flex-direction: column;
        font-family: sans-serif;
        gap: 20px;

        h3 {
          font-weight: bold;
          font-size: 24px;
        }

        p {
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.1px;
          color: rgba(0, 0, 0, 0.7);
        }
      }

      &__price {
        font-weight: bold;
        font-size: 18px;
        font-family: sans-serif;
      }
    }
  }
</style>
