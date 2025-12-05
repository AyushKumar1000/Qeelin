// ===== CART PAGE JS =====

function loadCart() {
  try {
    const raw = JSON.parse(localStorage.getItem('qeelinCart') || '[]')
    // Filter out malformed entries (no name or productId)
    const cleaned = raw.filter(item => item && typeof item === 'object' && item.productId != null && item.name != null)
    if (cleaned.length !== raw.length) {
      // Persist cleaned cart back to storage
      localStorage.setItem('qeelinCart', JSON.stringify(cleaned))
    }
    return cleaned
  } catch (e) {
    return []
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem("qeelinCart", JSON.stringify(cart))
  } catch (e) {}
}

function formatPrice(price) {
  const num = typeof price === "number" ? price : Number(price)
  if (!Number.isFinite(num)) {
    return "₹0.00"
  }
  return `₹${num.toFixed(2)}`
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart()

  const whatsappBtn = document.getElementById('whatsappCheckout')
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', handleWhatsAppCheckout)
  }
})

function renderCart() {
  const cart = loadCart()
  const cartItemsList = document.getElementById('cartItemsList')
  const emptyCart = document.getElementById('emptyCart')
  const cartContent = document.getElementById('cartContent')

  if (!cartItemsList || !emptyCart || !cartContent) {
    console.error('[CartPage] Required elements not found')
    return
  }

  if (cart.length === 0) {
    cartItemsList.innerHTML = ''
    emptyCart.style.display = 'block'
    cartContent.style.display = 'none'
    return
  }

  emptyCart.style.display = 'none'
  cartContent.style.display = 'grid'

  cartItemsList.innerHTML = cart.map(item => `
    <div class="cart-item" data-product-id="${item.productId}">
      <div class="cart-product">
        <div class="cart-product-image">
          <img src="${item.image || '/placeholder.svg'}" alt="${item.name}">
        </div>
        <div class="cart-product-details">
          <h3 class="cart-product-name">${item.name}</h3>
          <p class="cart-product-price">${formatPrice(item.price)}</p>
        </div>
      </div>
      <div class="cart-quantity">
        <button class="qty-btn" onclick="updateQty('${item.productId}', -1)">-</button>
        <input type="number" value="${item.quantity}" min="1" readonly>
        <button class="qty-btn" onclick="updateQty('${item.productId}', 1)">+</button>
      </div>
      <div class="cart-item-total">
        ${formatPrice(item.price * item.quantity)}
      </div>
      <button class="cart-item-remove" onclick="removeItem('${item.productId}')">×</button>
    </div>
  `).join('')

  updateSummary()
}

function updateQty(productId, change) {
  let cart = loadCart()
  const item = cart.find(i => i.productId === productId)
  if (item) {
    item.quantity = Math.max(1, item.quantity + change)
    saveCart(cart)
    renderCart()
  }
}

function removeItem(productId) {
  let cart = loadCart()
  cart = cart.filter(i => i.productId !== productId)
  saveCart(cart)
  renderCart()
}

function updateSummary() {
  const cart = loadCart()
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 0 ? 0 : 0
  const total = subtotal + shipping

  const subtotalEl = document.getElementById('subtotal')
  const shippingEl = document.getElementById('shipping')
  const totalEl = document.getElementById('total')

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal)
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : formatPrice(shipping)
  if (totalEl) totalEl.textContent = formatPrice(total)
}

function renderCartPage() {
  const cartContent = document.getElementById("cartContent")
  const emptyCart = document.getElementById("emptyCart")
  const cartItemsList = document.getElementById("cartItemsList")

  if (cart.length === 0) {
    if (cartContent) cartContent.style.display = "none"
    if (emptyCart) emptyCart.style.display = "block"
    return
  }

  if (cartContent) cartContent.style.display = "grid"
  if (emptyCart) emptyCart.style.display = "none"

  // Render cart items
  if (cartItemsList) {
    cartItemsList.innerHTML = cart
      .map(
        (item) => `
      <div class="cart-item" data-product-id="${item.productId}" data-size="${item.size}">
        <div class="cart-product">
          <div class="cart-product-image">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="cart-product-info">
            <h3>${item.name}</h3>
            <p>Size: ${item.size}</p>
          </div>
        </div>
        <div class="cart-price">${formatPrice(item.price)}</div>
        <div class="cart-quantity">
          <button onclick="updateItemQuantity(${item.productId}, '${item.size}', ${item.quantity - 1})">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateItemQuantity(${item.productId}, '${item.size}', ${item.quantity + 1})">+</button>
        </div>
        <div class="cart-total">${formatPrice(item.price * item.quantity)}</div>
        <button class="cart-remove" onclick="removeItem(${item.productId}, '${item.size}')">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `,
      )
      .join("")
  }

  // Update summary
  updateCartSummary()
}

function updateCartSummary() {
  const subtotal = getCartSubtotal()
  const shipping = getShippingCost()
  const total = subtotal + shipping

  const subtotalEl = document.getElementById("subtotal")
  const shippingEl = document.getElementById("shipping")
  const totalEl = document.getElementById("total")

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal)
  if (shippingEl) shippingEl.textContent = shipping === 0 ? "FREE" : formatPrice(shipping)
  if (totalEl) totalEl.textContent = formatPrice(total)
}

function handleWhatsAppCheckout(event) {
  event.preventDefault()

  const cart = loadCart()
  if (!cart.length) {
    if (typeof showToast === 'function') {
      showToast('Your cart is empty. Add items before placing an order.')
    }
    return
  }

  const nameInput = document.getElementById('customerName')
  const phoneInput = document.getElementById('customerPhone')
  const addressInput = document.getElementById('customerAddress')
  const noteInput = document.getElementById('customerNote')

  const customerName = nameInput ? nameInput.value.trim() : ''
  const customerPhone = phoneInput ? phoneInput.value.trim() : ''
  const customerAddress = addressInput ? addressInput.value.trim() : ''
  const customerNote = noteInput ? noteInput.value.trim() : ''

  if (!customerName || !customerPhone || !customerAddress) {
    if (typeof showToast === 'function') {
      showToast('Please fill in your name, phone number, and delivery address.')
    }
    return
  }

  if (typeof openWhatsAppOrder === 'function') {
    openWhatsAppOrder({
      name: customerName,
      phone: customerPhone,
      address: customerAddress,
      note: customerNote,
    })

    if (nameInput) nameInput.value = ''
    if (phoneInput) phoneInput.value = ''
    if (addressInput) addressInput.value = ''
    if (noteInput) noteInput.value = ''
  } else if (typeof showToast === 'function') {
    showToast('Unable to start WhatsApp checkout at the moment. Please try again later.')
  }
}

