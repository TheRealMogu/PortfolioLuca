import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [location] = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;
      
      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") || "";
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavLinkClass = (section: string) => {
    const baseClass = "nav-link text-foreground hover:text-primary transition-colors duration-200";
    return activeSection === section ? `${baseClass} active-nav` : baseClass;
  };

  return (
    <header className="fixed w-full bg-background/90 backdrop-blur-md z-50 transition-colors duration-300 border-b border-border/30">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-foreground font-semibold text-xl">
            <Link href="/">
              Luca Magugliani
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {location === "/" ? (
                <>
                  <a href="#home" className={getNavLinkClass("home")}>Home</a>
                  <a href="#cv" className={getNavLinkClass("cv")}>CV</a>
                  <a href="#contatti" className={getNavLinkClass("contatti")}>Contatti</a>
                </>
              ) : (
                <>
                  <Link href="/#home">
                    <span className={`${getNavLinkClass("home")} cursor-pointer`}>Home</span>
                  </Link>
                  <Link href="/#cv">
                    <span className={`${getNavLinkClass("cv")} cursor-pointer`}>CV</span>
                  </Link>
                  <Link href="/#contatti">
                    <span className={`${getNavLinkClass("contatti")} cursor-pointer`}>Contatti</span>
                  </Link>
                </>
              )}
            </nav>
            
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
