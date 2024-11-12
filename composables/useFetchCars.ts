export default async () => {
  const route = useRoute()

  const isLoading = ref(true)
  const data = ref()
  const notFound = ref(false)

  const minPrice = computed(() => route.query.minPrice)
  const maxPrice = computed(() => route.query.maxPrice)

  async function getData() {
    try {
      isLoading.value = true
      notFound.value = false

      const carsData = await $fetch(`/api/cars/${route.params.city}`, {
        params: {
          make: route.params.make,
          minPrice: minPrice.value,
          maxPrice: maxPrice.value
        }
      })

      data.value = carsData
    } catch (error) {
      throw createError({
        statusMessage: "Unable to fetch cars"
      })
    } finally {
      if (data.value.length <= 0) notFound.value = true
      isLoading.value = false
    }
  }

  watch([minPrice, maxPrice], () => {
    getData()
  }, { immediate: true })

  return {
    isLoading,
    data,
    notFound
  }
}
