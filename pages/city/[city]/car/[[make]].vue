<template>
  <div class="list">
    <ListCard v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>

<script setup lang="ts">
  const { cars } = useCars()
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 75%;
  }
</style>
