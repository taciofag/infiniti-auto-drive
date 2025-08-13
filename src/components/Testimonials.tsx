import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      text: "Excelente atendimento! Encontrei a peça que precisava rapidamente e com ótimo preço. Recomendo!",
      rating: 5
    },
    {
      name: "Maria Santos",
      text: "Muito profissionais. A peça chegou rápido e exatamente como descrito. Já virei cliente!",
      rating: 5
    },
    {
      name: "José Oliveira",
      text: "Atendimento nota 10! Me ajudaram a encontrar uma peça difícil e ainda parcelaram. Muito bom!",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confiança construída dia a dia com qualidade e bom atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-soft transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;