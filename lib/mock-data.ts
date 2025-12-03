import type { Product, Order, Offer } from "./types"

export const mockProducts: Product[] = [
  // Kurti Sets
  {
    id: "ks-001",
    name: "Elegant Noir Kurti Set",
    category: "kurti-sets",
    price: 2499,
    originalPrice: 2999,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White"],
    stock: 25,
    images: ["/elegant-black-kurti-set-indian-women-fashion.jpg", "/black-kurti-set-back-view.jpg"],
    description: "An elegant black kurti set with intricate white embroidery. Perfect for festive occasions.",
    featured: true,
    newArrival: true,
    createdAt: new Date(),
  },
  {
    id: "ks-002",
    name: "Pearl White Anarkali Set",
    category: "kurti-sets",
    price: 3299,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Off-White"],
    stock: 18,
    images: ["/placeholder-jbhjb.png", "/white-anarkali-side-view.jpg"],
    description: "A stunning pearl white anarkali set with delicate lacework. Timeless elegance for any celebration.",
    featured: true,
    createdAt: new Date(),
  },
  {
    id: "ks-003",
    name: "Minimalist Blush Kurti",
    category: "kurti-sets",
    price: 1899,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pastel Pink", "Lavender"],
    stock: 30,
    images: ["/pastel-pink-kurti-set-minimal-design.jpg"],
    description: "A minimalist blush kurti with clean lines and subtle detailing. Perfect for everyday elegance.",
    newArrival: true,
    createdAt: new Date(),
  },
  {
    id: "ks-004",
    name: "Classic Charcoal Kurta Set",
    category: "kurti-sets",
    price: 2799,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Black"],
    stock: 22,
    images: ["/placeholder-05hxe.png"],
    description: "A classic charcoal kurta set with modern silhouette. Versatile and sophisticated.",
    createdAt: new Date(),
  },
  // Tops
  {
    id: "tp-001",
    name: "Silk Noir Blouse",
    category: "tops",
    price: 1499,
    originalPrice: 1799,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black"],
    stock: 40,
    images: ["/black-silk-blouse-women-elegant.jpg", "/black-silk-top-back-view.jpg"],
    description: "A luxurious silk blouse in deep noir. Perfect for both office and evening wear.",
    featured: true,
    createdAt: new Date(),
  },
  {
    id: "tp-002",
    name: "Ivory Lace Peplum Top",
    category: "tops",
    price: 1299,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Ivory"],
    stock: 35,
    images: ["/white-lace-peplum-top-women-fashion.jpg"],
    description: "An ivory lace peplum top with feminine details. Romantic and chic.",
    newArrival: true,
    createdAt: new Date(),
  },
  {
    id: "tp-003",
    name: "Structured Cotton Shirt",
    category: "tops",
    price: 999,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black"],
    stock: 50,
    images: ["/structured-white-cotton-shirt-women-minimal.jpg"],
    description: "A perfectly structured cotton shirt. A wardrobe essential for the modern woman.",
    featured: true,
    createdAt: new Date(),
  },
  {
    id: "tp-004",
    name: "Draped Asymmetric Top",
    category: "tops",
    price: 1699,
    sizes: ["S", "M", "L"],
    colors: ["Black", "Charcoal"],
    stock: 28,
    images: ["/black-asymmetric-draped-top-women-fashion.jpg"],
    description: "An avant-garde draped top with asymmetric hemline. Bold and artistic.",
    newArrival: true,
    createdAt: new Date(),
  },
  // Jeans
  {
    id: "jn-001",
    name: "High-Rise Noir Denim",
    category: "jeans",
    price: 2199,
    originalPrice: 2599,
    sizes: ["26", "28", "30", "32", "34"],
    colors: ["Black"],
    stock: 45,
    images: ["/black-high-rise-jeans-women-premium.jpg", "/black-denim-back-view-women.jpg"],
    description: "Premium high-rise black denim with perfect stretch. Sleek and flattering.",
    featured: true,
    createdAt: new Date(),
  },
  {
    id: "jn-002",
    name: "White Wide-Leg Jeans",
    category: "jeans",
    price: 1999,
    sizes: ["26", "28", "30", "32"],
    colors: ["White", "Off-White"],
    stock: 32,
    images: ["/white-wide-leg-jeans-women-elegant.jpg"],
    description: "Elegant white wide-leg jeans for a sophisticated summer look.",
    newArrival: true,
    createdAt: new Date(),
  },
  {
    id: "jn-003",
    name: "Charcoal Skinny Fit",
    category: "jeans",
    price: 1799,
    sizes: ["26", "28", "30", "32", "34"],
    colors: ["Charcoal", "Grey"],
    stock: 38,
    images: ["/charcoal-grey-skinny-jeans-women.jpg"],
    description: "A versatile charcoal skinny fit jean. Perfect for any occasion.",
    createdAt: new Date(),
  },
  {
    id: "jn-004",
    name: "Midnight Straight Leg",
    category: "jeans",
    price: 2099,
    sizes: ["26", "28", "30", "32"],
    colors: ["Black", "Midnight Blue"],
    stock: 25,
    images: ["/placeholder.svg?height=600&width=400"],
    description: "Classic straight leg jeans in midnight black. Timeless and comfortable.",
    featured: true,
    newArrival: true,
    createdAt: new Date(),
  },
]

export const mockOrders: Order[] = [
  {
    id: "ord-001",
    customerName: "Priya Sharma",
    customerPhone: "+91 98765 43210",
    customerEmail: "priya@email.com",
    customerAddress: "123, MG Road, Bengaluru, Karnataka - 560001",
    items: [
      {
        productId: "ks-001",
        name: "Elegant Noir Kurti Set",
        price: 2499,
        size: "M",
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    totalAmount: 2499,
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "ord-002",
    customerName: "Ananya Patel",
    customerPhone: "+91 87654 32109",
    customerAddress: "456, Park Street, Mumbai, Maharashtra - 400001",
    items: [
      {
        productId: "tp-001",
        name: "Silk Noir Blouse",
        price: 1499,
        size: "S",
        quantity: 2,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        productId: "jn-001",
        name: "High-Rise Noir Denim",
        price: 2199,
        size: "28",
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    totalAmount: 5197,
    status: "shipped",
    createdAt: new Date(Date.now() - 86400000),
    updatedAt: new Date(),
  },
]

export const mockOffers: Offer[] = [
  {
    id: "offer-001",
    title: "New Year Sale",
    description: "Get 20% off on all Kurti Sets",
    discountPercentage: 20,
    startDate: new Date(),
    endDate: new Date(Date.now() + 7 * 86400000),
    active: true,
  },
]

export function getProductsByCategory(category: string): Product[] {
  return mockProducts.filter((p) => p.category === category)
}

export function getProductById(id: string): Product | undefined {
  return mockProducts.find((p) => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return mockProducts.filter((p) => p.featured)
}

export function getNewArrivals(): Product[] {
  return mockProducts.filter((p) => p.newArrival)
}
