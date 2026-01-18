"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProductCard from "./product-card"

const products = [
  {
    id: 1,
    name: "Premium Leather Handbag",
    price: "$299",
    image: "/luxury-leather-handbag.jpg",
    category: "Bags",
  },
  {
    id: 2,
    name: "Classic Watch",
    price: "$499",
    image: "/premium-luxury-watch.jpg",
    category: "Watches",
  },
  {
    id: 3,
    name: "Silk Scarf Collection",
    price: "$149",
    image: "/luxury-silk-scarf.png",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Gold Sunglasses",
    price: "$349",
    image: "/luxury-designer-sunglasses.jpg",
    category: "Eyewear",
  },
  {
    id: 5,
    name: "Designer Shoes",
    price: "$599",
    image: "/luxury-designer-shoes.jpg",
    category: "Footwear",
  },
  {
    id: 6,
    name: "Cashmere Sweater",
    price: "$399",
    image: "/luxury-cashmere-sweater.png",
    category: "Clothing",
  },
]

const categories = ["All", "Bags", "Watches", "Accessories", "Eyewear", "Footwear", "Clothing"]

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-semibold tracking-wider mb-4">
            OUR COLLECTION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Curated Premium
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Selection
            </span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
