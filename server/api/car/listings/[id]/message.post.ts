import { PrismaClient } from "@prisma/client"
import Joi from "joi"

const prisma = new PrismaClient()

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: {allow: ['com', 'net']}
  }),
  phone: Joi.string().min(8).required(),
  message: Joi.string().min(10).required()
})

type Params = {
  id: string
}

export default defineEventHandler(async (e) => {
  const body = await readBody(e)
  const { id } = e.context.params as Params

  const { error } = schema.validate(body)

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message
    })
  }

  return prisma.message.create({
    data: {
      ...body,
      listingId: +id
    }
  })
})
