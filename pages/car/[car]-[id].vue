<template>
  <main class="container">
    <img src="https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg" alt="Car">
    <div class="head">
      <div class="head__info">
        <h2>Range Rover Sport</h2>
        <p>5 seats | 14,666 miles</p>
      </div>
      <span class="head__price">$84,777</span>
    </div>

    <ul class="benefits">
      <li>
        No Accidents
      </li>
      <li>
        Low KM
      </li>
      <li>
        Vehicle Detailed
      </li>
      <li>
        Leather Interior
      </li>
    </ul>

    <div class="contact">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, incidunt explicabo dignissimos!</p>
      <form action="POST">
        <input type="text" placeholder="Name">
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Phone">
        <textarea placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
  const route = useRoute()
  const car = route.params.car as string

  useHead({
    title: toTitleCase(car)
  })

  function toTitleCase(string: string) {
    return string.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
  }
</script>

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

  .benefits {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-family: sans-serif;

    li {
      display: flex;
      align-items: center;
      letter-spacing: 0.1px;
      gap: 10px;

      &:before {
        content: " ";
        display: block;
        height: 4px;
        width: 4px;
        background: rgba(0, 0, 0, 0.7);
      }
    }
  }

  .contact {
    margin-top: 20px;
    font-family: sans-serif;

    p {
      font-size: 14px;
      margin-bottom: 20px;
      letter-spacing: 0.1px;
    }

    form {
      display: flex;
      gap: 10px;

      input, textarea {
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
        padding: 10px 40px;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
</style>
