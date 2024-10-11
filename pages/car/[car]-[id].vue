<template>
  <Container v-if="carData">
    <CarHead :car="carData" />
    <CarBenefits :benefits="carData.features" />
    <CarContact :description="carData.description" />
  </Container>
</template>

<script setup lang="ts">
  const route = useRoute()
  const { cars } = useCars()
  const { toTitleCase } = useUtilities()

  const car = route.params.car as string
  const id = route.params.id as string

  const carData = computed(() => {
    return cars.find((car) => {
      return car.id === parseInt(id)
    })
  })

  if (!carData.value) {
    throw createError({
      statusCode: 404,
      message: `Car with ID of ${id} does not exist`
    })
  }

  useHead({
    title: toTitleCase(car)
  })
</script>
