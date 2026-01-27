import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Infraestrutura", href: "#infraestrutura" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="section-container">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:+551532378700" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>(15) 3237-8700</span>
              </a>
              <a href="mailto:contato@enpulse.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>contato@enpulse.com.br</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Seg a Sex: 8:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">E</span>
              </div>
              <span className="font-display text-2xl font-bold text-foreground">
                Enpulse
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-foreground/80 hover:text-primary font-medium transition-colors rounded-md hover:bg-accent"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button onClick={() => scrollToSection("#contato")} size="lg">
                Fale Conosco
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <div className="section-container py-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="px-4 py-3 text-left text-foreground/80 hover:text-primary font-medium transition-colors rounded-md hover:bg-accent"
                  >
                    {item.label}
                  </button>
                ))}
                <Button onClick={() => scrollToSection("#contato")} className="mt-2" size="lg">
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
