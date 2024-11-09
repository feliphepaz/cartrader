<template>
  <div class="message">
    <h3>Laith Harb</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, dicta! Harum ipsum minus necessitatibus totam.</p>
    <div class="message__contact">
      <p class="message__contact__email">laith@email.com</p>
      <p class="message__contact__tel">555-555-5555</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .message {
    font-family: sans-serif;
    padding: 20px;

    &:nth-child(odd) {
      background: rgba(0, 0, 0, 0.05);
    }

    h3 {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 8px;
    }

    > p {
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.1px;
      color: rgba(0, 0, 0, 0.7);
      margin-bottom: 16px;
    }

    &__contact {
      display: flex;
      gap: 40px;

      &__email {
        font-size: 14px;
        color: green;
      }

      &__tel {
        font-size: 14px;
        color: #0EA5E9;
      }
    }
  }
</style>
