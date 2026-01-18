"use client"

import { motion } from "framer-motion"

export default function OAuthButtons() {
  const handleOAuth = (provider: string) => {
    // Simulate OAuth click
    console.log(`${provider} OAuth clicked`)
  }

  const buttonVariants = {
    hover: { scale: 1.05, y: -2 },
    tap: { scale: 0.95 },
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Google Button */}
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => handleOAuth("Google")}
        className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border-2 border-border bg-card hover:bg-muted text-foreground transition-all font-medium"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="currentColor"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="currentColor"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="currentColor"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="currentColor"
          />
        </svg>
        <span className="hidden sm:inline">Google</span>
      </motion.button>

      {/* Apple Button */}
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => handleOAuth("Apple")}
        className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border-2 border-border bg-card hover:bg-muted text-foreground transition-all font-medium"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.05 13.5c-.91 2.92.37 5.81 3.03 6.54 2.66.73 5.55-.86 6.09-3.86.27-1.54.01-3.01-.73-4.3m-6.4-1.8C10.96 7.52 8.93 6.5 6.89 6.5c-3.64 0-6.59 3.29-6.59 7.35s2.95 7.35 6.59 7.35c2.04 0 4.07-1.02 5.67-2.84"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="hidden sm:inline">Apple</span>
      </motion.button>
    </div>
  )
}
