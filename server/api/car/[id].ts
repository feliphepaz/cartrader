import cars from '@/data/cars.json'

type Params = {
  id: string
}

export default defineEventHandler((e) => {
  const { id } = e.context.params as Params

  let car = cars.filter((car) => car.id === +id)

  return car[0]
})
