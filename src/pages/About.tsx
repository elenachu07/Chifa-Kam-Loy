import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChefHat, Heart, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero-gradient text-primary-foreground py-16 relative overflow-hidden">
          <div className="absolute inset-0 chinese-pattern opacity-10" />
          <div className="container relative z-10 text-center">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Nuestra Historia</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Sobre Dragón Dorado</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Una tradición familiar de auténtica cocina china desde 1985
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-gold font-medium text-sm uppercase tracking-wider">Est. 1985</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">
                  De Cantón a Tu Mesa
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Dragón Dorado comenzó como un sueño de la familia Chen, quienes inmigraron desde Guangzhou, China 
                    en 1982. Con recetas transmitidas a través de cuatro generaciones y una pasión por la auténtica 
                    cocina cantonesa, abrieron un pequeño restaurante en el corazón del Barrio Chino.
                  </p>
                  <p>
                    Lo que comenzó como un humilde comedor de 20 asientos se ha convertido en una querida institución del vecindario. 
                    Hoy, la tercera generación de la familia Chen continúa la tradición, honrando las 
                    recetas originales mientras adopta ingredientes frescos de origen local.
                  </p>
                  <p>
                    Cada platillo en Dragón Dorado cuenta una historia—de reuniones familiares en Guangzhou, de las 
                    mezclas secretas de especias de la abuela, de la alegría de compartir una comida con seres queridos. Te invitamos a ser 
                    parte de nuestra familia extendida.
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-muted overflow-hidden shadow-elevated">
                  <div className="absolute inset-0 chinese-pattern opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <p className="text-7xl font-serif font-bold text-primary">陈</p>
                      <p className="text-lg mt-4 text-muted-foreground">La Familia Chen</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-secondary/50 chinese-pattern">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-gold font-medium text-sm uppercase tracking-wider">Nuestros Valores</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
                Lo Que Nos Hace Especiales
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: ChefHat,
                  title: "Recetas Auténticas",
                  description: "Recetas tradicionales de Guangzhou, perfeccionadas durante 4 generaciones",
                },
                {
                  icon: Heart,
                  title: "Hecho con Amor",
                  description: "Cada platillo se prepara con cuidado, como en casa",
                },
                {
                  icon: Users,
                  title: "Negocio Familiar",
                  description: "Tres generaciones trabajando juntas para servirte",
                },
                {
                  icon: Award,
                  title: "Calidad Primero",
                  description: "Ingredientes frescos obtenidos diariamente de proveedores locales",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-gold-dark" size={28} />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl text-center">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground leading-relaxed">
              "La comida no se trata solo de sabor—se trata de los recuerdos que creamos, las tradiciones que honramos, 
              y el amor que compartimos alrededor de la mesa."
            </blockquote>
            <cite className="block mt-6 text-muted-foreground not-italic">
              — <span className="text-primary font-medium">Chef David Chen</span>, Propietario de Tercera Generación
            </cite>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
