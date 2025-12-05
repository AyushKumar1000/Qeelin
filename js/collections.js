// ===== COLLECTIONS PAGE JS =====

document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.productsReady === 'function') {
    window.productsReady.then(initCollectionsPage).catch(()=>initCollectionsPage())
  } else {
    initCollectionsPage()
  }
})

function initCollectionsPage() {
  loadAllProducts()
}

function loadAllProducts() {
  const grid = document.getElementById("allProductsGrid")
  if (!grid) return
  const source = (typeof products !== 'undefined' && Array.isArray(products)) ? products : []
  grid.innerHTML = source.map((product) => createProductCard(product)).join("")
}

function createProductCard(product) {
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0
  return `
    <a href="product.html?id=${product.id}" class="product-card">
      <div class="product-image">
        <img src="${product.images[0]}" alt="${product.name}">
        ${product.isNew ? '<span class="product-badge">New</span>' : ''}
        ${discount > 0 ? `<span class=\"product-badge\">${discount}% Off</span>` : ''}
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <div>
          <span class="product-price">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class=\"product-original-price\">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
      </div>
    </a>
  `
}
