export type Car = {
  id: number
  year: number
  name: string
  model?: string
  price: number
  url: string
  seats: number
  make: string
  city: string
  miles: number
  features: string | string[]
  description: string
  image?: File | null
}
