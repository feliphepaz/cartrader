import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

type Params = {
  id: string
}

export default defineEventHandler((e) => {
  const { id } = e.context.params as Params

  return prisma.car.findUnique({
    where: {
      id: +id
    }
  })
})
