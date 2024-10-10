<template>
  <Container flex>
    <ListFilter />
    <NuxtPage />
  </Container>
</template>

<script setup lang="ts">
  const route = useRoute()
  const { toTitleCase } = useUtilities()

  const make = route.params.make as string
  const city = route.params.city as string

  useHead({
    title: `${make ? toTitleCase(make) : 'Cars'} in ${toTitleCase(city)}`
  })
</script>
