import { Card, CardContent } from "@/components/ui/card";
import headlightsImage from "@/assets/headlights.jpg";
import taillightsImage from "@/assets/taillights.jpg";
import bumpersImage from "@/assets/bumpers.jpg";
import hoodsImage from "@/assets/hoods.jpg";

const Categories = () => {
  const categories = [
    {
      name: "Faróis",
      image: headlightsImage,
      description: "Faróis dianteiros novos e usados"
    },
    {
      name: "Lanternas",
      image: taillightsImage,
      description: "Lanternas traseiras de todos os modelos"
    },
    {
      name: "Para-choques",
      image: bumpersImage,
      description: "Para-choques dianteiros e traseiros"
    },
    {
      name: "Capôs",
      image: hoodsImage,
      description: "Capôs e peças da carroceria"
    }
  ];

  const handleWhatsAppClick = (category: string) => {
    window.open(`https://wa.me/553573050568?text=Olá, quero um orçamento de ${category}`, "_blank");
  };

  return (
    <section id="categorias" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossas Categorias
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontre a peça que você precisa em nosso catálogo completo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="group cursor-pointer hover:shadow-primary transition-all duration-300 hover:-translate-y-2"
              onClick={() => handleWhatsAppClick(category.name)}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <div className="text-primary font-medium group-hover:underline">
                  Ver mais →
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;