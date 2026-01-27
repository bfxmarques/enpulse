import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-fuel-station.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-32 lg:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Posto de combustíveis Enpulse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="max-w-2xl">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              Nova marca, mesma confiança
            </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Enpulse —{" "}
            <span className="text-primary">combustível</span>{" "}
            com confiança.
          </h1>
          
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Abastecimento de qualidade para quem precisa rodar com segurança. 
            Postos modernos, atendimento diferenciado e combustível de procedência garantida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("#sobre")}
            >
              Conheça a Enpulse
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={() => scrollToSection("#contato")}
            >
              Fale conosco
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
