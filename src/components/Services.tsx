import { Fuel, Truck, Building2, Wrench } from "lucide-react";
import stationImage from "@/assets/station-pumps.jpg";

const Services = () => {
  const services = [
    {
      icon: Fuel,
      title: "Postos de Combustíveis",
      description: "Gasolina e diesel de alta qualidade, com procedência garantida e certificação.",
      features: ["Gasolina comum e aditivada", "Diesel S-10 e S-500", "Controle de qualidade rigoroso"],
    },
    {
      icon: Truck,
      title: "Abastecimento para Caminhões",
      description: "Estrutura preparada para receber veículos pesados com agilidade e segurança.",
      features: ["Bombas de alta vazão", "Áreas amplas de manobra", "Atendimento 24 horas"],
    },
    {
      icon: Building2,
      title: "Atendimento a Frotas",
      description: "Soluções personalizadas para empresas com frota própria.",
      features: ["Controle de abastecimento", "Relatórios gerenciais", "Condições especiais"],
    },
    {
      icon: Wrench,
      title: "Estrutura e Conveniência",
      description: "Instalações modernas com todos os serviços que você precisa.",
      features: ["Loja de conveniência", "Banheiros limpos", "Área de descanso"],
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Combustível e <span className="text-primary">atendimento</span> de qualidade
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos estrutura completa para motoristas, caminhoneiros e empresas 
            que precisam de confiança no abastecimento.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Image */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={stationImage}
            alt="Bombas de combustível modernas"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
            <div className="section-container">
              <div className="max-w-xl">
                <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-4">
                  Qualidade que você pode confiar
                </h3>
                <p className="text-primary-foreground/90">
                  Todos os nossos postos seguem rigorosos padrões de qualidade e segurança, 
                  garantindo o melhor combustível para o seu veículo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
