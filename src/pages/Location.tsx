import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Clock, Car, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero-gradient text-primary-foreground py-16 relative overflow-hidden">
          <div className="absolute inset-0 chinese-pattern opacity-10" />
          <div className="container relative z-10 text-center">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Encuéntranos</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Ubicación y Horarios</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Estamos ubicados en el corazón del Barrio Chino, a solo minutos del centro
            </p>
          </div>
        </section>

        {/* Map & Info */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden shadow-elevated bg-muted h-[400px] lg:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977759988867!2d-122.40881732392695!3d37.79220097197087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f3e52b5e9%3A0x1f6d1d3b3b3b3b3b!2sChinatown%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del Restaurante Dragón Dorado"
                />
              </div>

              {/* Info Cards */}
              <div className="space-y-6">
                {/* Address */}
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                      <MapPin className="text-gold-dark" size={24} />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-lg mb-2">Dirección</h3>
                      <p className="text-muted-foreground">
                        888 Calle del Dragón<br />
                        Barrio Chino<br />
                        San Francisco, CA 94108
                      </p>
                      <Button variant="link" className="px-0 mt-2" asChild>
                        <a
                          href="https://maps.google.com/?q=888+Dragon+Street+Chinatown+San+Francisco+CA"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Obtener Direcciones →
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                      <Clock className="text-gold-dark" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif font-semibold text-lg mb-3">Horario de Atención</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Lunes - Jueves</span>
                          <span className="font-medium">11:00 AM - 9:30 PM</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Viernes - Sábado</span>
                          <span className="font-medium">11:00 AM - 10:30 PM</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-muted-foreground">Domingo</span>
                          <span className="font-medium">12:00 PM - 9:00 PM</span>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-gold/10 rounded-lg">
                        <p className="text-sm text-gold-dark font-medium">
                          🍱 Especiales de Almuerzo: Lun-Vie, 11AM - 3PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Parking */}
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                      <Car className="text-gold-dark" size={24} />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-lg mb-2">Estacionamiento</h3>
                      <p className="text-muted-foreground text-sm">
                        Estacionamiento en la calle disponible en la Calle del Dragón y calles laterales. 
                        El estacionamiento de Portsmouth Square está ubicado a 2 cuadras con tarifas accesibles.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/30 flex items-center justify-center">
                      <Phone className="text-gold" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/80">Llama para reservaciones o para llevar</p>
                      <a href="tel:+15551234567" className="text-2xl font-serif font-bold text-gold hover:text-gold-light transition-colors">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Location;
