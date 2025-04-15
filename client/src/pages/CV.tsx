import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Download } from "lucide-react";

export default function CV() {
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
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-foreground">Curriculum Vitae</h1>
              <Button 
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-xl"
                asChild
              >
                <a href="/Luca_CV.pdf" download>
                  <Download className="h-5 w-5 mr-2" />
                  Scarica CV
                </a>
              </Button>
            </div>
          </div>
          
          {/* Dati Personali */}
          <div className="mb-8 bg-card p-6 rounded-xl border border-border">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Dati Personali</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Nome</p>
                <p className="text-foreground">Luca Magugliani</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Data di Nascita</p>
                <p className="text-foreground">05/10/1999</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href="mailto:lucamogu7@gmail.com" className="text-primary hover:underline">lucamogu7@gmail.com</a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Telefono</p>
                <a href="tel:+393464121135" className="text-primary hover:underline">+39 346 412 1135</a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Indirizzo</p>
                <p className="text-foreground">Via Mozart, 4, 20081, Abbiategrasso, Italia</p>
              </div>
            </div>
          </div>
          
          {/* Esperienze Lavorative */}
          <div className="mb-8 bg-card p-6 rounded-xl border border-border">
            <h2 className="text-xl font-semibold mb-4 text-foreground border-b border-border pb-2">Esperienza Lavorativa</h2>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l border-border">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <h4 className="text-lg font-medium text-foreground">IT System Specialist</h4>
                <p className="text-muted-foreground">SIT S.P.A. - MARCO TRIVELLATO | Luglio 2022 - Attuale</p>
                <p className="text-muted-foreground mb-2">Cusago, Italia</p>
                <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
                  <li>Gestione e manutenzione di infrastrutture IT con Windows Server 2008/2019</li>
                  <li>Configurazione e amministrazione di firewall Fortinet per la sicurezza aziendale</li>
                  <li>Supporto su Microsoft 365, Microsoft Entra</li>
                  <li>NAS Synology</li>
                  <li>Monitoraggio e analisi report di sicurezza con Darktrace</li>
                  <li>Implementazione e gestione di soluzioni antivirus con Panda Adaptive Defense 360</li>
                  <li>Configurazione e gestione di servizi di posta elettronica con Mdaemon e Mailstore Service</li>
                  <li>Backup e disaster recovery con Veeam</li>
                  <li>Gestione centralino telefonico OMC 820</li>
                  <li>Ticketing e gestione richieste IT tramite OTRS</li>
                  <li>Aggiornamenti e gestione patch tramite WSUS</li>
                  <li>Configurazione, manutenzione e troubleshooting di hardware PC Windows e stampanti/multifunzione</li>
                  <li>Amministrazione e supporto software per ambienti Windows, Apple e Linux</li>
                </ul>
              </div>
              
              <div className="relative pl-8 border-l border-border">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <h4 className="text-lg font-medium text-foreground">IT System Administrator</h4>
                <p className="text-muted-foreground">CLEVERMIND - ANDREA RADAELLI | Novembre 2021 - Giugno 2022</p>
                <p className="text-muted-foreground mb-2">Vigevano, Italia</p>
                <p className="text-muted-foreground mb-2">Contratto da stagista</p>
                <p className="text-muted-foreground">Utilizzato le seguenti tecnologie & servizi:</p>
                <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
                  <li>Atera</li>
                  <li>Kerio firewall</li>
                  <li>Microsoft 365</li>
                  <li>Register</li>
                  <li>NAS Synology</li>
                  <li>Server Windows 2016</li>
                  <li>ESXi</li>
                </ul>
              </div>
              
              <div className="relative pl-8 border-l border-border">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <h4 className="text-lg font-medium text-foreground">Collaborazione</h4>
                <p className="text-muted-foreground">DIGITALNOLOGY - KLAUS PINI | Dicembre 2020 - Novembre 2021</p>
                <p className="text-muted-foreground mb-2">Nova Milanese, Italia</p>
                <p className="text-muted-foreground">Contratto di collaborazione, con aiuto tecnologie di Frontend, Backend. Mansioni di aiuto anche nel reparto sistemistico.</p>
              </div>
              
              <div className="relative pl-8 border-l border-border">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <h4 className="text-lg font-medium text-foreground">Tirocinante</h4>
                <p className="text-muted-foreground">SCAI CONSULTING | Giugno 2020 - Agosto 2020</p>
                <p className="text-muted-foreground mb-2">Milano, Italia</p>
                <p className="text-muted-foreground">Creazione progetto personale di un SocialNetwork, utilizzando le tecnologie Angular, SpringBoot e Covid19-API</p>
              </div>
            </div>
          </div>
            
          {/* Istruzione */}
          <div className="mb-8 bg-card p-6 rounded-xl border border-border">
            <h2 className="text-xl font-semibold mb-4 text-foreground border-b border-border pb-2">Istruzione</h2>
              
            <div className="space-y-6">
              <div className="pl-8 relative border-l border-border">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <h4 className="text-lg font-medium text-foreground">Full Stack Developer</h4>
                <p className="text-muted-foreground">ITS Tech Talent Factory | Ottobre 2018 - Ottobre 2020</p>
                <p className="text-muted-foreground">Milano, Italia</p>
                <p className="text-muted-foreground mt-1">Votazione: 85/100</p>
                <p className="text-muted-foreground mt-2">Project management, linguaggio c, Java, HTML, CSS, JavaScript, Linux, My SQL, UX-UI, XML, Framework html: Angular, React, Vue</p>
              </div>
                
              <div className="pl-8 relative border-l border-border">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <h4 className="text-lg font-medium text-foreground">Diploma in Relazioni Internazionali per il Marketing</h4>
                <p className="text-muted-foreground">Istituto Istruzione Statale Bachelet | Ottobre 2013 - Luglio 2018</p>
                <p className="text-muted-foreground">Abbiategrasso, Italia</p>
                <p className="text-muted-foreground mt-1">Votazione: 64/100</p>
              </div>
            </div>
          </div>
            
          {/* Competenze */}
          <div className="mb-8 bg-card p-6 rounded-xl border border-border">
            <h2 className="text-xl font-semibold mb-4 text-foreground border-b border-border pb-2">Competenze</h2>
              
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3 text-foreground">Competenze Digitali</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">Angular</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">React</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">Vue</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">Vagrant</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">CSS</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">HTML</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">MySQL</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">Linux</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">Windows</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">Javascript</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">Bootstrap</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">Microsoft Office</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">Java</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">Git</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">JSON</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">Eclipse</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">Team Working</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">FortiClient VPN</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">Firewall (Fortinet)</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">Veeam Backup</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">DarkTrace</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">Watchguard</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">Panda</span>
                </div>
              </div>
                
              <div>
                <h3 className="text-lg font-medium mb-3 text-foreground">Competenze Linguistiche</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-foreground">Italiano</span>
                      <span className="text-muted-foreground">Madrelingua</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                    
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-foreground">Inglese</span>
                      <span className="text-muted-foreground">B2</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                    
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-foreground">Spagnolo</span>
                      <span className="text-muted-foreground">B1</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                    
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-foreground">Francese</span>
                      <span className="text-muted-foreground">A2</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium my-3 text-foreground">Patente di Guida</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">AM</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-foreground">B</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-3 text-foreground">Altre Competenze</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                <li>Conoscenza base di produzione audio con Ableton Live e FL Studio</li>
                <li>Competenza avanzata nella gestione di sistemi Windows 10/11, incluse configurazioni avanzate, ottimizzazione e troubleshooting</li>
                <li>Conoscenza intermedia dell'ecosistema Apple, con esperienza nella configurazione e utilizzo di macOS</li>
                <li>Elevata familiarità con dispositivi mobili iOS e Android, incluse configurazioni avanzate, sincronizzazione e risoluzione di problemi tecnici</li>
                <li>Esperienza nella gestione e manutenzione di stampanti e multifunzioni multimarca, incluse installazione, configurazione di rete e risoluzione guasti</li>
                <li>Capacità nell'uso di fotocamere reflex e competenze di fotografia, incluse tecniche di scatto e post-produzione di base</li>
                <li>Conoscenza e utilizzo di strumenti di intelligenza artificiale per analisi, automazione e supporto operativo</li>
                <li>Competenze nella scrittura di codice HTML, CSS, JavaScript e JSON per sviluppo e personalizzazione web</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
