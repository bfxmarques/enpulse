"use client"

import { Droplet, Linkedin, Instagram, Facebook } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
]

const footerLinks = [
  { name: "Início", href: "#inicio" },
  { name: "A Empresa", href: "#empresa" },
  { name: "Nossas Bases", href: "#bases" },
  { name: "Contato", href: "#contato" },
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-[#0A1628] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <button
              onClick={() => scrollToSection("#inicio")}
              className="flex items-center gap-2 group mb-6"
              type="button"
            >
              <div className="relative">
                <Droplet className="h-8 w-8 text-[#00D26A] fill-[#00D26A] transform rotate-180" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                enpulse
              </span>
            </button>
            <p className="text-white/60 leading-relaxed max-w-md">
              Uma das maiores empresas de armazenamento energético do Brasil,
              com mais de 30 anos de experiência em excelência operacional e
              compromisso com o futuro energético nacional.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#00D26A]/20 hover:text-[#00D26A] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-[#00D26A] transition-colors text-sm"
                    type="button"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contato</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a
                  href="tel:+551838335280"
                  className="hover:text-[#00D26A] transition-colors"
                >
                  (18) 3833-5280
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@enpulseenergia.com.br"
                  className="hover:text-[#00D26A] transition-colors break-all"
                >
                  contato@enpulseenergia.com.br
                </a>
              </li>
              <li>Paulínia, São Paulo</li>
              <li>Brasil</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © 2026 Enpulse Energia. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-white/40 hover:text-white/60 text-sm transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white/60 text-sm transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
