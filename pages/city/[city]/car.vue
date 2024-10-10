<template>
  <Container flex>
    <ListFilter />
    <NuxtPage />
  </Container>
</template>

<script setup lang="ts">
  const route = useRoute()
  const make = route.params.make as string
  const city = route.params.city as string

  useHead({
    title: `${make ? toTitleCase(make) : 'Cars'} in ${toTitleCase(city)}`
  })

  function toTitleCase(string: string) {
    return string.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
  }
</script>
