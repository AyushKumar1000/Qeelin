// ===== PRODUCT DATA =====
const LOCAL_KEY = "qeelinProducts"

// Optional seed data (disabled by default)
const USE_SEED = false
const defaultProducts = [
  {
    id: 1,
    name: "Elegant Black Kurti Set",
    category: "kurti-sets",
    price: 2499,
    originalPrice: 3499,
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL"],
    color: "Black",
    stock: 15,
    description:
      "A stunning black kurti set featuring intricate embroidery and premium cotton fabric. Perfect for both casual and festive occasions.",
    isNew: true,
  },
  {
    id: 2,
    name: "White Embroidered Kurti",
    category: "kurti-sets",
    price: 1999,
    originalPrice: 2799,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    color: "White",
    stock: 20,
    description: "Elegant white kurti with delicate embroidery work. Made from breathable fabric for all-day comfort.",
    isNew: true,
  },
  {
    id: 3,
    name: "Classic Black Top",
    category: "tops",
    price: 1299,
    originalPrice: 1799,
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L"],
    color: "Black",
    stock: 25,
    description:
      "A versatile black top that pairs perfectly with any bottom. Features a flattering cut and premium fabric.",
    isNew: false,
  },
  {
    id: 4,
    name: "Minimal White Blouse",
    category: "tops",
    price: 1499,
    originalPrice: null,
    images: [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=800&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    color: "White",
    stock: 18,
    description:
      "Clean and minimal white blouse perfect for office wear or casual outings. Made from premium cotton blend.",
    isNew: true,
  },
  {
    id: 5,
    name: "High-Waist Black Jeans",
    category: "jeans",
    price: 2299,
    originalPrice: 2999,
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
    ],
    sizes: ["26", "28", "30", "32", "34"],
    color: "Black",
    stock: 30,
    description: "Premium high-waist black jeans with a flattering fit. Features stretch denim for maximum comfort.",
    isNew: false,
  },
  {
    id: 6,
    name: "Slim Fit White Jeans",
    category: "jeans",
    price: 2199,
    originalPrice: null,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
    ],
    sizes: ["26", "28", "30", "32"],
    color: "White",
    stock: 12,
    description: "Stylish slim fit white jeans perfect for summer. Made from premium denim with a comfortable stretch.",
    isNew: true,
  },
  {
    id: 7,
    name: "Pastel Pink Kurti Set",
    category: "kurti-sets",
    price: 2799,
    originalPrice: 3299,
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    ],
    sizes: ["S", "M", "L"],
    color: "Pink",
    stock: 8,
    description: "Beautiful pastel pink kurti set with subtle embroidery. Perfect for festive occasions.",
    isNew: false,
  },
  {
    id: 8,
    name: "Off-Shoulder Black Top",
    category: "tops",
    price: 1599,
    originalPrice: 1999,
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    color: "Black",
    stock: 22,
    description: "Trendy off-shoulder black top for a chic look. Features a comfortable fit and premium fabric.",
    isNew: true,
  },
  {
    id: 9,
    name: "Bootcut Blue Jeans",
    category: "jeans",
    price: 2499,
    originalPrice: null,
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
    ],
    sizes: ["26", "28", "30", "32", "34"],
    color: "Blue",
    stock: 16,
    description: "Classic bootcut jeans in a beautiful blue wash. Timeless style meets modern comfort.",
    isNew: false,
  },
  {
    id: 10,
    name: "Beige Linen Top",
    category: "tops",
    price: 1399,
    originalPrice: 1699,
    images: [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=800&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL"],
    color: "Beige",
    stock: 14,
    description: "Breathable beige linen top perfect for summer. Features a relaxed fit and natural fabric.",
    isNew: false,
  },
  {
    id: 11,
    name: "Designer Black Kurti",
    category: "kurti-sets",
    price: 3499,
    originalPrice: 4499,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL"],
    color: "Black",
    stock: 10,
    description: "Premium designer black kurti with intricate handwork. A statement piece for special occasions.",
    isNew: true,
  },
  {
    id: 12,
    name: "Ripped Black Jeans",
    category: "jeans",
    price: 2699,
    originalPrice: 3199,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
    ],
    sizes: ["26", "28", "30", "32"],
    color: "Black",
    stock: 20,
    description: "Edgy ripped black jeans for a bold look. Features premium stretch denim and a comfortable fit.",
    isNew: false,
  },
]

// Load from localStorage if available
let products
try {
  const saved = localStorage.getItem(LOCAL_KEY)
  if (saved) {
    products = JSON.parse(saved)
  } else {
    products = USE_SEED ? [...defaultProducts] : []
    localStorage.setItem(LOCAL_KEY, JSON.stringify(products))
  }
} catch (e) {
  products = USE_SEED ? [...defaultProducts] : []
}

function saveProducts() {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(products))
  } catch (e) {}
}

function nextProductId() {
  const maxId = products.reduce((m, p) => Math.max(m, Number(p.id)), 0)
  return maxId + 1
}

function addOrUpdateProduct(p) {
  const idx = products.findIndex((x) => String(x.id) === String(p.id))
  if (idx >= 0) {
    products[idx] = p
  } else {
    products.unshift(p)
  }
  saveProducts()
}

function deleteProduct(id) {
  const idx = products.findIndex((x) => String(x.id) === String(id))
  if (idx >= 0) {
    products.splice(idx, 1)
    saveProducts()
  }
}

function clearAllProducts() {
  products = []
  saveProducts()
}

// Hook into Firebase if present to source products from Firestore
;(function(){
  if (typeof window !== 'undefined' && window.DB && typeof window.DB.onProducts === 'function') {
    let resolveReady
    window.productsReady = new Promise((res)=>{ resolveReady = res })
    window.DB.onProducts((items)=>{
      if (Array.isArray(items)) {
        products = items
        try { localStorage.setItem(LOCAL_KEY, JSON.stringify(products)) } catch (e) {}
        window.dispatchEvent(new CustomEvent('productsUpdated', { detail: { count: products.length } }))
        if (resolveReady) { resolveReady(); resolveReady = null }
      }
    })
  } else {
    // No Firebase; ensure productsReady resolves immediately
    if (typeof window !== 'undefined') {
      window.productsReady = Promise.resolve()
    }
  }
})();

// ===== ORDERS DATA =====
const orders = [
  {
    id: "ORD001",
    customer: {
      name: "Priya Sharma",
      phone: "+91 98765 43210",
      address: "123 MG Road, Andheri West, Mumbai 400058",
    },
    products: [
      { productId: 1, name: "Elegant Black Kurti Set", size: "M", quantity: 1, price: 2499 },
      { productId: 3, name: "Classic Black Top", size: "S", quantity: 2, price: 1299 },
    ],
    total: 5097,
    status: "Pending",
    date: "2024-01-15T10:30:00",
    note: "Please pack carefully",
  },
  {
    id: "ORD002",
    customer: {
      name: "Ananya Reddy",
      phone: "+91 87654 32109",
      address: "456 Brigade Road, Bangalore 560001",
    },
    products: [{ productId: 5, name: "High-Waist Black Jeans", size: "28", quantity: 1, price: 2299 }],
    total: 2299,
    status: "Shipped",
    date: "2024-01-14T14:20:00",
    note: "",
  },
  {
    id: "ORD003",
    customer: {
      name: "Meera Patel",
      phone: "+91 76543 21098",
      address: "789 Connaught Place, New Delhi 110001",
    },
    products: [
      { productId: 2, name: "White Embroidered Kurti", size: "L", quantity: 1, price: 1999 },
      { productId: 4, name: "Minimal White Blouse", size: "M", quantity: 1, price: 1499 },
    ],
    total: 3498,
    status: "Delivered",
    date: "2024-01-10T09:15:00",
    note: "Gift wrap please",
  },
]

// ===== OFFERS DATA =====
const offers = [
  {
    id: 1,
    title: "New Year Sale",
    discount: 20,
    startDate: "2024-01-01",
    endDate: "2024-01-31",
    description: "Start the year with amazing discounts!",
    active: true,
  },
  {
    id: 2,
    title: "Weekend Special",
    discount: 15,
    startDate: "2024-01-20",
    endDate: "2024-01-21",
    description: "Special weekend discounts on all items",
    active: true,
  },
]

// ===== ADMIN DATA =====
const adminCredentials = {
  email: "admin@qeelin.com",
  password: "admin123",
  name: "Admin",
  avatar: "A",
}

// ===== WHATSAPP CONFIG =====
const WHATSAPP_NUMBER = "919876543210" // Replace with actual number

// ===== HELPER FUNCTIONS =====
function formatPrice(price) {
  return "₹" + price.toLocaleString("en-IN")
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function getCategoryName(slug) {
  const names = {
    "kurti-sets": "Kurti Sets",
    tops: "Tops",
    jeans: "Jeans",
  }
  return names[slug] || slug
}

function getProductById(id) {
  return products.find((p) => p.id === Number.parseInt(id))
}

function getProductsByCategory(category) {
  return products.filter((p) => p.category === category)
}

function generateOrderId() {
  const num = orders.length + 1
  return "ORD" + String(num).padStart(3, "0")
}

