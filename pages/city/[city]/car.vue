<template>
  <Container flex center>
    <NuxtErrorBoundary>
      <ListFilter />
      <NuxtPage />
      <template #error="{error}">
        <div class="error">
          <h1>Error</h1>
          <p>{{ error }}</p>
          <button @click="error.value = null">Go Back</button>
        </div>
      </template>
    </NuxtErrorBoundary>
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

<style lang="scss" scoped>
  .error {
    max-width: 300px;
    padding-top: 160px;

    h1 {
      font-size: 82px;
      margin-bottom: 20px;
      font-weight: bold;
      font-family: sans-serif;
      text-align: center;
    }

    p {
      font-size: 24px;
      margin-bottom: 30px;
      font-family: sans-serif;
      text-align: center;
    }

    button {
      display: block;
      color: white;
      background: #0EA5E9;
      text-align: center;
      border: none;
      font-family: serif;
      border-radius: 20px;
      padding: 14px 20px;
      font-size: 24px;
      cursor: pointer;
      margin: 0 auto;
    }
  }
</style>
