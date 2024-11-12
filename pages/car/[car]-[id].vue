<template>
  <Container v-if="data">
    <CarHead :car="data" />
    <CarBenefits :benefits="data.features" />
    <CarContact :description="data.description" />
  </Container>
</template>

<script setup lang="ts">
  const route = useRoute()
  const { toTitleCase } = useUtilities()

  const car = route.params.car as string

  const { data } = await useFetchCar()

  useHead({
    title: toTitleCase(car)
  })
</script>
