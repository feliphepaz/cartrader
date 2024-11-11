<template>
  <div class="car-listing">
    <div class="car-listing__content">
      <img :src="listing.url" :alt="listing.name">
      <div class="car-listing__content__info">
        <h3>{{ listing.name }}</h3>
        <span>${{ listing.price }}</span>
      </div>
    </div>
    <div class="car-listing__options">
      <NuxtLink :to="`/profile/listings/view/${listing.id}`" class="car-listing__options__view">View</NuxtLink>
      <NuxtLink class="car-listing__options__delete">Delete</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Car } from '@/types/Car'

  interface Props {
    listing: Partial<Car>
  }

  defineProps<Props>()
</script>

<style lang="scss" scoped>
  .car-listing {
    display: flex;
    justify-content: space-between;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
    border-radius: 5px;

    &__content {
      display: flex;
      gap: 20px;

      img {
        width: 300px;
        height: 200px;
        object-fit: cover;
        border-radius: 5px 0 0 5px;
      }

      &__info {
        display: flex;
        flex-direction: column;
        font-family: sans-serif;
        gap: 10px;
        padding: 20px 0;

        h3 {
          font-weight: bold;
          font-size: 18px;
        }

        span {
          letter-spacing: 0.1px;
          color: #0EA5E9;
        }
      }
    }

    &__options {
      display: flex;
      align-self: flex-start;
      gap: 10px;
      font-family: sans-serif;
      padding: 20px;

      &__view {
        color: #0EA5E9;
        text-decoration: none;
      }

      &__delete {
        color: red;
      }
    }
  }
</style>
