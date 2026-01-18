"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"
import OAuthButtons from "./oauth-buttons"

interface AuthFormProps {
  type: "login" | "register"
  onSubmit: (email: string, password: string, fullName?: string) => Promise<void>
  isLoading?: boolean
}

export default function AuthForm({ type, onSubmit, isLoading = false }: AuthFormProps) {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({ fullName: "", email: "", password: "" })

  const validateForm = () => {
    const newErrors = { fullName: "", email: "", password: "" }

    if (type === "register" && !fullName.trim()) {
      newErrors.fullName = "Please enter your full name"
    }

    if (!email || !email.includes("@")) {
      newErrors.email = "Please enter a valid email"
    }

    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return !newErrors.fullName && !newErrors.email && !newErrors.password
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      await onSubmit(email, password, fullName)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-5"
    >
      {type === "register" && (
        <motion.div variants={itemVariants} className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium text-foreground">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className={`w-full pl-10 pr-4 py-2.5 rounded-lg border-2 bg-card text-foreground placeholder-muted-foreground transition-all focus:outline-none ${
                errors.fullName ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"
              }`}
            />
          </div>
          {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
        </motion.div>
      )}

      {/* Email Input */}
      <motion.div variants={itemVariants} className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={`w-full pl-10 pr-4 py-2.5 rounded-lg border-2 bg-card text-foreground placeholder-muted-foreground transition-all focus:outline-none ${
              errors.email ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"
            }`}
          />
        </div>
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </motion.div>

      {/* Password Input */}
      <motion.div variants={itemVariants} className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-foreground">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className={`w-full pl-10 pr-12 py-2.5 rounded-lg border-2 bg-card text-foreground placeholder-muted-foreground transition-all focus:outline-none ${
              errors.password ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
      </motion.div>

      {/* Submit Button */}
      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isLoading}
        className="w-full py-2.5 px-4 rounded-lg font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Loading..." : type === "login" ? "Sign In" : "Create Account"}
      </motion.button>

      {/* Divider */}
      <motion.div variants={itemVariants} className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
        </div>
      </motion.div>

      {/* OAuth Buttons */}
      <motion.div variants={itemVariants}>
        <OAuthButtons />
      </motion.div>
    </motion.form>
  )
}
