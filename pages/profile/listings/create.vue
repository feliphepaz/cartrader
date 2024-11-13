<template>
  <Container>
    <h1 class="title">Create a New Listing</h1>
    <form @submit.prevent="submit" class="form">
      <div class="form__fields">
        <CarAdSelect v-model="data.make" title="Make *" :options="makes" />
        <CarAdInput
          v-for="input in inputs"
          v-model="data[input.name]"
          :key="input.id"
          :title="input.title"
          :placeholder="input.placeholder"
        />
      </div>
      <CarAdTextarea v-model="data.description" title="Description *" />
      <CarAdImage @change-file="(file) => data.image = file" />

      <button type="submit" class="form__submit" :disabled="isButtonDisabled">Submit</button>
    </form>
  </Container>
</template>

<script setup lang="ts">
  import type { Car } from '@/types/Car'

  const { makes } = useCars()

  const user = useSupabaseUser()
  const supabase = useSupabaseClient()

  type Input = {
    id: number
    title: string
    name: keyof Partial<Car>
    placeholder: string
  }

  const data = ref<Partial<Car>>({
    make: '',
    model: '',
    year: 0,
    miles: 0,
    price: 0,
    city: '',
    seats: 0,
    features: '',
    description: '',
    image: null
  })

  const inputs: Input[] = [
    {
      id: 0,
      title: 'Model *',
      name: 'model',
      placeholder: 'Civic'
    },
    {
      id: 1,
      title: 'Year *',
      name: 'year',
      placeholder: '10000'
    },
    {
      id: 2,
      title: 'Price *',
      name: 'price',
      placeholder: '2019'
    },
    {
      id: 3,
      title: 'Miles *',
      name: 'miles',
      placeholder: '10000',
    },
    {
      id: 4,
      title: 'City *',
      name: 'city',
      placeholder: 'Austin',
    },
    {
      id: 5,
      title: 'Number of Seats *',
      name: 'seats',
      placeholder: '5',
    },
    {
      id: 6,
      title: 'Features *',
      name: 'features',
      placeholder: 'Leather Interior, No Accidents',
    }
  ]

  const isButtonDisabled = computed(() => {
    for (let key of Object.keys(data.value) as (keyof Car)[]) {
      if (!data.value[key]) return true
    }
    return false
  })

  async function submit() {
    const fileName = Math.floor(Math.random() * 10000);
    const image = await supabase.storage.from('images').upload('public/' + fileName, data.value.image!)

    if (image.error) {
      alert('Cannot upload image')
    }

    const body = {
      ...data.value,
      year: +data.value.year!,
      name: `${data.value.make} ${data.value.model}`,
      price: +data.value.price!,
      seats: +data.value.seats!,
      miles: +data.value.miles!,
      features: data.value.features!.toString().split(', '),
      listerId: user.value!.id,
      image: image.data!.path
    }

    try {
      await $fetch('/api/car/listings', {
        method: 'POST',
        body
      })
      navigateTo('/profile/listings')
    } catch(error) {
      alert(error)
      supabase.storage.from('images').remove([image.data!.path])
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    font-family: sans-serif;
    font-size: 32px;
    margin-bottom: 30px;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
    padding: 20px 30px;

    &__fields {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    &__submit {
      color: white;
      background: #0EA5E9;
      border: none;
      font-family: sans-serif;
      border-radius: 10px;
      padding: 16px 10px;
      font-size: 16px;
      cursor: pointer;
      margin-top: 20px;

      &:disabled {
        cursor: auto;
        opacity: 0.6;
      }
    }
  }
</style>
