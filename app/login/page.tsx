"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import AuthForm from "@/components/auth-form"
import ThemeToggle from "@/components/theme-toggle"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true)
    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <ThemeToggle />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="space-y-2 mb-8">
          <h1 className="text-4xl font-bold text-balance">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your account to continue shopping</p>
        </div>

        <AuthForm type="login" onSubmit={handleLogin} isLoading={isLoading} />

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/register" className="font-semibold text-primary hover:underline transition-colors">
            Sign up
          </Link>
        </div>
      </motion.div>

      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      </div>
    </div>
  )
}
