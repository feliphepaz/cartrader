<template>
  <main :class="`container ${flex ? 'flex' : ''} ${center ? 'center' : ''}`">
    <slot />
  </main>
</template>

<script setup lang="ts">
  interface Props {
    flex?: boolean
    center?: boolean
  }

  const props = defineProps<Props>()

  const isCentralized = computed(() => props.center ? 'center' : 'normal')
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1020px;
    margin: 60px auto;
    padding: 0px 20px;

    &.flex {
      display: flex;
      justify-content: v-bind(isCentralized);
      gap: 60px;
    }
  }
</style>
