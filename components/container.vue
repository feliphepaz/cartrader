<template>
  <main :class="`container ${flex ? 'flex' : ''} ${center ? 'center' : ''}`">
    <slot />
  </main>
</template>

<script setup lang="ts">
  interface Props {
    flex?: boolean
    center?: boolean
    column?: boolean
    gap?: number
  }

  const props = withDefaults(defineProps<Props>(), {
    gap: 60
  })

  const isCentralized = computed(() => props.center ? 'center' : 'normal')
  const isColumn = computed(() => props.column ? 'column' : 'row')
  const formattedGap = computed(() => `${props.gap}px`)
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1020px;
    margin: 60px auto;
    padding: 0px 20px;

    &.flex {
      display: flex;
      flex-direction: v-bind(isColumn);
      justify-content: v-bind(isCentralized);
      gap: v-bind(formattedGap);
    }
  }
</style>
