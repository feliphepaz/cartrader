import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

type Params = {
  city: string
}

type Queries = {
  make: string
  minPrice: number
  maxPrice: number
}

type Filters = {
  city: string
  make?: string
  price?: {
    gte?: number
    lte?: number
  }
}

export default defineEventHandler((e) => {
  const { city } = e.context.params as Params
  const { make, minPrice, maxPrice } = getQuery(e) as Queries

  const filters: Filters = {
    city: city.toLowerCase()
  }

  if (make) {
    filters.make = make
  }

  if (minPrice || maxPrice) {
    filters.price = {}
  }

  if (minPrice) {
    filters.price!.gte = +minPrice
  }

  if (maxPrice) {
    filters.price!.lte = +maxPrice
  }

  return prisma.car.findMany({
    where: filters
  })
})
