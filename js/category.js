// ===== CATEGORY PAGE JS =====

let currentCategory = ""
let filteredProducts = []

document.addEventListener("DOMContentLoaded", () => {
  initCategoryPage()
})

function initCategoryPage() {
  const urlParams = new URLSearchParams(window.location.search)
  currentCategory = urlParams.get("cat") || ""

  const titleEl = document.getElementById("categoryTitle")
  const subtitleEl = document.getElementById("categorySubtitle")

  if (titleEl) {
    titleEl.textContent = getCategoryName(currentCategory)
  }
  if (subtitleEl) {
    subtitleEl.textContent = `Browse our ${getCategoryName(currentCategory).toLowerCase()} collection`
  }

  document.title = `${getCategoryName(currentCategory)} | Qeelin Couture`

  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.href.includes(`cat=${currentCategory}`)) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })

  loadCategoryProducts()
  setupFilters()
}

function loadCategoryProducts() {
  const source = (typeof products !== 'undefined' && Array.isArray(products)) ? products : []
  filteredProducts = currentCategory ? getProductsByCategory(currentCategory) : [...source]
  renderProducts()
}

function renderProducts() {
  const grid = document.getElementById("categoryProductsGrid")
  const countEl = document.getElementById("productCount")
  if (!grid) return

  if (countEl) {
    countEl.textContent = filteredProducts.length
  }

  if (filteredProducts.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem;">
        <h3 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 0.5rem;">No products found</h3>
        <p style="color: var(--gray-500);">Try adjusting your filters</p>
      </div>
    `
    return
  }

  grid.innerHTML = filteredProducts.map((product) => createProductCard(product)).join("")
}

function setupFilters() {
  const clearBtn = document.getElementById("clearFilters")
  const applyBtn = document.getElementById("applyFilters")
  const sortSelect = document.getElementById("sortSelect")
  const filterToggle = document.getElementById("filterToggle")
  const filtersSidebar = document.querySelector(".filters-sidebar")

  if (clearBtn) clearBtn.addEventListener("click", clearAllFilters)
  if (applyBtn) applyBtn.addEventListener("click", applyFilters)
  if (sortSelect) sortSelect.addEventListener("change", sortProducts)
  if (filterToggle && filtersSidebar) {
    filterToggle.addEventListener("click", () => {
      filtersSidebar.classList.toggle("active")
    })
  }
}

function clearAllFilters() {
  document.querySelectorAll(".filters-sidebar input[type='checkbox']").forEach((cb) => {
    cb.checked = false
  })
  loadCategoryProducts()
}

function applyFilters() {
  const baseProducts = currentCategory ? getProductsByCategory(currentCategory) : ((typeof products !== 'undefined' && Array.isArray(products)) ? [...products] : [])

  const selectedSizes = Array.from(document.querySelectorAll("input[name='size']:checked")).map((cb) => cb.value)
  const selectedColors = Array.from(document.querySelectorAll("input[name='color']:checked")).map((cb) => cb.value)
  const selectedPrices = Array.from(document.querySelectorAll("input[name='price']:checked")).map((cb) => cb.value)

  filteredProducts = baseProducts.filter((product) => {
    if (selectedSizes.length > 0) {
      const hasSize = Array.isArray(product.sizes) && product.sizes.some((s) => selectedSizes.includes(s))
      if (!hasSize) return false
    }
    if (selectedColors.length > 0) {
      if (!selectedColors.includes(product.color)) return false
    }
    if (selectedPrices.length > 0) {
      const inRange = selectedPrices.some((range) => {
        if (range === "0-999") return product.price < 1000
        if (range === "1000-1999") return product.price >= 1000 && product.price < 2000
        if (range === "2000-2999") return product.price >= 2000 && product.price < 3000
        if (range === "3000+") return product.price >= 3000
        return true
      })
      if (!inRange) return false
    }
    return true
  })

  renderProducts()

  const filtersSidebar = document.querySelector(".filters-sidebar")
  if (filtersSidebar) filtersSidebar.classList.remove("active")
}

function sortProducts() {
  const sortSelect = document.getElementById("sortSelect")
  if (!sortSelect) return
  const sortValue = sortSelect.value
  switch (sortValue) {
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case "newest":
      filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
      break
    default:
      break
  }
  renderProducts()
}

function createProductCard(product) {
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0
  return `
    <a href="product.html?id=${product.id}" class="product-card">
      <div class="product-image">
        <img src="${product.images[0]}" alt="${product.name}">
        ${product.isNew ? '<span class="product-badge">New</span>' : ''}
        ${discount > 0 ? `<span class="product-badge">${discount}% Off</span>` : ''}
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <div>
          <span class="product-price">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="product-original-price">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
      </div>
    </a>
  `
}
