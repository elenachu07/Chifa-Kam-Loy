import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream-dark">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-serif font-bold">
                <span className="text-primary">Chifa Kam Loy</span>{" "}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sirviendo auténtica cocina china con recetas familiares transmitidas por generaciones. 
              Experimenta el verdadero sabor de China.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-cream">Enlaces Rápidos</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/", label: "Inicio" },
                { to: "/menu", label: "Nuestro Menú" },
                { to: "/about", label: "Nosotros" },
                { to: "/location", label: "Ubicación" },
                { to: "/contact", label: "Contacto" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

         {/* Hours */}
        <div className="space-y-4">
          <h4 className="text-lg font-serif font-semibold text-cream">Horario</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 text-gold" />
              <div>
                <p>Lunes - Domingo</p>
                <p className="text-cream">11:00 AM - 3:00 PM</p>
                <p className="text-cream">6:30 PM - 12:00 PM</p>
              </div>
            </div>
          </div>
        </div>


          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-cream">Contacto</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
              >
                <Phone size={16} className="text-gold" />
                <span>+51 73 415806</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={16} className="mt-0.5 text-gold" />
                <span>
                  Calle San Martin 978, Sullana 20101, Peru<br />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Restaurante Chifa Kam Loy. Todos los derechos reservados.</p>
          <p>Negocio familiar desde 1985</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
