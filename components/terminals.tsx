"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Droplets, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const terminals = [
  {
    name: "Terminal Paulínia",
    location: "Paulínia - São Paulo",
    description:
      "Localizado estrategicamente no maior polo petroquímico da América Latina, nosso terminal em Paulínia oferece infraestrutura de ponta para armazenamento e distribuição de combustíveis, atendendo às principais demandas do Sudeste brasileiro.",
    features: [
      "Localização estratégica no polo petroquímico",
      "Alta capacidade de armazenamento",
      "Infraestrutura moderna e segura",
      "Logística integrada",
    ],
    image: "/terminal-paulinia.jpg",
  },
  {
    name: "Terminal Senador Canedo",
    location: "Senador Canedo - Goiás",
    description:
      "Situado no coração do Centro-Oeste, o terminal de Senador Canedo é peça fundamental na logística energética da região, garantindo abastecimento eficiente para os estados do interior do Brasil.",
    features: [
      "Hub logístico do Centro-Oeste",
      "Operações 24 horas",
      "Tecnologia de ponta",
      "Expansão contínua",
    ],
    image: "/terminal-senador-canedo.jpg",
  },
]

function TerminalCard({
  terminal,
  index,
}: {
  terminal: (typeof terminals)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      <div className="bg-[#0F2847] rounded-3xl overflow-hidden border border-white/5 hover:border-[#00D26A]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00D26A]/10">
        {/* Image Placeholder */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] to-[#0F2847]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#00D26A]/10 flex items-center justify-center border border-[#00D26A]/30 group-hover:scale-110 transition-transform duration-500">
                  <Droplets className="w-10 h-10 text-[#00D26A]" />
                </div>
                <p className="text-white/40 text-sm">Terminal Operacional</p>
              </div>
            </div>
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2847] via-transparent to-transparent" />

          {/* Location Badge */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0A1628]/80 backdrop-blur-sm rounded-full border border-white/10">
              <MapPin className="w-4 h-4 text-[#00D26A]" />
              <span className="text-white/80 text-sm">{terminal.location}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00D26A] transition-colors">
            {terminal.name}
          </h3>
          <p className="text-white/60 leading-relaxed mb-6">
            {terminal.description}
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {terminal.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00D26A]" />
                <span className="text-white/70 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button
            variant="outline"
            className="w-full border-[#00D26A]/50 text-[#00D26A] hover:bg-[#00D26A] hover:text-[#0A1628] transition-all duration-300 group/btn bg-transparent"
          >
            <span>Saiba Mais</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export function TerminalsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="bases" ref={sectionRef} className="relative py-24 bg-[#0A1628]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00D26A]/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#0F2847]/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#00D26A]/10 border border-[#00D26A]/30 rounded-full text-[#00D26A] text-sm font-medium mb-4">
            Infraestrutura
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Nossas Bases Operacionais
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto text-pretty">
            Terminais estrategicamente localizados para garantir eficiência e
            abrangência nacional em armazenamento energético.
          </p>
        </motion.div>

        {/* Map Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0F2847]/50 rounded-3xl p-8 mb-16 border border-white/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#00D26A]/10 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-[#00D26A]" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">
                  Presença Estratégica
                </p>
                <p className="text-white/60 text-sm">
                  Cobertura nos principais polos energéticos
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#00D26A]" />
                <span className="text-white/70 text-sm">Sudeste - Paulínia</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#00D26A]" />
                <span className="text-white/70 text-sm">
                  Centro-Oeste - Senador Canedo
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Terminal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {terminals.map((terminal, index) => (
            <TerminalCard key={terminal.name} terminal={terminal} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
