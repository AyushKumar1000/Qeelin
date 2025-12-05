// ===== HOME PAGE JS =====

// Use shared products and helpers from data.js (already loaded on page)
// - products
// - formatPrice
// - getProductById
// - addToCart, showToast are provided elsewhere (cart.js / main.js)

document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.productsReady === 'function') {
    window.productsReady.then(initHome).catch(()=>initHome())
  } else {
    initHome()
  }
})

function initHome() {
  loadNewArrivals()
}

function loadNewArrivals() {
  const grid = document.getElementById("newArrivalsGrid")
  if (!grid) return

  const source = (typeof products !== 'undefined' && Array.isArray(products)) ? products : []
  const newProducts = source.filter((p) => p.isNew).slice(0, 4)

  grid.innerHTML = newProducts.map((product) => createProductCard(product)).join("")
}

function createProductCard(product) {
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0

  return `
    <a href="product.html?id=${product.id}" class="product-card">
      <div class="product-image">
        <img src="${product.images[0]}" alt="${product.name}">
        ${product.isNew ? '<span class="product-badge">New</span>' : ""}
        ${discount > 0 ? `<span class="product-badge">${discount}% Off</span>` : ""}
        <div class="product-actions">
          <button class="btn btn-primary btn-full" onclick="event.preventDefault(); quickAddToCart(${product.id})">
            Add to Cart
          </button>
        </div>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <div>
          <span class="product-price">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="product-original-price">${formatPrice(product.originalPrice)}</span>` : ""}
        </div>
      </div>
    </a>
  `
}

function quickAddToCart(productId) {
  const product = getProductById(productId)
  if (product && product.sizes && product.sizes.length > 0) {
    const defaultSize = product.sizes[Math.floor(product.sizes.length / 2)]
    addToCart(productId, defaultSize, 1)
    showToast("Added to cart!")
  }
}
