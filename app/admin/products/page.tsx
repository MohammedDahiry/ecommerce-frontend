"use client"

import { Suspense } from "react"
import AdminSidebar from "@/components/admin-sidebar"
import { motion } from "framer-motion"
import { Plus, Edit2, Trash2, Search } from "lucide-react"

const products = [
  { id: 1, name: "Premium Headphones", price: "$299", stock: 45, status: "Active" },
  { id: 2, name: "Wireless Speaker", price: "$149", stock: 28, status: "Active" },
  { id: 3, name: "USB-C Cable", price: "$29", stock: 0, status: "Out of Stock" },
  { id: 4, name: "Phone Stand", price: "$39", stock: 67, status: "Active" },
  { id: 5, name: "Laptop Bag", price: "$89", stock: 15, status: "Low Stock" },
]

function ProductsContent() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Products</h1>
          <p className="text-foreground/60">Manage your product inventory</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium"
        >
          <Plus className="w-5 h-5" />
          Add Product
        </motion.button>
      </div>

      {/* Search */}
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-foreground/50" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Products Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass rounded-xl overflow-hidden border border-border/50"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border/50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Product Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Stock</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-border/30 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4 font-medium">{product.name}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.status === "Active"
                          ? "bg-green-500/20 text-green-600"
                          : product.status === "Out of Stock"
                            ? "bg-destructive/20 text-destructive"
                            : "bg-yellow-500/20 text-yellow-600"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 hover:bg-destructive/10 text-destructive rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function AdminProducts() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar activeItem="products" />

      <div className="flex-1 p-6 md:p-12 overflow-auto">
        <Suspense fallback={null}>
          <ProductsContent />
        </Suspense>
      </div>
    </div>
  )
}
