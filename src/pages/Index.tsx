import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Star, ChefHat, Leaf, Award } from "lucide-react";

const featuredDishes = [
  { name: "Pollo General Tso", price: "$14.95", isPopular: true },
  { name: "Camarones Kung Pao", price: "$16.95", isSpicy: true },
  { name: "Pato Pekín", price: "$32.95", isPopular: true },
  { name: "Mapo Tofu", price: "$12.95", isSpicy: true },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Quick Info Bar */}
        <section className="bg-primary text-primary-foreground py-4">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-sm">
              <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone size={18} />
                <span className="font-medium">+51 73 415806</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Calle San Martin 978, Sullana 20101, Peru</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} />
                <span>Abierto todos los días 11AM-3PM, 6:30PM-12:PM</span>
              </span>
            </div>
          </div>
        </section>

        {/* Featured Dishes */}
        <section className="py-16 md:py-24 bg-secondary/50 chinese-pattern">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-gold font-medium text-sm uppercase tracking-wider">Nuestras Especialidades</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
                Favoritos del Chef
              </h2>
              <p className="text-muted-foreground">
                Descubre nuestros platillos más queridos, elaborados con recetas auténticas y los mejores ingredientes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredDishes.map((dish, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/10 to-gold/10 mb-4 flex items-center justify-center">
                    <ChefHat size={48} className="text-primary/40 group-hover:text-primary/60 transition-colors" />
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-serif font-semibold text-lg group-hover:text-primary transition-colors">
                        {dish.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        {dish.isPopular && (
                          <span className="inline-flex items-center gap-1 text-xs text-gold-dark">
                            <Star size={12} fill="currentColor" />
                            Popular
                          </span>
                        )}
                        {dish.isSpicy && (
                          <span className="text-xs text-primary">🌶️ Picante</span>
                        )}
                      </div>
                    </div>
                    <span className="text-primary font-bold">{dish.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="default" size="lg" asChild>
                <Link to="/menu">Ver Menú Completo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-gold font-medium text-sm uppercase tracking-wider">Por Qué Dragón Dorado</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">
                  Una Tradición de Excelencia
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Por más de tres décadas, Dragón Dorado ha sido un pilar de la escena culinaria del Barrio Chino. 
                  Nuestro compromiso con sabores auténticos, ingredientes frescos y hospitalidad cálida nos ha convertido 
                  en un destino favorito para familias y amantes de la buena comida.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                      <Leaf className="text-gold-dark" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Ingredientes Frescos</h4>
                      <p className="text-sm text-muted-foreground">Productos locales y carnes premium diariamente.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                      <ChefHat className="text-gold-dark" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Chefs Expertos</h4>
                      <p className="text-sm text-muted-foreground">Entrenados en técnicas tradicionales de cocina china.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                      <Award className="text-gold-dark" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Galardonados</h4>
                      <p className="text-sm text-muted-foreground">Reconocido como Mejor Restaurante Chino 2023.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                      <Star className="text-gold-dark" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Servicio 5 Estrellas</h4>
                      <p className="text-sm text-muted-foreground">Hospitalidad cálida que se siente como familia.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image placeholder with pattern */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary to-primary/80 overflow-hidden shadow-elevated">
                  <div className="absolute inset-0 chinese-pattern opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <p className="text-6xl font-serif font-bold">38</p>
                      <p className="text-xl mt-2">Años de Excelencia</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-hero-gradient text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 chinese-pattern opacity-10" />
          <div className="container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              ¿Listo para Experimentar Dragón Dorado?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Ya sea que cenes con tu familia o pidas para llevar, estamos ansiosos por servirte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="tel:+15551234567">
                  <Phone size={20} />
                  Llama Ahora: (555) 123-4567
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/location">Cómo Llegar</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
