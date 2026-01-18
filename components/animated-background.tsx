"use client"

import { useEffect, useState } from "react"
import { useTheme } from "@/components/theme-provider"

export default function AnimatedBackground() {
  const { isDark } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Animated gradient orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Primary gradient orb */}
        <div
          className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            isDark ? "bg-gradient-to-br from-purple-600 to-blue-600" : "bg-gradient-to-br from-purple-300 to-blue-300"
          } animate-pulse`}
          style={{
            animation: "float 8s ease-in-out infinite",
          }}
        />

        {/* Secondary gradient orb */}
        <div
          className={`absolute top-1/2 -left-40 w-80 h-80 rounded-full blur-3xl opacity-15 ${
            isDark ? "bg-gradient-to-tr from-orange-600 to-pink-600" : "bg-gradient-to-tr from-orange-300 to-pink-300"
          }`}
          style={{
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />

        {/* Tertiary gradient orb */}
        <div
          className={`absolute bottom-0 right-1/3 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            isDark ? "bg-gradient-to-b from-cyan-600 to-blue-600" : "bg-gradient-to-b from-cyan-300 to-blue-300"
          }`}
          style={{
            animation: "float 12s ease-in-out infinite",
          }}
        />

        {/* Grid pattern */}
        <div
          className={`absolute inset-0 opacity-5 ${isDark ? "bg-grid-dark" : "bg-grid-light"}`}
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(148, 0, 211, .05) 25%, rgba(148, 0, 211, .05) 26%, transparent 27%, transparent 74%, rgba(148, 0, 211, .05) 75%, rgba(148, 0, 211, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(148, 0, 211, .05) 25%, rgba(148, 0, 211, .05) 26%, transparent 27%, transparent 74%, rgba(148, 0, 211, .05) 75%, rgba(148, 0, 211, .05) 76%, transparent 77%, transparent)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0px, 0px);
          }
          33% {
            transform: translate(30px, -50px);
          }
          66% {
            transform: translate(-20px, 20px);
          }
        }
      `}</style>
    </>
  )
}
