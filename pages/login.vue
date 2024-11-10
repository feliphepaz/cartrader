<template>
  <Container :gap="40" flex center column>
    <h1 class="title">Login</h1>
    <button @click="login" class="button">Login With Google</button>
  </Container>
</template>

<script setup lang="ts">
  const supabase = useSupabaseClient()

  async function login() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
    if (error) {
      alert(error)
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    font-family: sans-serif;
    font-size: 32px;
    text-align: center;
  }

  .button {
    color: white;
    background: #0EA5E9;
    border: none;
    font-family: sans-serif;
    border-radius: 10px;
    padding: 14px 20px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
  }
</style>
