<template>
  <main :class="props.flex ? 'container flex' : 'container'">
    <slot />
  </main>
</template>

<script setup lang="ts">
  interface Props {
    flex?: boolean
  }

  const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1020px;
    margin: 60px auto;
    padding: 0px 20px;

    &.flex {
      display: flex;
      gap: 60px;
    }
  }
</style>
