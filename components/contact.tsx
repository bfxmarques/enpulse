"use client"

import React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(18) 3833-5280",
    href: "tel:+551838335280",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@enpulseenergia.com.br",
    href: "mailto:contato@enpulseenergia.com.br",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Paulínia, São Paulo - Brasil",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg - Sex: 08h às 18h",
    href: "#",
  },
]

export function ContactSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section
      id="contato"
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
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Fale Conosco
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto text-pretty">
            Entre em contato conosco para saber mais sobre nossos serviços de
            armazenamento energético.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#0A1628] rounded-3xl p-8 border border-white/5">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#00D26A]/20 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-[#00D26A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-white/60">
                    Obrigado pelo contato. Retornaremos em breve.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 bg-[#00D26A] hover:bg-[#00B85C] text-[#0A1628]"
                  >
                    Enviar Nova Mensagem
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-white/80 text-sm font-medium"
                      >
                        Nome
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Seu nome"
                        className="bg-[#0F2847] border-white/10 text-white placeholder:text-white/40 focus:border-[#00D26A] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-white/80 text-sm font-medium"
                      >
                        E-mail
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                        className="bg-[#0F2847] border-white/10 text-white placeholder:text-white/40 focus:border-[#00D26A] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-white/80 text-sm font-medium"
                    >
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="Assunto da mensagem"
                      className="bg-[#0F2847] border-white/10 text-white placeholder:text-white/40 focus:border-[#00D26A] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-white/80 text-sm font-medium"
                    >
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Sua mensagem..."
                      className="bg-[#0F2847] border-white/10 text-white placeholder:text-white/40 focus:border-[#00D26A] transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#00D26A] hover:bg-[#00B85C] text-[#0A1628] font-semibold py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#00D26A]/25 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Enviar Mensagem
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-[#0A1628] rounded-3xl p-8 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#0F2847] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#00D26A]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D26A]/20 transition-colors">
                      <info.icon className="w-6 h-6 text-[#00D26A]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-[#00D26A] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-[#00D26A]/20 to-[#00D26A]/5 rounded-3xl p-8 border border-[#00D26A]/20"
            >
              <h4 className="text-white font-bold text-lg mb-3">
                Área do Cliente
              </h4>
              <p className="text-white/70 mb-6">
                Acesse nossa área exclusiva para clientes e parceiros comerciais.
              </p>
              <Button className="w-full bg-[#00D26A] hover:bg-[#00B85C] text-[#0A1628] font-semibold">
                Acessar Portal
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
