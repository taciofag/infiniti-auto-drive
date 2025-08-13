import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Shield, CreditCard } from "lucide-react";
import heroImage from "@/assets/hero-auto-parts.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/553573050568?text=Olá, quero um orçamento de peça", "_blank");
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Peças automotivas <span className="text-primary">novas e usadas</span> com entrega rápida
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Encontre a peça que você precisa com garantia, nota fiscal e os melhores preços do mercado. 
                Atendimento especializado e entrega rápida em toda região.
              </p>
            </div>

            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Buscar peças (ex: farol, lanterna...)"
                className="pl-10 h-12 text-lg"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2 text-sm font-medium">
                <Shield className="w-5 h-5 text-primary" />
                <span>Garantia & Nota Fiscal</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium">
                <CreditCard className="w-5 h-5 text-primary" />
                <span>Até 12x no cartão</span>
              </div>
            </div>

            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-gradient-whatsapp hover:bg-whatsapp text-whatsapp-foreground shadow-whatsapp text-lg px-8 py-6 font-semibold"
            >
              🚀 SOLICITAR ORÇAMENTO COM ESPECIALISTA
            </Button>
          </div>

          <div className="relative">
            <img 
              src={heroImage} 
              alt="Peças automotivas de qualidade" 
              className="w-full h-auto rounded-lg shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;