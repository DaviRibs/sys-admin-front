export interface productsDetails {
  isNew: any
  id: number
  name: string
  price: number
  originalPrice?: number
  images: string[]
  rating: number
  reviews: number
  category: string
  IsNew?: boolean
  discount?: number
  description: string
  features: string[]
  specifications: Record<string, string>
  shipping: string
  warranty: string
}
