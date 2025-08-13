import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5561984014374?text=Olá, quero um orçamento de peça", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/74083186-53b0-4c1d-a355-b8141d54cd29.png" 
            alt="Infiniti Auto Peças" 
            className="h-10 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection("categorias")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Categorias
          </button>
          <button 
            onClick={() => scrollToSection("diferenciais")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Por que nós
          </button>
          <button 
            onClick={() => scrollToSection("depoimentos")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Depoimentos
          </button>
          <button 
            onClick={() => scrollToSection("contato")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contato
          </button>
        </nav>

        <Button 
          onClick={handleWhatsAppClick}
          className="bg-gradient-whatsapp hover:bg-whatsapp text-whatsapp-foreground shadow-whatsapp font-semibold"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Pedir Orçamento
        </Button>
      </div>
    </header>
  );
};

export default Header;