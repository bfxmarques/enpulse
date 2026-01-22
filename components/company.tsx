"use client"

import React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Rocket, Shield, Clock, Award, Users } from "lucide-react"

const historyTimeline = [
  {
    year: "1994",
    title: "Fundação",
    description:
      "Nasce em Sorocaba - SP a Petrosul, companhia genuinamente brasileira focada no setor energético.",
  },
  {
    year: "2015",
    title: "Nova Jornada",
    description:
      "Início das operações como Terminal de Armazenamento de Combustíveis, expandindo nossa atuação no mercado.",
  },
  {
    year: "2020",
    title: "Expansão",
    description:
      "Consolidação das operações em Paulínia e Senador Canedo, ampliando nossa presença nacional.",
  },
  {
    year: "2026",
    title: "Enpulse Energia",
    description:
      "Transformação em Enpulse Energia, uma marca que reflete nossa essência e visão de futuro.",
  },
]

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Oferecer soluções de armazenamento energético com excelência operacional, segurança e compromisso com nossos clientes e parceiros.",
  },
  {
    icon: Rocket,
    title: "Visão",
    description:
      "Ser referência nacional em armazenamento e logística de combustíveis, contribuindo para o desenvolvimento sustentável do setor energético brasileiro.",
  },
  {
    icon: Shield,
    title: "Valores",
    description:
      "Integridade, segurança, excelência operacional, inovação contínua e responsabilidade socioambiental em todas as nossas operações.",
  },
]

const stats = [
  { icon: Clock, value: "30+", label: "Anos de Experiência" },
  { icon: Award, value: "2", label: "Terminais Operacionais" },
  { icon: Users, value: "100+", label: "Colaboradores" },
]

function AnimatedCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export function CompanySection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="empresa"
      ref={sectionRef}
      className="relative py-24 bg-[#0F2847]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
          className="w-full h-full"
        />
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
            Sobre Nós
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Nossa História e Valores
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto text-pretty">
            Mais de três décadas de compromisso com a excelência em armazenamento
            energético no Brasil.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <AnimatedCard key={stat.label} delay={index * 0.1}>
              <div className="bg-[#0A1628]/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/5 hover:border-[#00D26A]/30 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#00D26A]/10 flex items-center justify-center group-hover:bg-[#00D26A]/20 transition-colors">
                  <stat.icon className="w-7 h-7 text-[#00D26A]" />
                </div>
                <p className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold text-white mb-10 text-center"
          >
            Nossa Trajetória
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D26A]/50 via-[#00D26A]/20 to-transparent" />

            <div className="space-y-8 md:space-y-0">
              {historyTimeline.map((item, index) => (
                <AnimatedCard key={item.year} delay={0.1 + index * 0.15}>
                  <div
                    className={`relative md:flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className="md:w-1/2 p-4">
                      <div
                        className={`bg-[#0A1628] rounded-2xl p-6 border border-white/5 hover:border-[#00D26A]/30 transition-all duration-300 hover:-translate-y-1 ${
                          index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                        }`}
                      >
                        <span className="text-[#00D26A] font-bold text-2xl">
                          {item.year}
                        </span>
                        <h4 className="text-white font-semibold text-xl mt-2 mb-3">
                          {item.title}
                        </h4>
                        <p className="text-white/60 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00D26A] border-4 border-[#0F2847]" />

                    {/* Empty space for other side */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-bold text-white mb-10 text-center"
          >
            Missão, Visão e Valores
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <AnimatedCard key={value.title} delay={0.2 + index * 0.15}>
                <div className="bg-[#0A1628] rounded-2xl p-8 border border-white/5 hover:border-[#00D26A]/30 transition-all duration-300 hover:-translate-y-2 group h-full">
                  <div className="w-16 h-16 mb-6 rounded-xl bg-[#00D26A]/10 flex items-center justify-center group-hover:bg-[#00D26A]/20 transition-colors">
                    <value.icon className="w-8 h-8 text-[#00D26A]" />
                  </div>
                  <h4 className="text-white font-bold text-xl mb-4">
                    {value.title}
                  </h4>
                  <p className="text-white/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
