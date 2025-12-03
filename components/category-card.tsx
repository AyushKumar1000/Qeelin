"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

interface CategoryCardProps {
  title: string
  href: string
  image: string
  description?: string
}

export default function CategoryCard({ title, href, image, description }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link href={href} className="group block relative aspect-[3/4] overflow-hidden border border-border">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">{title}</h3>
          {description && <p className="text-background/80 text-sm">{description}</p>}
          <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium border-b border-background/50 pb-1 group-hover:border-background transition-colors">
            Shop Now
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
