"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya M.",
    location: "Mumbai",
    text: "The quality is absolutely stunning. Each piece feels luxurious and the fit is perfect. Qeelin Couture has become my go-to for special occasions.",
    rating: 5,
  },
  {
    name: "Ananya S.",
    location: "Delhi",
    text: "Finally found a brand that understands modern elegance. The kurti sets are beautifully crafted and I receive compliments every time I wear them.",
    rating: 5,
  },
  {
    name: "Kavya R.",
    location: "Bangalore",
    text: "Exceptional craftsmanship and attention to detail. The ordering process was smooth and delivery was prompt. Highly recommend!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real experiences from women who've discovered their signature style with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">{`"${testimonial.text}"`}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
