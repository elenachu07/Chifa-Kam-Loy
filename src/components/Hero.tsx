import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Deliciosa comida china"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
      </div>

      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 chinese-pattern opacity-30" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl space-y-6 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/40 rounded-full">
            <span className="text-gold text-sm font-medium">Negocio Familiar Desde 1985</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream leading-tight">
            Cocina China{" "}
            <span className="text-gradient-gold">Auténtica</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-cream/80 leading-relaxed max-w-xl">
            Experimenta los ricos sabores de la cocina tradicional china, 
            preparada con ingredientes frescos y recetas ancestrales 
            transmitidas de generación en generación.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="hero" size="xl" asChild>
              <a href="/menu">Ver Nuestro Menú</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+51 73 415806">
                <Phone size={20} />
                Llamar para Ordenar
              </a>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-cream/20 mt-8">
            <div>
              <p className="text-3xl font-serif font-bold text-gold">38+</p>
              <p className="text-sm text-cream/60">Años Sirviendo</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-gold">100+</p>
              <p className="text-sm text-cream/60">Platillos en Menú</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-gold">4.8★</p>
              <p className="text-sm text-cream/60">Calificación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
