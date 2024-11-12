export default async () => {
  const route = useRoute()

  const data = ref()
  const hasError = ref(false)

  async function getData() {
    try {
      hasError.value = false
      const carData = await useFetch(`/api/car/${route.params.id}`)

      if (!carData.data.value) throw Error

      data.value = carData.data.value
    } catch (error) {
      hasError.value = true
    }
  }

  getData()

  watch(hasError, () => {
    if (hasError.value)
    throw createError({
      statusCode: 404,
      statusMessage: 'Car not found'
    })
  }, { immediate: true })

  return {
    data
  }
}
