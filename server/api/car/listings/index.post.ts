import { PrismaClient } from "@prisma/client"
import Joi from "joi"

const prisma = new PrismaClient()

const schema = Joi.object({
  year: Joi.number().min(1886).max(new Date().getFullYear() + 1),
  name: Joi.string().required(),
  model: Joi.string().required(),
  price: Joi.number().min(0).required(),
  seats: Joi.number().max(1000).min(1).required(),
  make: Joi.string().required(),
  city: Joi.string().min(2).required(),
  miles: Joi.number().min(0).required(),
  features: Joi.array().items(Joi.string()).required(),
  description: Joi.string().min(20).required(),
  image: Joi.string().required(),
  listerId: Joi.string().required()
})

export default defineEventHandler(async (e) => {
  const body = await readBody(e)

  const { error } = schema.validate(body)

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message
    })
  }

  const car = prisma.car.create({
    data: {
      ...body,
      city: body.city.toLowerCase()
    }
  })

  return car
})
