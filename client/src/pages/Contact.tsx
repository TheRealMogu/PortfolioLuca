import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = 'Richiesta dal Portfolio';
    const body = `Nome: ${formData.name}\n\nEmail: ${formData.email}\n\nMessaggio: ${formData.message}`;
    
    window.location.href = `mailto:lucamogu7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  
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
            <h1 className="text-3xl font-bold text-foreground">Contatti</h1>
            <p className="text-muted-foreground mt-2">Mi farebbe piacere sentire da te. Inviami un messaggio!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Scrivimi</h2>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Messaggio</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-primary text-white px-4 py-2 rounded-xl">
                  Invia Messaggio
                </Button>
              </form>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Informazioni di Contatto</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mt-0.5 mr-3" />
                  <div>
                    <p className="text-foreground">Email</p>
                    <a href="mailto:lucamogu7@gmail.com" className="text-primary hover:underline">lucamogu7@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mt-0.5 mr-3" />
                  <div>
                    <p className="text-foreground">Telefono</p>
                    <a href="tel:+393464121135" className="text-primary hover:underline">+39 346 412 1135</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 mr-3" />
                  <div>
                    <p className="text-foreground">Località</p>
                    <p className="text-muted-foreground">Abbiategrasso, Milano, Italia</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <p className="text-foreground mb-3">Social</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      <Github className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-lg font-medium mb-3 text-foreground">Orari Disponibilità</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lunedì - Venerdì</span>
                    <span className="text-foreground">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sabato - Domenica</span>
                    <span className="text-foreground">Su appuntamento</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
