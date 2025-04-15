import { Button } from "@/components/ui/button";
import { ChevronRight, Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center pt-24 section-transition">
        <div className="container mx-auto px-6 py-16 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
              Luca Magugliani
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              IT System Specialist
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Specialista IT con esperienza nella gestione e manutenzione di infrastrutture IT, 
              sicurezza aziendale e supporto tecnico. Appassionato di tecnologia e sempre 
              pronto ad affrontare nuove sfide.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a href="#cv" className="btn-primary">
                Guarda il CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="section py-20 md:py-28 section-transition">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Curriculum Vitae</h2>
                <p className="text-muted-foreground max-w-2xl">
                  La mia esperienza professionale, istruzione e competenze tecniche
                </p>
              </div>
              <Button 
                className="btn-primary"
                asChild
              >
                <a href="/Luca_CV.pdf" download>
                  <Download className="h-5 w-5 mr-2" />
                  Scarica CV
                </a>
              </Button>
            </div>
            
            {/* Esperienze Lavorative */}
            <div className="mb-16 text-left">
              <h3 className="text-2xl font-semibold mb-6 text-foreground border-b border-border pb-2">Esperienza Lavorativa</h3>
              
              <div className="space-y-10">
                <div className="relative pl-8 border-l border-border">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="text-xl font-medium text-foreground">IT System Specialist</h4>
                  <p className="text-muted-foreground mb-2">SIT S.P.A. - Luglio 2022 - Attuale</p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">Gestione helpdesk primo e secondo livello per oltre 100 utenti, con riduzione del 20% dei tempi di risoluzione dei ticket</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">Configurazione e amministrazione di firewall Fortinet, migliorando la sicurezza della rete aziendale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">Implementazione sistema di monitoraggio con Darktrace, prevenendo potenziali attacchi informatici</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">Ottimizzazione delle procedure di backup con Veeam, riducendo del 30% i tempi di ripristino</span>
                    </li>
                  </ul>
                </div>
                
                <div className="relative pl-8 border-l border-border">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="text-xl font-medium text-foreground">IT System Administrator</h4>
                  <p className="text-muted-foreground mb-2">CLEVERMIND - Novembre 2021 - Giugno 2022</p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">Gestione e configurazione di 20+ server Windows 2016 e infrastrutture virtuali con ESXi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">Creazione e implementazione di procedure di sicurezza per proteggere dati sensibili</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">Supporto tecnico agli utenti con risoluzione tempestiva delle problematiche</span>
                    </li>
                  </ul>
                </div>
                
                <div className="relative pl-8 border-l border-border">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="text-xl font-medium text-foreground">Collaborazione</h4>
                  <p className="text-muted-foreground mb-2">DIGITALNOLOGY - Dicembre 2020 - Novembre 2021</p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">Sviluppo di interfacce frontend con Angular e React per applicazioni web aziendali</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">Partecipazione allo sviluppo di 3 progetti aziendali con un focus su usabilità e performance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Competenze */}
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-6 text-foreground border-b border-border pb-2">Competenze</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="mb-8">
                    <h4 className="text-xl font-medium mb-4 text-foreground">Sistemi Operativi</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground">Windows Server</span>
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-foreground">Windows 10/11</span>
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-foreground">Linux</span>
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-foreground">macOS</span>
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-medium mb-4 text-foreground">Cloud & Sicurezza</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground">Microsoft 365</span>
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-foreground">Firewall Fortinet</span>
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-foreground">Darktrace</span>
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-foreground">Veeam</span>
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-8">
                    <h4 className="text-xl font-medium mb-4 text-foreground">Sviluppo Web</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground">HTML/CSS</span>
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-foreground">JavaScript</span>
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-foreground">Angular/React</span>
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-foreground">Java</span>
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-medium mb-4 text-foreground">Linguistiche</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground">Italiano</span>
                        <span className="text-muted-foreground text-sm">Madrelingua</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 mb-3">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    
                      <div className="flex items-center justify-between">
                        <span className="text-foreground">Inglese</span>
                        <span className="text-muted-foreground text-sm">B2</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 mb-3">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    
                      <div className="flex items-center justify-between">
                        <span className="text-foreground">Spagnolo</span>
                        <span className="text-muted-foreground text-sm">B1</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <a href="/cv" className="btn-outline">
                  CV completo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" className="bg-secondary section py-20 md:py-28 section-transition">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Contatti</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sei interessato al mio profilo? Non esitare a contattarmi!
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Informazioni di Contatto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="text-foreground font-medium">Email</p>
                    <a href="mailto:lucamogu7@gmail.com" className="text-primary hover:underline">lucamogu7@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="text-foreground font-medium">Telefono</p>
                    <a href="tel:+393464121135" className="text-primary hover:underline">+39 346 412 1135</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="text-foreground font-medium">Località</p>
                    <p className="text-muted-foreground">Abbiategrasso, Milano, Italia</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border">
                  <p className="text-foreground font-medium mb-4">Social</p>
                  <div className="flex space-x-5">
                    <a href="https://www.linkedin.com/in/lucamagugliani/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      <Github className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-border">
                <h4 className="text-xl font-medium mb-5 text-foreground">Orari Disponibilità</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lunedì - Venerdì</span>
                    <span className="text-foreground font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sabato - Domenica</span>
                    <span className="text-foreground font-medium">Su appuntamento</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}