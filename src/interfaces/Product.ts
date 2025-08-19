export interface Product {
  id: number
  name: string
  prince: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  category: string
  IsNew?: boolean
  discount?: number
}
