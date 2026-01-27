import { Phone, Mail, MapPin, Clock, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
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
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="section-container section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">E</span>
              </div>
              <span className="font-display text-2xl font-bold">Enpulse</span>
            </div>
            <p className="text-secondary-foreground/70 mb-6">
              Combustível com confiança. Postos de qualidade para quem 
              precisa rodar com segurança.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+551532378700"
                  className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(15) 3237-8700</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@enpulse.com.br"
                  className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>contato@enpulse.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Sorocaba, SP</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg mb-6">Horário (Matriz)</h4>
            <div className="flex items-start gap-3 text-secondary-foreground/70">
              <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p>Segunda a Sexta</p>
                <p className="text-secondary-foreground font-medium">8:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/60">
            <p>© {currentYear} Enpulse. Todos os direitos reservados.</p>
            <p>Anteriormente Petrosul</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
