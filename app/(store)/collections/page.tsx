"use client"

import { motion } from "framer-motion"
import CategoryCard from "@/components/category-card"

export default function CollectionsPage() {
  const categories = [
    {
      title: "Kurti Sets",
      href: "/collections/kurti-sets",
      image: "/placeholder.svg?height=800&width=600",
      description: "Traditional elegance meets contemporary design. Perfect for festivities and special occasions.",
    },
    {
      title: "Tops",
      href: "/collections/tops",
      image: "/placeholder.svg?height=800&width=600",
      description: "From silk blouses to structured shirts. Versatile pieces for every moment.",
    },
    {
      title: "Jeans",
      href: "/collections/jeans",
      image: "/placeholder.svg?height=800&width=600",
      description: "Premium denim with perfect fit. Crafted for comfort and style.",
    },
  ]

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Collections</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections, each piece crafted with precision and designed to make you feel
            extraordinary.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.href}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 relative h-[300px] md:h-[400px] overflow-hidden border border-border"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/placeholder.svg?height=600&width=1200')`,
            }}
          />
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="relative h-full flex items-center justify-center text-center text-background p-8">
            <div>
              <span className="text-sm tracking-widest uppercase text-accent">Exclusive</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-2 mb-4">New Season Arrivals</h2>
              <p className="text-background/80 max-w-lg mx-auto">
                Explore the latest additions to our collection, designed for the woman who appreciates timeless elegance
                with a modern edge.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
