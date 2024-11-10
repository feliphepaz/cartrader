import cars from '@/data/cars.json'

type Params = {
  city: string
}

type Queries = {
  make: string
  minPrice: number
  maxPrice: number
}

export default defineEventHandler((e) => {
  const { city } = e.context.params as Params
  const { make, minPrice, maxPrice } = getQuery(e) as Queries

  let filteredCars = cars.filter((car) => car.city.toLowerCase() === city.toLowerCase())

  if (make) {
    filteredCars = filteredCars.filter((car) => car.make.toLowerCase() === make.toLowerCase())
  }

  if (minPrice) {
    filteredCars = filteredCars.filter((car) => car.price >= +minPrice)
  }

  if (maxPrice) {
    filteredCars = filteredCars.filter((car) => car.price <= +maxPrice)
  }

  return filteredCars
})
