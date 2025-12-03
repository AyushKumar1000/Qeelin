export interface Product {
  id: string
  name: string
  category: "kurti-sets" | "tops" | "jeans"
  price: number
  originalPrice?: number
  sizes: string[]
  colors: string[]
  stock: number
  images: string[]
  description: string
  featured?: boolean
  newArrival?: boolean
  createdAt: Date
}

export interface Order {
  id: string
  customerName: string
  customerPhone: string
  customerEmail?: string
  customerAddress: string
  items: {
    productId: string
    name: string
    price: number
    size: string
    quantity: number
    image: string
  }[]
  totalAmount: number
  status: "pending" | "packed" | "shipped" | "delivered"
  createdAt: Date
  updatedAt: Date
}

export interface Offer {
  id: string
  title: string
  description: string
  discountPercentage: number
  startDate: Date
  endDate: Date
  image?: string
  active: boolean
}

export interface Admin {
  id: string
  name: string
  email: string
  profileImage?: string
}
