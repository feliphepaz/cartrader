<template>
  <div class="filter">
    <div class="filter__item">
      <h4>Location</h4>
      <span @click="toggleModal('location')">{{ route.params.city }}</span>
      <form
        v-show="modal.location"
        class="filter__item__tool"
        @submit.prevent="applyLocation"
      >
        <input v-model="city" type="text" placeholder="Search by city...">
        <button type="submit">Apply</button>
      </form>
    </div>
    <div class="filter__item">
      <h4>Make</h4>
      <span @click="toggleModal('make')">{{ route.params.make || 'Any' }}</span>
      <div v-show="modal.make" class="filter__item__tool -grid">
        <NuxtLink
          v-for="(make, index) in makes"
          :key="index"
          :to="`/city/${route.params.city}/car/${make}?${queries}`"
          @click="toggleModal('make')"
        >
          {{ make }}
        </NuxtLink>
      </div>
    </div>
    <div class="filter__item">
      <h4>Price</h4>
      <span @click="toggleModal('price')">{{ price }}</span>
      <form
        v-show="modal.price"
        class="filter__item__tool"
        @submit.prevent="applyPrice"
      >
        <input v-model="priceRange.min" type="text" placeholder="Min">
        <input v-model="priceRange.max" type="text" placeholder="Max">
        <button type="submit">Apply</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()
  const router = useRouter()

  const city = ref('')
  const priceRange = ref({
    min: '',
    max: ''
  })
  const modal = ref({
    location: false,
    make: false,
    price: false
  })

  const { makes } = useCars()
  const make = route.params.make

  const price = computed(() => {
    const minPrice = route.query.minPrice
    const maxPrice = route.query.maxPrice

    if (minPrice && !maxPrice) return `> $${minPrice}`
    if (!minPrice && maxPrice) return `< $${maxPrice}`
    if (minPrice && maxPrice) return `$${minPrice} - $${maxPrice}`
    return 'Any'
  })

  const queries = computed(() => {
    const formattedQueries = Object.fromEntries(Object.entries(route.query).map(([key, value]) => [key, String(value)]))
    return new URLSearchParams(formattedQueries);
  })

  function toggleModal(key: keyof typeof modal.value) {
    modal.value[key] = !modal.value[key]
  }

  function applyLocation() {
    toggleModal('location')
    if (!city.value) return
    if (!isNaN(parseInt(city.value))) {
      throw createError({
        statusCode: 400,
        message: 'Invalid city format'
      })
    }
    navigateTo(`/city/${city.value}/car/${make}?${queries.value}`)
  }

  function applyPrice() {
    toggleModal('price')
    if (!priceRange.value.min && !priceRange.value.max) return
    if (priceRange.value.min && priceRange.value.max) {
      if (+priceRange.value.min > +priceRange.value.max) return
    }
    router.push({
      query: {
        minPrice: priceRange.value.min,
        maxPrice: priceRange.value.max
      }
    })
  }
</script>

<style lang="scss" scoped>
  .filter {
    width: 25%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
    align-self: flex-start;

    &__item {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
      padding: 30px 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      font-family: sans-serif;

      h4 {
        font-weight: bold;
      }

      span {
        color: #0EA5E9;
        cursor: pointer;
      }

      &__tool {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 20px;
        background: white;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
        width: 300px;
        position: absolute;
        top: 0;
        left: 250px;
        z-index: 99;

        &.-grid {
          width: 580px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        input {
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
          padding: 10px;
          font-size: 16px;
          cursor: pointer;
        }

        > a {
          color: #0EA5E9;
          width: max-content;
          text-decoration: none;
          line-height: 20px;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
