<template>
  <Container flex center>
    <div class="error">
      <h1>{{ error ? error.statusCode : '404' }}</h1>
      <p>{{ error ? error.message : 'Page not found' }}</p>
      <button @click="returnPage">Go Back</button>
    </div>
  </Container>
</template>

<script setup lang="ts">
  const error = useError()

  function returnPage() {
    clearError({
      redirect: '/'
    })
  }
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
