import { useState } from "react";
import { Link, useLocation } from "wouter";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function MobileNavigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <header className="fixed w-full bg-background/90 backdrop-blur-md z-50 transition-colors duration-300 border-b border-border/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-foreground font-semibold text-xl">
              <Link href="/">
                Luca Magugliani
              </Link>
            </div>
            
            <button 
              aria-label="Toggle menu"
              onClick={toggleMenu} 
              className="p-2 text-foreground rounded-md"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className={`pt-4 pb-2 ${isOpen ? 'block' : 'hidden'}`}>
            <nav className="flex flex-col space-y-4">
              {location === "/" ? (
                <>
                  <a 
                    href="#home" 
                    className="text-foreground hover:text-primary transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    Home
                  </a>
                  <a 
                    href="#cv" 
                    className="text-foreground hover:text-primary transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    CV
                  </a>
                  <a 
                    href="#contatti" 
                    className="text-foreground hover:text-primary transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    Contatti
                  </a>
                </>
              ) : (
                <>
                  <Link href="/#home">
                    <span 
                      className="text-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                      onClick={closeMenu}
                    >
                      Home
                    </span>
                  </Link>
                  <Link href="/#cv">
                    <span 
                      className="text-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                      onClick={closeMenu}
                    >
                      CV
                    </span>
                  </Link>
                  <Link href="/#contatti">
                    <span 
                      className="text-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                      onClick={closeMenu}
                    >
                      Contatti
                    </span>
                  </Link>
                </>
              )}
              
              <div className="pt-2">
                <ThemeToggle mobile={true} />
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
