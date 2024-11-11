<template>
  <div class="list">
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
  const { cars } = await useFetchCars()

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
  .list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 75%;
  }
</style>
