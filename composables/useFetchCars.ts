export default async () => {
  const route = useRoute()
  const cars = ref()

  const minPrice = computed(() => route.query.minPrice)
  const maxPrice = computed(() => route.query.maxPrice)

  async function getCars() {
    try {
      const data = await $fetch(`/api/cars/${route.params.city}`, {
        params: {
          make: route.params.make,
          minPrice: minPrice.value,
          maxPrice: maxPrice.value
        }
      })

      cars.value = data
    } catch (error) {
      throw createError({
        statusMessage: "Unable to fetch cars"
      })
    }
  }

  watch([minPrice, maxPrice], () => {
    getCars()
  }, { immediate: true })

  return {
    cars,
    getCars
  }
}
