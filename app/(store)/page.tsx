"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import CategoryCard from "@/components/category-card"
import ProductCard from "@/components/product-card"
import Testimonials from "@/components/testimonials"
import { getFeaturedProducts, getNewArrivals } from "@/lib/mock-data"

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()
  const newArrivals = getNewArrivals()

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Qeelin Couture Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-background"
          >
            <span className="text-sm tracking-[0.3em] uppercase mb-4 block">New Collection 2025</span>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold mb-6 leading-tight text-balance">
              Timeless Elegance,
              <br />
              Modern Soul
            </h1>
            <p className="text-lg md:text-xl text-background/90 mb-8 max-w-lg leading-relaxed">
              Discover curated collections of premium ethnic and contemporary wear designed for the woman who knows her
              worth.
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 font-medium hover:bg-background/90 transition-colors group"
            >
              Shop Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collections crafted with precision and passion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <CategoryCard
              title="Kurti Sets"
              href="/collections/kurti-sets"
              image="/placeholder.svg?height=800&width=600"
              description="Traditional elegance meets contemporary design"
            />
            <CategoryCard
              title="Tops"
              href="/collections/tops"
              image="/placeholder.svg?height=800&width=600"
              description="Versatile pieces for every occasion"
            />
            <CategoryCard
              title="Jeans"
              href="/collections/jeans"
              image="/placeholder.svg?height=800&width=600"
              description="Premium denim with perfect fit"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          >
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Featured Collection</h2>
              <p className="text-muted-foreground max-w-xl">Hand-picked pieces that define sophistication</p>
            </div>
            <Link
              href="/collections"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group"
            >
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          >
            <div>
              <span className="text-accent text-sm font-medium tracking-wider uppercase">Just In</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-2 mb-4">New Arrivals</h2>
              <p className="text-muted-foreground max-w-xl">Fresh designs to elevate your wardrobe</p>
            </div>
            <Link
              href="/collections"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group"
            >
              Explore New
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {newArrivals.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter / CTA */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-balance">
              Join the Qeelin Community
            </h2>
            <p className="text-background/70 max-w-xl mx-auto mb-8">
              Be the first to know about new collections, exclusive offers, and styling tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent border border-background/30 text-background placeholder:text-background/50 focus:outline-none focus:border-background"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-background text-foreground font-medium hover:bg-background/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}
