"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, Search } from "lucide-react"
import { motion } from "framer-motion"
import ThemeToggle from "./theme-toggle"

export default function Navigation({ isScrolled }: { isScrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          LUXORA
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Shop", "Collection", "About", "Contact"].map((item) => (
            <motion.a
              key={item}
              href="#"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm tracking-wide"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Search className="w-5 h-5 text-foreground/70" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <ShoppingCart className="w-5 h-5 text-foreground/70" />
          </motion.button>

          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Sign In
            </motion.button>
          </Link>

          <Link href="/register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block text-sm font-semibold px-4 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              Sign Up
            </motion.button>
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden glass border-t"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-6 py-4 space-y-3">
          {["Shop", "Collection", "About", "Contact"].map((item) => (
            <a key={item} href="#" className="block text-foreground/70 hover:text-foreground transition-colors">
              {item}
            </a>
          ))}
          <div className="pt-3 border-t border-border space-y-2">
            <Link href="/login" className="block text-foreground/70 hover:text-foreground transition-colors">
              Sign In
            </Link>
            <Link
              href="/register"
              className="block text-sm font-semibold px-4 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-center"
            >
              Sign Up
            </Link>
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}
