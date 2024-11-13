<template>
  <NuxtImg :src="imageUrl" />
  <div class="head">
    <div class="head__info">
      <h2>{{ car?.name }}</h2>
      <p>{{ car?.seats }} seats | {{ car?.miles }} miles</p>
    </div>
    <span class="head__price">${{ car?.price }}</span>
  </div>
</template>

<script setup lang="ts">
  import type { Car } from '@/types/Car'

  interface Props {
    car: Car
  }

  const { car } = defineProps<Props>()

  const config = useRuntimeConfig()

  const imageUrl = computed(() => `${config.public.supabase.url}/storage/v1/object/public/images/${car.image}`)
</script>

<style lang="scss" scoped>
  .head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-family: sans-serif;
    margin: 40px 0px 20px 0px;

    &__info {
      display: flex;
      flex-direction: column;
      gap: 10px;

      h2 {
        font-size: 32px;
        font-weight: bold;
      }

      p {
        color: rgba(0, 0, 0, 0.7);
      }
    }

    &__price {
      font-size: 28px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.7);
    }
  }
</style>
