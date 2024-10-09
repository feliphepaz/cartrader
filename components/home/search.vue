<template>
  <form @submit.prevent="searchCity" class="search">
    <input
      v-model="city"
      @input="cleanError"
      type="text"
      :class="error ? 'error' : ''"
      placeholder="Search by city..."
    />
    <button type="submit">Search</button>
  </form>
</template>

<script setup lang="ts">
  const city = ref('')
  const error = ref(false)

  function cleanError() {
    error.value = false
  }

  function searchCity() {
    if (!city.value) {
      error.value = true
      return
    }
    navigateTo(`/city/${city.value}/car`)
  }
</script>

<style lang="scss" scoped>
  .search {
    display: flex;
    width: 100%;
    max-width: 600px;
    margin-top: 40px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    input {
      width: 100%;
      border: 2px solid white;
      border-radius: 20px 0px 0px 20px;
      padding: 14px 20px;
      font-family: serif;
      font-size: 24px;
      outline: none;

      &.error {
        border: 2px solid red;
      }
    }

    button {
      color: white;
      background: #0EA5E9;
      border: none;
      font-family: serif;
      border-radius: 0px 20px 20px 0px;
      padding: 14px 20px;
      font-size: 24px;
      cursor: pointer;
    }
  }
</style>
