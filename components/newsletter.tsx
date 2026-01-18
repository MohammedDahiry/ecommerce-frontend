"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setEmail("")
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="glass rounded-3xl p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-accent/10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Mail className="w-12 h-12 mx-auto text-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Stay Updated</h2>
            <p className="text-foreground/60 mb-8">
              Subscribe to our newsletter for exclusive deals and new collection releases.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <motion.input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ borderColor: "var(--color-primary)" }}
            />
            <motion.button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {isSubmitted ? "✓ Subscribed!" : "Subscribe"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
