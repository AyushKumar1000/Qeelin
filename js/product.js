// ===== PRODUCT DETAIL PAGE JS =====

let currentProduct = null
let currentImageIndex = 0
let selectedSize = ""

// Use shared helpers from data.js and cart.js/main.js

document.addEventListener("DOMContentLoaded", () => {
  initProductPage()
})

function initProductPage() {
  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search)
  const productId = urlParams.get("id")

  if (!productId) {
    window.location.href = "collections.html"
    return
  }

  currentProduct = getProductById(productId)

  if (!currentProduct) {
    window.location.href = "collections.html"
    return
  }

  renderProductDetails()
  setupProductInteractions()
  loadRecommendedProducts()
}

function renderProductDetails() {
  // Update document title
  document.title = `${currentProduct.name} | Qeelin Couture`

  // Breadcrumb
  const breadcrumbCategory = document.getElementById("breadcrumbCategory")
  const breadcrumbProduct = document.getElementById("breadcrumbProduct")

  if (breadcrumbCategory) {
    breadcrumbCategory.textContent = getCategoryName(currentProduct.category)
    breadcrumbCategory.href = `category.html?cat=${currentProduct.category}`
  }
  if (breadcrumbProduct) {
    breadcrumbProduct.textContent = currentProduct.name
  }

  // Main image
  const mainImage = document.getElementById("mainImage")
  if (mainImage) {
    mainImage.src = currentProduct.images[0]
    mainImage.alt = currentProduct.name
  }

  // Thumbnails
  const thumbsContainer = document.getElementById("galleryThumbs")
  if (thumbsContainer) {
    thumbsContainer.innerHTML = currentProduct.images
      .map(
        (img, index) => `
      <div class="gallery-thumb ${index === 0 ? "active" : ""}" onclick="changeImage(${index})">
        <img src="${img}" alt="${currentProduct.name}">
      </div>
    `,
      )
      .join("")
  }

  // Product info
  document.getElementById("productCategory").textContent = getCategoryName(currentProduct.category)
  document.getElementById("productTitle").textContent = currentProduct.name
  document.getElementById("productPrice").textContent = formatPrice(currentProduct.price)
  document.getElementById("productDescription").textContent = currentProduct.description

  // Original price and discount
  const originalPriceEl = document.getElementById("productOriginalPrice")
  const discountEl = document.getElementById("productDiscount")

  if (currentProduct.originalPrice) {
    originalPriceEl.textContent = formatPrice(currentProduct.originalPrice)
    const discount = Math.round((1 - currentProduct.price / currentProduct.originalPrice) * 100)
    discountEl.textContent = `${discount}% Off`
  } else {
    originalPriceEl.style.display = "none"
    discountEl.style.display = "none"
  }

  // Sizes
  const sizeButtonsContainer = document.getElementById("sizeButtons")
  if (sizeButtonsContainer) {
    sizeButtonsContainer.innerHTML = currentProduct.sizes
      .map(
        (size) => `
      <button class="size-btn" onclick="selectSize('${size}')">${size}</button>
    `,
      )
      .join("")
  }

  // Stock status
  const stockStatus = document.getElementById("stockStatus")
  if (stockStatus) {
    if (currentProduct.stock > 0) {
      stockStatus.className = "stock-status in-stock"
      stockStatus.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        In Stock (${currentProduct.stock} available)
      `
    } else {
      stockStatus.className = "stock-status out-of-stock"
      stockStatus.innerHTML = "Out of Stock"
    }
  }
}

function setupProductInteractions() {
  // Image navigation
  const prevBtn = document.getElementById("prevImage")
  const nextBtn = document.getElementById("nextImage")

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex - 1 + currentProduct.images.length) % currentProduct.images.length
      updateMainImage()
    })
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % currentProduct.images.length
      updateMainImage()
    })
  }

  // Quantity controls
  const qtyMinus = document.getElementById("qtyMinus")
  const qtyPlus = document.getElementById("qtyPlus")
  const qtyInput = document.getElementById("qtyInput")

  if (qtyMinus && qtyPlus && qtyInput) {
    qtyMinus.addEventListener("click", () => {
      const current = Number.parseInt(qtyInput.value) || 1
      if (current > 1) qtyInput.value = current - 1
    })

    qtyPlus.addEventListener("click", () => {
      const current = Number.parseInt(qtyInput.value) || 1
      if (current < currentProduct.stock) qtyInput.value = current + 1
    })
  }

  // Add to cart
  const addToCartBtn = document.getElementById("addToCartBtn")
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", handleAddToCart)
  }

  // WhatsApp order
  const whatsappBtn = document.getElementById("whatsappOrderBtn")
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", handleWhatsAppOrder)
  }
}

function changeImage(index) {
  currentImageIndex = index
  updateMainImage()
}

function updateMainImage() {
  const mainImage = document.getElementById("mainImage")
  const thumbs = document.querySelectorAll(".gallery-thumb")

  if (mainImage) {
    mainImage.src = currentProduct.images[currentImageIndex]
  }

  thumbs.forEach((thumb, index) => {
    thumb.classList.toggle("active", index === currentImageIndex)
  })
}

function selectSize(size) {
  selectedSize = size

  document.querySelectorAll(".size-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.textContent === size)
  })
}

function handleAddToCart() {
  if (!selectedSize) {
    showToast("Please select a size")
    return
  }

  const quantity = Number.parseInt(document.getElementById("qtyInput").value) || 1

  addToCart(currentProduct.id, selectedSize, quantity)
  showToast("Added to cart!")
}

function handleWhatsAppOrder() {
  if (!selectedSize) {
    showToast("Please select a size")
    return
  }

  const quantity = Number.parseInt(document.getElementById("qtyInput").value) || 1

  // Add to cart first
  addToCart(currentProduct.id, selectedSize, quantity)

  // Redirect to cart for checkout
  window.location.href = "cart.html"
}

function loadRecommendedProducts() {
  const grid = document.getElementById("recommendedGrid")
  if (!grid) return

  // Get products from same category, excluding current
  const recommended = products
    .filter((p) => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, 4)

  if (recommended.length === 0) {
    // If no products in same category, show random products
    const others = products.filter((p) => p.id !== currentProduct.id).slice(0, 4)
    grid.innerHTML = others.map((product) => createProductCard(product)).join("")
  } else {
    grid.innerHTML = recommended.map((product) => createProductCard(product)).join("")
  }
}

function createProductCard(product) {
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0

  return `
    <a href="product.html?id=${product.id}" class="product-card">
      <div class="product-image">
        <img src="${product.images[0]}" alt="${product.name}">
        ${product.isNew ? '<span class="product-badge">New</span>' : ""}
        ${discount > 0 ? `<span class="product-badge">${discount}% Off</span>` : ""}
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
