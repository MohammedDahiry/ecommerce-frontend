"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Truck, Award } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Ultra Fast",
    description: "Lightning-speed checkout and instant order confirmation",
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Bank-level security for all your transactions",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary delivery on orders over $100",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Authenticated and guaranteed premium products",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="group glass rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
