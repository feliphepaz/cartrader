<template>
  <header class="navbar">
    <NuxtLink to="/" class="navbar__logo">cartrader</NuxtLink>
    <div class="navbar__menu">
      <div v-if="user" class="navbar__menu__wrapper">
        <NuxtLink to="/profile/listings" class="navbar__menu__wrapper__listings">Listings</NuxtLink>
        <button class="navbar__menu__wrapper__logout" @click="logout">Logout</button>
      </div>

      <NuxtLink v-else to="/login" class="navbar__menu__login">Login</NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  async function logout() {
    const { error } = await supabase.auth.signOut()
    if (error) {
      return alert(error)
    }
    navigateTo('/login')
  }
</script>

<style lang="scss" scoped>
  .navbar {
    position: sticky;
    height: 77px;
    top: 0;
    z-index: 50;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.2em;
    background: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &__logo {
      font-family: monospace;
      font-weight: bold;
      font-size: 32px;
      text-decoration: none;
      color: black;
    }

    &__menu {
      a,
      button {
        color: white;
        border: none;
        font-family: sans-serif;
        border-radius: 10px;
        padding: 10px 20px;
        font-size: 16px;
        text-decoration: none;
        cursor: pointer;
      }

      &__wrapper {
        display: flex;
        gap: 10px;

        &__listings {
          background: #0EA5E9;
        }

        &__logout {
          background: black;
        }
      }

      &__login {
        background: #0EA5E9;
      }
    }
  }
</style>
