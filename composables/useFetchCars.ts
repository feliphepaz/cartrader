import type { LocationQueryValue } from "vue-router"
import type { Car } from "@/types/Car"

type Filters = {
  make: LocationQueryValue | LocationQueryValue[]
  minPrice: ComputedRef<LocationQueryValue | LocationQueryValue[]>
  maxPrice: ComputedRef<LocationQueryValue | LocationQueryValue[]>
}

export default async (city: string | string[], filters: Filters) => {
  const cars = ref()

  async function getCars() {
    const { data, error } = await useFetch<Car[]>(`/api/cars/${city}`, {
      params: {
        make: filters.make,
        minPrice: filters.minPrice.value,
        maxPrice: filters.maxPrice.value
      }
    })

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: "Unable to fetch cars"
      })
    }

    cars.value = data.value
  }

  return {
    cars,
    getCars
  }
}
