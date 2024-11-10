import type { LocationQueryValue } from "vue-router"

type Filters = {
  make: string | string[]
  minPrice: ComputedRef<LocationQueryValue | LocationQueryValue[]>
  maxPrice: ComputedRef<LocationQueryValue | LocationQueryValue[]>
}

type Car = {
  id: number
  year: number
  name: string
  price: number
  city: string
  make: string
  url: string
  seats: number
  miles: string
  features: string[]
  description: string
}

export default async (city: string | string[], filters: Filters) => {
  const { data, error } = await useFetch<Car[]>(`/api/cars/${city}`, {
    params: {
      ...filters
    }
  })

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch cars"
    })
  }

  return {
    cars: data.value || []
  }
}
