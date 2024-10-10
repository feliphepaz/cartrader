<template>
  <Container>
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

  useHead({
    title: toTitleCase(car)
  })
</script>
