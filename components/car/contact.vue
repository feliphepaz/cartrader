<template>
  <div class="contact">
    <p>{{ description }}</p>
    <form>
      <input type="text" placeholder="Name">
      <input type="text" placeholder="Email">
      <input type="text" placeholder="Phone">
      <textarea placeholder="Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    description: string
  }

  defineProps<Props>()
</script>

<style lang="scss" scoped>
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
