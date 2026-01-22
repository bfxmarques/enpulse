import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Enpulse Energia | Armazenamento Energético',
  description: 'Enpulse Energia - Uma das maiores empresas de armazenamento energético do Brasil. Excelência em operações de terminais de combustíveis.',
  keywords: ['Enpulse', 'Energia', 'Armazenamento', 'Combustíveis', 'Terminal', 'Paulínia', 'Senador Canedo'],
}

export const viewport: Viewport = {
  themeColor: '#0A1628',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
