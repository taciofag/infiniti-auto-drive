import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Truck, Users, Shield } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: DollarSign,
      title: "Preço Competitivo",
      description: "Os melhores preços do mercado com parcelamento em até 12x no cartão"
    },
    {
      icon: Truck,
      title: "Envio Rápido",
      description: "Entrega expressa em toda região metropolitana e interior"
    },
    {
      icon: Users,
      title: "Atendimento Especialista",
      description: "Equipe técnica especializada para ajudar você a encontrar a peça certa"
    },
    {
      icon: Shield,
      title: "Garantia & NF",
      description: "Todas as peças com garantia e nota fiscal para sua segurança"
    }
  ];

  return (
    <section id="diferenciais" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a Infiniti Auto Peças?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tradição, qualidade e confiança em cada atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-soft transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;