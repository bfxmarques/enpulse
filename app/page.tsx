import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero"
import { CompanySection } from "@/components/company"
import { TerminalsSection } from "@/components/terminals"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Header />
      <HeroSection />
      <CompanySection />
      <TerminalsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
