"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/product/${product.id}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden border border-border bg-secondary">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {product.originalPrice && (
            <span className="absolute top-3 left-3 bg-foreground text-background px-3 py-1 text-xs font-medium">
              SALE
            </span>
          )}
          {product.newArrival && !product.originalPrice && (
            <span className="absolute top-3 left-3 bg-accent text-foreground px-3 py-1 text-xs font-medium">NEW</span>
          )}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <span className="block w-full bg-foreground text-background text-center py-3 text-sm font-medium">
              View Details
            </span>
          </div>
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="font-medium text-sm md:text-base group-hover:text-accent transition-colors">{product.name}</h3>
          <div className="flex items-center gap-2">
            <span className="font-semibold">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-muted-foreground line-through text-sm">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
