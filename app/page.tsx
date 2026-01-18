"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import ProductGrid from "@/components/product-grid"
import Features from "@/components/features"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <ProductGrid />
      <Features />
      <Newsletter />
      <Footer />
    </main>
  )
}
