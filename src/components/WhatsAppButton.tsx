import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/553573050568?text=Olá, quero um orçamento de peça", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground p-4 rounded-full shadow-lg animate-bounce-slow hover:animate-none transition-all duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;