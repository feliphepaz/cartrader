<template>
  <Container>
    <CarMessage
      v-if="messages && messages.length > 0"
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />
    <h2 v-else class="no-messages">No messages</h2>
  </Container>
</template>

<script setup lang="ts">
  const route = useRoute()

  const { data: messages } = useFetch(`/api/car/listings/${route.params.id}/messages`)
</script>

<style lang="scss" scoped>
  .no-messages {
    font-family: sans-serif;
    letter-spacing: 0.1px;
  }
</style>
