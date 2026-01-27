import { MapPin, Clock, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Infrastructure = () => {
  const locations = [
    {
      name: "Posto Matriz",
      city: "Sorocaba, SP",
      description: "Nossa sede principal, com estrutura completa para abastecimento de veículos e caminhões.",
      features: [
        "Abastecimento 24 horas",
        "Loja de conveniência",
        "Área para caminhões",
        "Troca de óleo",
      ],
      hours: "Seg a Sex: 8:00 - 18:00",
      address: "Av. Engenheiro Carlos Reinaldo Mendes, Sorocaba - SP",
    },
    {
      name: "Terminal Senador Canedo",
      city: "Senador Canedo, GO",
      description: "Terminal com capacidade de armazenamento de 12.000m³ e infraestrutura completa.",
      features: [
        "06 tanques de armazenamento",
        "Carregamento em 40 minutos",
        "Portaria 24 horas",
        "Estacionamento para 50 caminhões",
      ],
      hours: "Seg a Sex: 6:00 - 20:00 | Sáb: 6:00 - 13:00",
      address: "Av. Tropical S/N, Distrito Industrial - Senador Canedo, GO",
    },
    {
      name: "Terminal Paulínia",
      city: "Paulínia, SP",
      description: "Terminal conectado à REPLAN, maior refinaria do país, com 12.000m³ de capacidade.",
      features: [
        "07 tanques de armazenamento",
        "Dutos dedicados à REPLAN",
        "Unidade de Recuperação de Vapores",
        "Movimentação de 70.000m³/mês",
      ],
      hours: "Seg a Sex: 6:00 - 19:00 | Sáb: 6:00 - 12:00",
      address: "Av. Sidnei Cardon de Oliveira, 1723 - Paulínia, SP",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="infraestrutura" className="section-padding bg-muted/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Infraestrutura
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Nossas <span className="text-primary">localizações</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estrutura estrategicamente posicionada para atender todo o território nacional 
            com eficiência e agilidade.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border group"
            >
              {/* Card Header */}
              <div className="bg-secondary p-6">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-medium">{location.city}</span>
                </div>
                <h3 className="font-display text-xl text-secondary-foreground">{location.name}</h3>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6">{location.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {location.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Info */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex items-start gap-3 text-sm">
                    <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{location.hours}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{location.address}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button onClick={scrollToContact} size="lg">
            Entre em contato
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
