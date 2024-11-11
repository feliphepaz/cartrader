<template>
  <Container>
    <h1 class="title">Create a New Listing</h1>
    <form class="form">
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
    </form>
  </Container>
</template>

<script setup lang="ts">
  import type { Car } from '@/types/Car'
  const { makes } = useCars()

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
    miles: '',
    price: 0,
    city: '',
    seats: 0,
    features: [''],
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
      placeholder: '2019'
    },
    {
      id: 2,
      title: 'Miles *',
      name: 'miles',
      placeholder: '10000',
    },
    {
      id: 3,
      title: 'City *',
      name: 'city',
      placeholder: 'Austin',
    },
    {
      id: 4,
      title: 'Number of Seats *',
      name: 'seats',
      placeholder: '5',
    },
    {
      id: 5,
      title: 'Features *',
      name: 'features',
      placeholder: 'Leather Interior, No Accidents',
    }
  ]
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
  }
</style>
