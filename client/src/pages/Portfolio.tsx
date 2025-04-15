import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SocialNetwork con Angular & Spring Boot",
    description: "Progetto personale sviluppato durante il tirocinio presso SCAI Consulting. Un social network che utilizza tecnologie moderne come Angular, Spring Boot e API di Covid19.",
    tags: ["Angular", "Spring Boot", "API"]
  },
  {
    id: 2,
    title: "Sistema di Monitoraggio Sicurezza",
    description: "Implementazione di un sistema di monitoraggio sicurezza aziendale con Darktrace. Configurazione e analisi di report di sicurezza.",
    tags: ["Darktrace", "Cybersecurity", "Analisi"]
  },
  {
    id: 3,
    title: "Gestione Infrastruttura Cloud",
    description: "Progetto di configurazione e gestione di soluzioni cloud aziendali. Implementazione di backup, gestione utenti e sicurezza.",
    tags: ["AWS", "Cloud", "Microsoft 365"]
  }
];

export default function Portfolio() {
  return (
    <div className="py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Torna alla Home
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-foreground">Portfolio Progetti</h1>
            <p className="text-muted-foreground mt-2">Tutti i miei progetti e lavori recenti</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="card bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-border"
              >
                <div className="h-48 bg-muted"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-secondary text-xs rounded-md">{tag}</span>
                    ))}
                  </div>
                  <a href="#" className="text-primary hover:underline inline-flex items-center">
                    Dettagli
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
