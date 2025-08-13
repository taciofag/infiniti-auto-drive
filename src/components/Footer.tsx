const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/74083186-53b0-4c1d-a355-b8141d54cd29.png" 
              alt="Infiniti Auto Peças" 
              className="h-8 w-auto mb-2"
            />
            <p className="text-sm text-background/80">
              © 2024 Infiniti Auto Peças. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-background/80 hover:text-background transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-background/80 hover:text-background transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;