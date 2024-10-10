<template>
  <Container flex center>
    <div class="error">
      <h1>404</h1>
      <p>Page not found</p>
      <NuxtLink to="/">Go Back</NuxtLink>
    </div>
  </Container>
</template>

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

    a {
      display: block;
      color: white;
      background: #0EA5E9;
      text-align: center;
      border: none;
      font-family: serif;
      border-radius: 20px;
      text-decoration: none;
      padding: 14px 20px;
      font-size: 24px;
      cursor: pointer;
    }
  }
</style>
