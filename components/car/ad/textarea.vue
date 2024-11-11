<template>
  <div class="textarea">
    <label :for="title">{{ title }}</label>
    <textarea v-model="value" type="text" :name="title" :id="title" />
  </div>
</template>

<script setup lang="ts">
  interface Props {
    title: string
  }

  defineProps<Props>()

  const value = defineModel<string>()
</script>

<style lang="scss" scoped>
  .textarea {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      font-family: sans-serif;
    }

    textarea {
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.1);
      font-family: sans-serif;
      border-radius: 10px;
      min-height: 100px;
      padding: 10px;
      font-size: 16px;
      outline: none;
      resize: vertical;
    }
  }
</style>
