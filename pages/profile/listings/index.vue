<template>
  <Container>
    <div class="head">
      <h1 class="head__title">My Listings</h1>
      <NuxtLink to="/profile/listings/create" class="head__add">+</NuxtLink>
    </div>

    <div v-if="listings && listings.length > 0" class="list">
      <CarListing
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
        @refresh="refresh"
      />
    </div>

    <div v-else class="no-listings">
      <h2>No listings</h2>
    </div>
  </Container>
</template>

<script setup>
  const user = useSupabaseUser()

  const { data: listings, refresh } = useFetch(`/api/car/listings/user/${user.value.id}`)
</script>

<style lang="scss" scoped>
  .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    &__title {
      font-family: sans-serif;
      font-size: 32px;
    }

    &__add {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      font-size: 18px;
      background: #0EA5E9;
      color: white;
      border: none;
      cursor: pointer;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .no-listings {
    h2 {
      font-family: sans-serif;
      letter-spacing: 0.1px;
    }
  }
</style>
