<template>
  <div v-if="isLoading" class="loading">
    <h2>Loading...</h2>
  </div>

  <div v-else-if="notFound" class="not-found">
    <h2>Cars not found</h2>
  </div>

  <div v-else class="list">
    <ListCard
      v-for="car in cars"
      @favor="handleFavorite"
      :key="car.id"
      :car="car"
      :favored="car.id in favorite"
    />
  </div>
</template>

<script setup lang="ts">
  const { isLoading, data: cars, notFound } = await useFetchCars()

  const favorite = useLocalStorage('favorite', {})

  function handleFavorite(id: keyof typeof favorite.value) {
    if (id in favorite.value) {
      delete favorite.value[id]
    } else {
      favorite.value = {
        ...favorite.value,
        [id]: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .loading,
  .not-found {
    width: 75%;

    h2 {
      font-family: sans-serif;
      letter-spacing: 0.1px;
    }
  }

  .not-found {
    h2 {
      color: red;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 75%;
  }
</style>
