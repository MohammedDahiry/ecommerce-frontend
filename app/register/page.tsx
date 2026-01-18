"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import AuthForm from "@/components/auth-form"

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = async (email: string, password: string, fullName?: string) => {
    setIsLoading(true)
    // Simulate registration
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="space-y-2 mb-8">
          <h1 className="text-4xl font-bold text-balance">Create Account</h1>
          <p className="text-muted-foreground">Join us and start your luxury shopping experience</p>
        </div>

        <AuthForm type="register" onSubmit={handleRegister} isLoading={isLoading} />

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline transition-colors">
            Sign in
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
