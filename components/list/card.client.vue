<template>
  <div class="card" :to="`/car/${car?.name}-${car?.id}`">
    <NuxtImg
      @click="navigateTo(`/car/${props.car?.name}-${props.car?.id}`)"
      :src="car?.url"
      :alt="car?.name"
    />
    <div class="card__details">
      <button @click="emit('favor', car?.id)" class="card__details__favorite">
        <img :src="favored ? heartFilled : heartOutline">
      </button>
      <div class="card__details__info">
        <h3>{{ car?.name }}</h3>
        <p>{{ car?.description }}</p>
      </div>
      <span class="card__details__price">${{ car?.price }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import heartFilled from '@/assets/heartFilled.png'
  import heartOutline from '@/assets/heartOutline.png'

  const emit = defineEmits(['favor'])

  interface Props {
    car?: {
      id: number
      name: string
      description: string
      url: string
      price: string
    },
    favored: boolean
  }

  const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
    color: black;

    img {
      width: 300px;
      height: 220px;
      object-fit: cover;
      cursor: pointer;
    }

    &__details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      padding: 20px;

      &__favorite {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        padding: 0px;
        width: 20px;
        height: 20px;
        top: 20px;
        right: 20px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      &__info {
        display: flex;
        flex-direction: column;
        font-family: sans-serif;
        gap: 20px;

        h3 {
          font-weight: bold;
          font-size: 24px;
        }

        p {
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.1px;
          color: rgba(0, 0, 0, 0.7);
        }
      }

      &__price {
        font-weight: bold;
        font-size: 18px;
        font-family: sans-serif;
      }
    }
  }
</style>
