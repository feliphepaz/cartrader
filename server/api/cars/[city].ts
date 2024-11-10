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

  function checkCity(car: any) {
    return car.city.toLowerCase() === city.toLowerCase()
  }

  function checkMake(car: any) {
    return car.make.toLowerCase() === make.toLowerCase()
  }

  function checkMinPrice(car: any) {
    return car.price >= +minPrice
  }

  function checkMaxPrice(car: any) {
    return car.price <= +maxPrice
  }

  let filteredCars = cars.filter((car) => checkCity(car))

  if (make) {
    filteredCars = filteredCars.filter((car) => checkMake(car))
  }

  if (minPrice) {
    filteredCars = filteredCars.filter((car) => checkMinPrice(car))
  }

  if (maxPrice) {
    filteredCars = filteredCars.filter((car) => checkMaxPrice(car))
  }

  return filteredCars
})
