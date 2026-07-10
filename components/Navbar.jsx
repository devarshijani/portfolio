"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowDownToLine } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const resumeUrl = process.env.NEXT_PUBLIC_CV || "/Devarshi_Jani_Resume.pdf"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="text-2xl sm:text-3xl font-bold flex-shrink-0"
            >
              <span className="gradient-text font-extrabold">devarshi</span>
              <span className="text-white font-medium">.jani</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <div className="flex items-baseline space-x-2 lg:space-x-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-400 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
              </div>

            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex-shrink-0">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-white focus:outline-none p-1.5 rounded-md"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass backdrop-blur-md border-t border-white/10"
            >
              <div className="px-3 pt-2 pb-4 space-y-2 max-w-7xl mx-auto flex flex-col">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-white block px-4 py-3 text-base font-medium transition-colors duration-200 rounded-md hover:bg-white/5"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href={resumeUrl}
                  download="Devarshi_Jani_Resume.pdf"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 mt-4 px-4 py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-base rounded-md font-semibold transition-all duration-300 w-full"
                >
                  <ArrowDownToLine size={18} />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
