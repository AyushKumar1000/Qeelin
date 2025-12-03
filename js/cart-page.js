// ===== CART PAGE JS =====

document.addEventListener("DOMContentLoaded", () => {
  renderCartPage()
  setupCartInteractions()
})

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

function updateItemQuantity(productId, size, quantity) {
  updateCartQuantity(productId, size, quantity);
