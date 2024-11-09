<template>
  <div class="select">
    <label :for="title">{{ title }}</label>
    <select v-model="value" :name="title" :id="title">
      <option value="">Select</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    title: string
    options: string[]
  }

  defineProps<Props>()

  const value = defineModel()
</script>

<style lang="scss" scoped>
  .select {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      font-family: sans-serif;
    }

    select {
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
