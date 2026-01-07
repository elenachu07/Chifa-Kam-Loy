import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MenuSection } from "@/components/MenuSection";

const menuData = {
  appetizers: [
    { name: "Rollos de Huevo (2)", price: "$4.95", isPopular: true },
    { name: "Rollos Primavera (2)", price: "$4.95" },
    { name: "Crab Rangoon (6)", price: "$6.95", isPopular: true },
    { name: "Empanadillas (6)", price: "$7.95" },
    { name: "Costillas BBQ", price: "$9.95" },
    { name: "Wantanes Fritos (8)", price: "$5.95" },
    { name: "Tostada de Camarón (4)", price: "$6.95" },
    { name: "Brochetas de Res Teriyaki", price: "$8.95" },
  ],
  soups: [
    { name: "Sopa de Huevo", price: "$3.95 / $5.95" },
    { name: "Sopa de Wantán", price: "$4.95 / $6.95" },
    { name: "Sopa Agripicante", price: "$4.95 / $6.95", isSpicy: true },
    { name: "Sopa de Pollo con Fideos", price: "$5.95 / $7.95" },
    { name: "Sopa de Mariscos", price: "$8.95" },
  ],
  chicken: [
    { name: "Pollo General Tso", price: "$14.95", isPopular: true, isSpicy: true },
    { name: "Pollo con Ajonjolí", price: "$14.95", isPopular: true },
    { name: "Pollo a la Naranja", price: "$14.95" },
    { name: "Pollo Kung Pao", price: "$13.95", isSpicy: true },
    { name: "Moo Goo Gai Pan", price: "$12.95" },
    { name: "Pollo con Brócoli", price: "$12.95" },
    { name: "Pollo Agridulce", price: "$12.95" },
    { name: "Pollo con Verduras Mixtas", price: "$12.95" },
    { name: "Pollo con Anacardos", price: "$13.95" },
    { name: "Pollo al Limón", price: "$13.95" },
  ],
  beef: [
    { name: "Res con Brócoli", price: "$14.95", isPopular: true },
    { name: "Res Mongola", price: "$15.95", isPopular: true },
    { name: "Bistec con Pimientos", price: "$14.95" },
    { name: "Res con Chícharos", price: "$14.95" },
    { name: "Res Szechuan", price: "$15.95", isSpicy: true },
    { name: "Res con Champiñones", price: "$14.95" },
    { name: "Res Hunan", price: "$15.95", isSpicy: true },
  ],
  pork: [
    { name: "Cerdo Agridulce", price: "$12.95" },
    { name: "Moo Shu de Cerdo", price: "$12.95" },
    { name: "Cerdo Dos Veces Cocido", price: "$13.95", isSpicy: true },
    { name: "Cerdo en Salsa de Ajo", price: "$12.95", isSpicy: true },
    { name: "Cerdo BBQ Asado", price: "$12.95" },
  ],
  seafood: [
    { name: "Camarones Kung Pao", price: "$16.95", isSpicy: true, isPopular: true },
    { name: "Camarones en Salsa de Langosta", price: "$16.95" },
    { name: "Camarones con Brócoli", price: "$15.95" },
    { name: "Camarones Agridulces", price: "$15.95" },
    { name: "Camarones Sal y Pimienta", price: "$17.95", isPopular: true },
    { name: "Callos de Mar en Salsa de Ajo", price: "$18.95", isSpicy: true },
    { name: "Delicia de Mariscos", price: "$19.95" },
  ],
  vegetables: [
    { name: "Delicia de Buda", price: "$11.95" },
    { name: "Verduras Mixtas Salteadas", price: "$10.95" },
    { name: "Mapo Tofu", price: "$11.95", isSpicy: true, isPopular: true },
    { name: "Berenjena en Salsa de Ajo", price: "$11.95", isSpicy: true },
    { name: "Brócoli con Ajo", price: "$10.95" },
    { name: "Ejotes Salteados", price: "$11.95" },
  ],
  noodlesRice: [
    { name: "Arroz Frito con Pollo", price: "$10.95" },
    { name: "Arroz Frito con Camarones", price: "$12.95" },
    { name: "Arroz Frito Especial de la Casa", price: "$13.95", isPopular: true },
    { name: "Arroz Frito con Vegetales", price: "$9.95" },
    { name: "Lo Mein (Pollo, Cerdo o Vegetales)", price: "$11.95" },
    { name: "Lo Mein de Camarones", price: "$13.95" },
    { name: "Lo Mein Especial de la Casa", price: "$14.95" },
    { name: "Pad Thai", price: "$13.95" },
    { name: "Fideos de Arroz Singapur", price: "$13.95", isSpicy: true },
    { name: "Chow Fun (Res o Camarones)", price: "$14.95" },
  ],
  chefSpecials: [
    { name: "Pato Pekín (Entero)", price: "$32.95", isPopular: true, description: "Pato crujiente servido con panqueques, cebollín y salsa hoisin" },
    { name: "Dragón y Fénix", price: "$22.95", description: "Pollo General Tso y camarones jumbo en salsa de ajo" },
    { name: "Familia Feliz", price: "$21.95", description: "Res, pollo, camarones y callos de mar con verduras" },
    { name: "Res Crujiente a la Naranja", price: "$18.95", description: "Res crujiente en glaseado de naranja" },
    { name: "Bistec Sizzling", price: "$19.95", description: "Tiernas rebanadas de bistec en plato caliente con cebollas" },
    { name: "Camarones con Nuez", price: "$18.95", isPopular: true, description: "Camarones crujientes con salsa de nuez y miel" },
  ],
  lunchSpecials: [
    { name: "L1. Pollo General Tso", price: "$9.95" },
    { name: "L2. Pollo con Ajonjolí", price: "$9.95" },
    { name: "L3. Res con Brócoli", price: "$9.95" },
    { name: "L4. Pollo con Brócoli", price: "$8.95" },
    { name: "L5. Pollo Agridulce", price: "$8.95" },
    { name: "L6. Pollo Kung Pao", price: "$8.95", isSpicy: true },
    { name: "L7. Camarones con Verduras Mixtas", price: "$10.95" },
    { name: "L8. Moo Goo Gai Pan", price: "$8.95" },
  ],
};

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero-gradient text-primary-foreground py-16 relative overflow-hidden">
          <div className="absolute inset-0 chinese-pattern opacity-10" />
          <div className="container relative z-10 text-center">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Dragón Dorado</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Nuestro Menú</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Explora nuestra extensa selección de auténticos platillos chinos, desde clásicos favoritos hasta especialidades del chef.
            </p>
          </div>
        </section>

        {/* Lunch Special Banner */}
        <section className="bg-gold/20 border-y border-gold/30 py-4">
          <div className="container text-center">
            <p className="text-foreground font-medium">
              🍱 <span className="font-serif font-semibold">Especiales de Almuerzo</span> servidos Lun-Vie 11AM-3PM • Incluye arroz frito y rollo de huevo
            </p>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8">
              <MenuSection title="Aperitivos" items={menuData.appetizers} />
              <MenuSection title="Sopas" items={menuData.soups} />
              <MenuSection title="Pollo" items={menuData.chicken} />
              <MenuSection title="Res" items={menuData.beef} />
              <MenuSection title="Cerdo" items={menuData.pork} />
              <MenuSection title="Mariscos" items={menuData.seafood} />
              <MenuSection title="Vegetales y Tofu" items={menuData.vegetables} />
              <MenuSection title="Fideos y Arroz" items={menuData.noodlesRice} />
            </div>
            
            {/* Chef's Specials - Full Width */}
            <div className="mt-8">
              <MenuSection title="🌟 Especialidades del Chef" items={menuData.chefSpecials} />
            </div>
            
            {/* Lunch Specials */}
            <div className="mt-8 grid lg:grid-cols-2 gap-8">
              <MenuSection title="Especiales de Almuerzo" items={menuData.lunchSpecials} />
              
              {/* Info Card */}
              <div className="bg-secondary rounded-xl p-6 shadow-card flex flex-col justify-center">
                <h3 className="text-2xl font-serif font-bold mb-4">Información para Ordenar</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>Los precios están sujetos a cambios sin previo aviso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>🌶️ indica platillos picantes - el nivel de picante puede ajustarse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>Por favor infórmenos sobre cualquier alergia alimentaria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>Servicio de banquetes disponible para grupos grandes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>Envío gratis en pedidos mayores a $35 dentro de 5 km</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-semibold text-foreground">Llama para Ordenar:</p>
                  <a href="tel:+15551234567" className="text-2xl font-serif font-bold text-primary hover:text-primary/80 transition-colors">
                    (555) 123-4567
                  </a>
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

export default Menu;
