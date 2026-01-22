"use client"

import { useState, useEffect } from "react"
import { Menu, X, Droplet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "A Empresa", href: "#empresa" },
  { name: "Nossas Bases", href: "#bases" },
  { name: "Contato", href: "#contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A1628]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#inicio")}
            className="flex items-center gap-2 group"
            type="button"
          >
            <div className="relative">
              <Droplet className="h-8 w-8 text-[#00D26A] fill-[#00D26A] transform rotate-180" />
              <div className="absolute inset-0 bg-[#00D26A] blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              enpulse
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium relative group"
                type="button"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D26A] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-[#00D26A] hover:bg-[#00B85C] text-[#0A1628] font-semibold px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00D26A]/25"
            >
              Área do Cliente
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            type="button"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A1628]/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-white/80 hover:text-white transition-colors duration-200 py-2 text-lg"
                  type="button"
                >
                  {link.name}
                </button>
              ))}
              <Button className="w-full bg-[#00D26A] hover:bg-[#00B85C] text-[#0A1628] font-semibold mt-4">
                Área do Cliente
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
