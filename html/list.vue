<template>
  <header class="navbar">
    <a href="/" class="navbar__logo">cartrader</a>
  </header>

  <main class="container">
    <div class="filter">
      <div class="filter__item">
        <h4>Location</h4>
        <span>Ottawa</span>
        <div class="filter__item__tool">
          <input type="text" placeholder="Search by city...">
          <button type="submit">Apply</button>
        </div>
      </div>
      <div class="filter__item">
        <h4>Make</h4>
        <span>Any</span>
      </div>
      <div class="filter__item">
        <h4>Price</h4>
        <span>Any</span>
      </div>
    </div>

    <div class="list">
      <a class="list__card" href="#">
        <img src="https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg" alt="Car">
        <div class="list__card__details">
          <div class="list__card__details__info">
            <h3>Range Rover Sport</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolorum magni voluptate hic id velit perspiciatis.</p>
          </div>
          <span class="list__card__details__price">R$ 84,777</span>
        </div>
      </a>

      <a class="list__card" href="#">
        <img src="https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg" alt="Car">
        <div class="list__card__details">
          <div class="list__card__details__info">
            <h3>Range Rover Sport</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolorum magni voluptate hic id velit perspiciatis.</p>
          </div>
          <span class="list__card__details__price">R$ 84,777</span>
        </div>
      </a>
    </div>
  </main>
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

  .container {
    display: flex;
    gap: 60px;
  }

  .filter {
    width: 25%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
    align-self: flex-start;

    &__item {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
      padding: 30px 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      font-family: sans-serif;

      h4 {
        font-weight: bold;
      }

      span {
        color: #0EA5E9;
      }

      &__tool {
        display: none;
        flex-direction: column;
        gap: 5px;
        padding: 20px;
        background: white;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
        width: 300px;
        position: absolute;
        top: 0;
        left: 250px;
        z-index: 99;

        input {
          width: 100%;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          padding: 10px;
          font-family: sans-serif;
          font-size: 16px;
          outline: none;
        }

        button {
          color: white;
          background: #0EA5E9;
          border: none;
          font-family: sans-serif;
          border-radius: 10px;
          padding: 10px;
          font-size: 16px;
          cursor: pointer;
        }
      }
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 75%;

    &__card {
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
  }
</style>
