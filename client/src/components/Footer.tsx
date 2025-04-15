import { Link } from "wouter";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background py-10 border-t border-border">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-foreground font-semibold text-lg mb-2">Luca Magugliani</div>
            <p className="text-muted-foreground text-sm max-w-md">
              IT System Specialist con esperienza nella gestione di infrastrutture IT, 
              sicurezza aziendale e supporto tecnico. Sempre alla ricerca di nuove sfide.
            </p>
            
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/lucamagugliani/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="mailto:lucamogu7@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-foreground font-medium mb-3">Naviga</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/#home">
                <span className="text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer text-sm">Home</span>
              </Link>
              <Link href="/#cv">
                <span className="text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer text-sm">CV</span>
              </Link>
              <Link href="/#contatti">
                <span className="text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer text-sm">Contatti</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-foreground font-medium mb-3">Contatti</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <p className="text-muted-foreground">Email: <a href="mailto:lucamogu7@gmail.com" className="text-primary hover:underline">lucamogu7@gmail.com</a></p>
              <p className="text-muted-foreground">Tel: <a href="tel:+393464121135" className="text-primary hover:underline">+39 346 412 1135</a></p>
              <p className="text-muted-foreground">Abbiategrasso, Milano, Italia</p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Luca Magugliani. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
