"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToNextSection = () => {
    const element = document.querySelector("#empresa")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00D26A]/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#0F2847] via-transparent to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-[#00D26A]/10 border border-[#00D26A]/30 rounded-full text-[#00D26A] text-sm font-medium">
                Nova Identidade
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00D26A] mb-6 leading-tight text-balance"
            >
              AGORA SOMOS ENPULSE ENERGIA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed text-pretty"
            >
              Uma longa história de trabalho e evolução nos trouxe até aqui e a
              energia do presente nos levará além.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4 text-white/70 text-base leading-relaxed"
            >
              <p>
                A Petrosul Energia transformou-se em Enpulse Energia, uma marca
                que reflete nossa essência: energia, inovação e compromisso com
                o futuro energético do Brasil.
              </p>
              <p>
                Com mais de três décadas de experiência, continuamos nossa
                missão de excelência em armazenamento energético, agora com uma
                identidade que representa nossa visão de futuro.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10"
            >
              <button
                onClick={scrollToNextSection}
                className="inline-flex items-center gap-2 text-[#00D26A] hover:text-white transition-colors duration-300 group"
                type="button"
              >
                <span className="font-medium">Conheça nossa história</span>
                <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F2847] to-[#0A1628] rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#00D26A]/20 flex items-center justify-center border-2 border-[#00D26A]/40">
                    <svg
                      className="w-16 h-16 text-[#00D26A]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <p className="text-white/60 text-lg font-medium">
                    Presença Nacional
                  </p>
                  <p className="text-[#00D26A] text-3xl font-bold mt-2">
                    2 Terminais
                  </p>
                  <p className="text-white/40 text-sm mt-1">
                    Paulínia - SP | Senador Canedo - GO
                  </p>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00D26A]/50 via-transparent to-[#00D26A]/50 rounded-2xl blur-sm opacity-50" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 pt-10 border-t border-white/10"
        >
          <p className="text-center text-white/60 text-lg font-medium tracking-wide">
            SOMOS ENPULSE ENERGIA -{" "}
            <span className="text-[#00D26A]">
              UMA DAS MAIORES EMPRESAS DE ARMAZENAMENTO ENERGÉTICO DO BRASIL
            </span>
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-[#00D26A] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
