<template>
  <Container>
    <CarHead />
    <CarBenefits />
    <CarContact />
  </Container>
</template>

<script setup lang="ts">
  const route = useRoute()
  const { toTitleCase } = useUtilities()

  const car = route.params.car as string

  useHead({
    title: toTitleCase(car)
  })
</script>
