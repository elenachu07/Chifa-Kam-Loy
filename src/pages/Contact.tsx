import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero-gradient text-primary-foreground py-16 relative overflow-hidden">
          <div className="absolute inset-0 chinese-pattern opacity-10" />
          <div className="container relative z-10 text-center">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Comunícate</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Contáctanos</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              ¿Preguntas, reservaciones o consultas de banquetes? ¡Nos encantaría saber de ti!
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Phone CTA - Prominent */}
              <div className="bg-primary rounded-2xl p-8 md:p-12 text-center mb-12 relative overflow-hidden shadow-elevated">
                <div className="absolute inset-0 chinese-pattern opacity-10" />
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-gold/30 flex items-center justify-center mx-auto mb-6">
                    <Phone className="text-gold" size={36} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-2">
                    Llámanos Hoy
                  </h2>
                  <p className="text-primary-foreground/80 mb-6">
                    Para reservaciones, pedidos para llevar o cualquier pregunta
                  </p>
                  <Button variant="hero" size="xl" asChild>
                    <a href="tel:+15551234567" className="text-xl">
                      (555) 123-4567
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Cards Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Phone */}
                <a
                  href="tel:+15551234567"
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 rounded-lg bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                    <Phone className="text-gold-dark" size={24} />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-1">Teléfono</h3>
                  <p className="text-primary font-medium">(555) 123-4567</p>
                  <p className="text-sm text-muted-foreground mt-1">Toca para llamar</p>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@goldendragon.com"
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 rounded-lg bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                    <Mail className="text-gold-dark" size={24} />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-1">Correo</h3>
                  <p className="text-primary font-medium break-all">info@goldendragon.com</p>
                  <p className="text-sm text-muted-foreground mt-1">Respondemos en 24 horas</p>
                </a>

                {/* Address */}
                <a
                  href="https://maps.google.com/?q=888+Dragon+Street+Chinatown+San+Francisco+CA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 rounded-lg bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                    <MapPin className="text-gold-dark" size={24} />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-1">Visítanos</h3>
                  <p className="text-muted-foreground text-sm">
                    888 Calle del Dragón<br />
                    Barrio Chino, SF 94108
                  </p>
                </a>
              </div>

              {/* Additional Info */}
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                {/* Hours */}
                <div className="bg-secondary rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-gold" size={24} />
                    <h3 className="font-serif font-semibold text-lg">Horario</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lun - Jue</span>
                      <span>11:00 AM - 9:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Vie - Sáb</span>
                      <span>11:00 AM - 10:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Domingo</span>
                      <span>12:00 PM - 9:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Catering */}
                <div className="bg-secondary rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="text-gold" size={24} />
                    <h3 className="font-serif font-semibold text-lg">Banquetes y Eventos</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    ¿Planeas una fiesta, evento corporativo o celebración especial? 
                    Ofrecemos servicio completo de banquetes para grupos de cualquier tamaño.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:+15551234567">Consultar sobre Banquetes</a>
                  </Button>
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

export default Contact;
