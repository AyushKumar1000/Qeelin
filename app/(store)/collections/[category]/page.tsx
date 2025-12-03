"use client"

import { useState, useMemo } from "react"
import { useParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Filter, X } from "lucide-react"
import ProductCard from "@/components/product-card"
import { getProductsByCategory } from "@/lib/mock-data"

const categoryInfo: Record<string, { title: string; description: string }> = {
  "kurti-sets": {
    title: "Kurti Sets",
    description: "Traditional elegance meets contemporary design. Curated collection of premium ethnic wear.",
  },
  tops: {
    title: "Tops",
    description: "From silk blouses to structured shirts. Versatile pieces crafted for the modern woman.",
  },
  jeans: {
    title: "Jeans",
    description: "Premium denim with perfect fit. Designed for comfort without compromising on style.",
  },
}

export default function CategoryPage() {
  const params = useParams()
  const category = params.category as string
  const products = getProductsByCategory(category)
  const info = categoryInfo[category] || { title: category, description: "" }

  const [showFilters, setShowFilters] = useState(false)
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000])

  const allSizes = useMemo(() => {
    const sizes = new Set<string>()
    products.forEach((p) => p.sizes.forEach((s) => sizes.add(s)))
    return Array.from(sizes)
  }, [products])

  const allColors = useMemo(() => {
    const colors = new Set<string>()
    products.forEach((p) => p.colors.forEach((c) => colors.add(c)))
    return Array.from(colors)
  }, [products])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const sizeMatch = selectedSizes.length === 0 || product.sizes.some((s) => selectedSizes.includes(s))
      const colorMatch = selectedColors.length === 0 || product.colors.some((c) => selectedColors.includes(c))
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
      return sizeMatch && colorMatch && priceMatch
    })
  }, [products, selectedSizes, selectedColors, priceRange])

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]))
  }

  const toggleColor = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]))
  }

  const clearFilters = () => {
    setSelectedSizes([])
    setSelectedColors([])
    setPriceRange([0, 10000])
  }

  const hasActiveFilters =
    selectedSizes.length > 0 || selectedColors.length > 0 || priceRange[0] > 0 || priceRange[1] < 10000

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">{info.title}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{info.description}</p>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
          >
            <Filter size={18} />
            Filters
            {hasActiveFilters && <span className="w-2 h-2 bg-accent rounded-full" />}
          </button>
          <p className="text-sm text-muted-foreground">
            {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
          </p>
        </div>

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-secondary border border-border">
                {/* Size Filter */}
                <div>
                  <h3 className="font-medium mb-3 text-sm">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {allSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-3 py-1 text-sm border transition-colors ${
                          selectedSizes.includes(size)
                            ? "bg-foreground text-background border-foreground"
                            : "border-border hover:border-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div>
                  <h3 className="font-medium mb-3 text-sm">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {allColors.map((color) => (
                      <button
                        key={color}
                        onClick={() => toggleColor(color)}
                        className={`px-3 py-1 text-sm border transition-colors ${
                          selectedColors.includes(color)
                            ? "bg-foreground text-background border-foreground"
                            : "border-border hover:border-foreground"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="font-medium mb-3 text-sm">Price Range</h3>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      step="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full accent-foreground"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₹{priceRange[0].toLocaleString()}</span>
                      <span>₹{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <div className="md:col-span-3">
                    <button
                      onClick={clearFilters}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X size={16} />
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">No products match your filters</p>
            <button onClick={clearFilters} className="text-sm font-medium hover:text-accent transition-colors">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
