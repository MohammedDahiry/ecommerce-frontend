"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    Shop: ["All Products", "New Arrivals", "Best Sellers", "Sale"],
    Company: ["About Us", "Careers", "Press", "Blog"],
    Support: ["Contact", "FAQ", "Shipping", "Returns"],
    Legal: ["Privacy", "Terms", "Cookies", "Licenses"],
  }

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            className="col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
              LUXORA
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Experience premium shopping with cutting-edge technology and luxury selection.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(links).map((category, index) => (
            <motion.div
              key={category[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-foreground mb-4 text-sm">{category[0]}</h4>
              <ul className="space-y-2">
                {category[1].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          className="border-t border-border pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/60 text-sm">
              © {currentYear} LUXORA. Made with <Heart className="w-4 h-4 inline text-accent" /> by design enthusiasts.
            </p>
            <div className="flex gap-6">
              {["Twitter", "Instagram", "Facebook"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-foreground/60 hover:text-primary transition-colors text-sm font-medium"
                  whileHover={{ y: -2 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
