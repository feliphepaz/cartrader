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
  const route = useRoute()

  const favorite = useLocalStorage('favorite', {})

  const minPrice = computed(() => route.query.minPrice)
  const maxPrice = computed(() => route.query.maxPrice)

  const { cars, getCars } = await useFetchCars(route.params.city, {
    make: route.params.make,
    minPrice: minPrice,
    maxPrice: maxPrice
  })

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

  watch([minPrice, maxPrice], () => {
    getCars()
  }, { immediate: true })
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 75%;
  }
</style>
