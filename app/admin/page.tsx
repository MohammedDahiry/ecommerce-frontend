"use client"

import AdminSidebar from "@/components/admin-sidebar"
import { motion } from "framer-motion"
import { TrendingUp, Users, ShoppingCart, DollarSign } from "lucide-react"

const stats = [
  { label: "Total Revenue", value: "$45,234.89", change: "+12.5%", icon: DollarSign, positive: true },
  { label: "Total Orders", value: "1,234", change: "+8.2%", icon: ShoppingCart, positive: true },
  { label: "Active Users", value: "5,234", change: "+2.3%", icon: Users, positive: true },
  { label: "Growth Rate", value: "23.5%", change: "+4.1%", icon: TrendingUp, positive: true },
]

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar activeItem="dashboard" />

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-12 overflow-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-foreground/60 mb-8">Welcome back to your admin panel</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass rounded-xl p-6 border border-border/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className={`text-sm font-semibold ${stat.positive ? "text-green-500" : "text-destructive"}`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-foreground/60 text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass rounded-xl p-6 border border-border/50"
            >
              <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-medium">Order #{1000 + i}</p>
                      <p className="text-xs text-foreground/50">2 hours ago</p>
                    </div>
                    <p className="font-semibold">${(Math.random() * 500 + 100).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass rounded-xl p-6 border border-border/50"
            >
              <h2 className="text-lg font-semibold mb-4">Top Products</h2>
              <div className="space-y-3">
                {["Premium Headphones", "Wireless Speaker", "USB-C Cable", "Phone Stand", "Laptop Bag"].map(
                  (product, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <p className="text-sm font-medium">{product}</p>
                      <p className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        {Math.floor(Math.random() * 100) + 50} sold
                      </p>
                    </div>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
