// ===== MAIN JS =====

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("active")
      this.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (mobileMenu && mobileMenuBtn) {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove("active")
        mobileMenuBtn.classList.remove("active")
      }
    }
  })
})

// Toast Notification
function showToast(message) {
  const toast = document.getElementById("toast")
  if (!toast) return

  const toastMessage = toast.querySelector(".toast-message")
  if (toastMessage) {
    toastMessage.textContent = message
  }

  toast.classList.add("show")

  setTimeout(() => {
    toast.classList.remove("show")
  }, 3000)
}

// Newsletter Form
document.addEventListener("DOMContentLoaded", () => {
  const newsletterForm = document.getElementById("newsletterForm")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector("input[type='email']").value
      showToast("Thank you for subscribing!")
      this.reset()
    })
  }
})

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll")

  elements.forEach((el) => {
    const rect = el.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight - 100

    if (isVisible) {
      el.classList.add("animated")
    }
  })
}

window.addEventListener("scroll", animateOnScroll)
document.addEventListener("DOMContentLoaded", animateOnScroll)
