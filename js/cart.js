// ===== CART MANAGEMENT =====
let cart = JSON.parse(localStorage.getItem("qeelin_cart")) || []
const cartOrders = JSON.parse(localStorage.getItem("qeelin_orders")) || []
const WHATSAPP_NUMBER = "7736312372" // Replace with actual WhatsApp number

function saveCart() {
  localStorage.setItem("qeelin_cart", JSON.stringify(cart))
  updateCartCount()
}

function updateCartCount() {
  const countElements = document.querySelectorAll("#cartCount")
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  countElements.forEach((el) => {
    el.textContent = totalItems
  })
}

function addToCart(productId, size, quantity = 1) {
  const product = getProductById(productId)
  if (!product) return false

  const existingIndex = cart.findIndex((item) => item.productId === productId && item.size === size)

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity
  } else {
    cart.push({
      productId,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size,
      quantity,
    })
  }

  saveCart()
  return true
}

function removeFromCart(productId, size) {
  cart = cart.filter((item) => !(item.productId === productId && item.size === size))
  saveCart()
}

function updateCartQuantity(productId, size, quantity) {
  const index = cart.findIndex((item) => item.productId === productId && item.size === size)

  if (index > -1) {
    if (quantity <= 0) {
      removeFromCart(productId, size)
    } else {
      cart[index].quantity = quantity
      saveCart()
    }
  }
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

function getCartSubtotal() {
  return getCartTotal()
}

function getShippingCost() {
  const subtotal = getCartSubtotal()
  return subtotal >= 999 ? 0 : 99
}

function clearCart() {
  cart = []
  saveCart()
}

function generateWhatsAppMessage(customerDetails) {
  let message = "🛍️ *New Order from Qeelin Couture*\n\n"
  message += "━━━━━━━━━━━━━━━━━━━━\n"
  message += "*Customer Details:*\n"
  message += `Name: ${customerDetails.name}\n`
  message += `Phone: ${customerDetails.phone}\n`
  message += `Address: ${customerDetails.address}\n`

  if (customerDetails.note) {
    message += `Note: ${customerDetails.note}\n`
  }

  message += "\n━━━━━━━━━━━━━━━━━━━━\n"
  message += "*Order Items:*\n\n"

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name}\n`
    message += `   Size: ${item.size}\n`
    message += `   Qty: ${item.quantity}\n`
    message += `   Price: ${formatPrice(item.price * item.quantity)}\n\n`
  })

  message += "━━━━━━━━━━━━━━━━━━━━\n"
  message += `*Subtotal:* ${formatPrice(getCartSubtotal())}\n`
  message += `*Shipping:* ${getShippingCost() === 0 ? "FREE" : formatPrice(getShippingCost())}\n`
  message += `*Total:* ${formatPrice(getCartSubtotal() + getShippingCost())}\n`
  message += "━━━━━━━━━━━━━━━━━━━━\n"

  return encodeURIComponent(message)
}

function openWhatsAppOrder(customerDetails) {
  const message = generateWhatsAppMessage(customerDetails)
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
  window.open(url, "_blank")

  // Save order locally
  const newOrder = {
    id: generateOrderId(),
    customer: {
      name: customerDetails.name,
      phone: customerDetails.phone,
      address: customerDetails.address,
    },
    products: cart.map((item) => ({
      productId: item.productId,
      name: item.name,
      size: item.size,
      quantity: item.quantity,
      price: item.price,
    })),
    total: getCartSubtotal() + getShippingCost(),
    status: "Pending",
    date: new Date().toISOString(),
    note: customerDetails.note || "",
  }

  cartOrders.push(newOrder)
  localStorage.setItem("qeelin_orders", JSON.stringify(cartOrders))

  clearCart()
}

// Initialize cart count on page load
document.addEventListener("DOMContentLoaded", updateCartCount)
