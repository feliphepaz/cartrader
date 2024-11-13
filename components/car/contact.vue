<template>
  <div class="contact">
    <p>{{ description }}</p>
    <form @submit.prevent="submit">
      <input v-model="data.name" type="text" placeholder="Name">
      <input v-model="data.email" type="text" placeholder="Email">
      <input v-model="data.phone" type="text" placeholder="Phone">
      <textarea v-model="data.message" placeholder="Message"></textarea>
      <button type="submit" :disabled="isButtonDisabled">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import type { Message } from '@/types/Message'

  interface Props {
    id: number
    description: string
  }

  const { id } = defineProps<Props>()

  const data = ref<Message>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const isButtonDisabled = computed(() => {
    for (let key of Object.keys(data.value) as (keyof Message)[]) {
      if (!data.value[key]) return true
    }
    return false
  })

  async function submit() {
    const body = {
      ...data.value
    }

    try {
      await $fetch(`/api/car/listings/${id}/message`, {
        method: 'POST',
        body
      })
      alert('Message sent')
    } catch(error) {
      alert(error)
    }
  }
</script>

<style lang="scss" scoped>
  .contact {
    margin-top: 20px;
    font-family: sans-serif;

    p {
      font-size: 14px;
      margin-bottom: 20px;
      letter-spacing: 0.1px;
    }

    form {
      display: flex;
      gap: 10px;

      input, textarea {
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 10px;
        font-family: sans-serif;
        font-size: 16px;
        outline: none;
      }

      button {
        color: white;
        background: #0EA5E9;
        border: none;
        font-family: sans-serif;
        border-radius: 10px;
        padding: 10px 40px;
        font-size: 16px;
        cursor: pointer;

        &:disabled {
          cursor: auto;
          opacity: 0.6;
        }
      }
    }
  }
</style>
