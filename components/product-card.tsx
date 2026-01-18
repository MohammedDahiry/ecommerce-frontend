"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Heart } from "lucide-react"
import { useState } from "react"

interface ProductCardProps {
  id: number
  name: string
  price: string
  image: string
  category: string
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        {/* Image Container */}
        <div className="relative h-72 overflow-hidden bg-muted">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-end justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 mr-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Add
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-3 rounded-lg transition-all ${
                isFavorite ? "bg-accent text-accent-foreground" : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
            </motion.button>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            className="absolute top-4 left-4 px-3 py-1 bg-secondary/90 backdrop-blur-sm text-secondary-foreground text-xs font-bold rounded-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {category}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {price}
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-accent text-sm"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  ★
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
