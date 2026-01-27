import { CheckCircle, Shield, Award, Users } from "lucide-react";
import terminalImage from "@/assets/terminal-aerial.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Confiança",
      description: "Mais de 30 anos de história no setor de combustíveis brasileiro.",
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Combustível de procedência garantida e certificado.",
    },
    {
      icon: Users,
      title: "Atendimento",
      description: "Equipe treinada e preparada para atender motoristas e frotas.",
    },
  ];

  const highlights = [
    "Fundada em 1994 em Sorocaba, SP",
    "Mais de 30 anos de experiência",
    "Terminais em Senador Canedo e Paulínia",
    "Capacidade de armazenamento de 24.000m³",
  ];

  return (
    <section id="sobre" className="section-padding bg-muted/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Nossa História
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            De Petrosul a <span className="text-primary">Enpulse</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma nova marca para uma empresa com tradição. Mantemos nosso compromisso 
            com a qualidade e segurança que construímos ao longo de décadas.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={terminalImage}
              alt="Terminal de combustíveis Enpulse"
              className="w-full h-80 lg:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-background/95 backdrop-blur-sm rounded-xl p-4">
                <p className="font-display text-lg font-bold text-foreground">Terminal Enpulse</p>
                <p className="text-sm text-muted-foreground">Infraestrutura moderna e segura</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">
              Uma empresa genuinamente brasileira
            </h3>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Nascemos em 1994, em Sorocaba-SP, como Petrosul, uma companhia genuinamente brasileira. 
                Após 21 anos de história, em 2015 iniciamos uma nova jornada nos negócios, 
                expandindo nossas operações como Terminal de Armazenamento de Combustíveis.
              </p>
              <p>
                Embasada em valores como ética, integridade, qualidade, responsabilidade e comprometimento, 
                somos hoje uma das mais importantes empresas do setor de combustíveis do país.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display text-xl text-foreground mb-3">{value.title}</h4>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
