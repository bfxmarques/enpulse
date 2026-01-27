import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nome: "", telefone: "", email: "", mensagem: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(15) 3237-8700",
      href: "tel:+551532378700",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@enpulse.com.br",
      href: "mailto:contato@enpulse.com.br",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Sorocaba, SP",
      href: null,
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Seg a Sex: 8:00 - 18:00",
      href: null,
    },
  ];

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Fale <span className="text-primary">conosco</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem alguma dúvida ou precisa de mais informações? 
            Entre em contato que nossa equipe terá prazer em ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="font-display text-2xl text-foreground mb-6">Envie uma mensagem</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-display text-xl text-foreground mb-2">Mensagem enviada!</h4>
                <p className="text-muted-foreground">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      maxLength={100}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={formData.telefone}
                      onChange={handleChange}
                      maxLength={20}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Como podemos ajudar?"
                    rows={5}
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    maxLength={1000}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensagem
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl text-foreground mb-6">Informações de contato</h3>
            <p className="text-muted-foreground mb-8">
              Prefere falar diretamente conosco? Use um dos canais abaixo para 
              entrar em contato com nossa equipe.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-muted/50 rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-xl overflow-hidden border border-border bg-muted/30 h-48 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Mapa em breve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
