"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { LayoutDashboard, Package, Users, BarChart3, Settings, LogOut, ChevronRight, Menu, X } from "lucide-react"

interface SidebarProps {
  activeItem?: string
}

export default function AdminSidebar({ activeItem = "dashboard" }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    { id: "products", label: "Products", icon: Package, href: "/admin/products" },
    { id: "users", label: "Users", icon: Users, href: "/admin/users" },
    { id: "analytics", label: "Analytics", icon: BarChart3, href: "/admin/analytics" },
    { id: "settings", label: "Settings", icon: Settings, href: "/admin/settings" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:hidden z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed md:relative md:translate-x-0 left-0 top-0 h-screen w-64 md:w-auto glass md:bg-card/50 border-r border-border/50 flex flex-col z-40"
          >
            {/* Header */}
            <div className="p-6 border-b border-border/50">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  LUXORA
                </h1>
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="hidden md:block p-1.5 hover:bg-muted rounded-lg transition-colors"
                >
                  <ChevronRight
                    className="w-4 h-4"
                    style={{
                      transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
              </div>
              <p className="text-xs text-foreground/50 mt-2">Admin Panel</p>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 p-4 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = activeItem === item.id

                return (
                  <Link key={item.id} href={item.href}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : "text-foreground/70 hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </motion.div>
                  </Link>
                )
              })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-border/50 space-y-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-destructive hover:bg-destructive/10 transition-all text-sm font-medium"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 md:hidden z-30"
        />
      )}
    </>
  )
}
