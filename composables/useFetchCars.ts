import type { LocationQueryValue } from "vue-router"

type Filters = {
  make: LocationQueryValue | LocationQueryValue[]
  minPrice: ComputedRef<LocationQueryValue | LocationQueryValue[]>
  maxPrice: ComputedRef<LocationQueryValue | LocationQueryValue[]>
}

export default async (city: string | string[], filters: Filters) => {
  const cars = ref()

  async function getCars() {
    try {
      const data = await $fetch(`/api/cars/${city}`, {
        params: {
          make: filters.make,
          minPrice: filters.minPrice.value,
          maxPrice: filters.maxPrice.value
        }
      })

      cars.value = data
    } catch (error) {
      throw createError({
        statusMessage: "Unable to fetch cars"
      })
    }
  }

  return {
    cars,
    getCars
  }
}
