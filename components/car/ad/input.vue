<template>
  <div class="input">
    <label :for="title">{{ title }}</label>
    <input v-model="value" type="text" :name="title" :id="title" :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
  interface Props {
    title: string
    placeholder: string
  }

  defineProps<Props>()

  const value = defineModel()
</script>

<style lang="scss" scoped>
  .input {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      font-family: sans-serif;
    }

    input {
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.1);
      font-family: sans-serif;
      border-radius: 10px;
      padding: 10px;
      font-size: 16px;
      outline: none;
    }
  }
</style>
