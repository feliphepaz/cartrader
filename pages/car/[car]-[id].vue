<template>
  <Container>
    <CarHead />
    <CarBenefits />
    <CarContact />
  </Container>
</template>

<script setup lang="ts">
  const route = useRoute()
  const car = route.params.car as string

  useHead({
    title: toTitleCase(car)
  })

  function toTitleCase(string: string) {
    return string.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
  }
</script>
