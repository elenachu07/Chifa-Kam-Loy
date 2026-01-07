import { Star } from "lucide-react";

interface MenuItemProps {
  name: string;
  price: string;
  description?: string;
  isPopular?: boolean;
  isSpicy?: boolean;
}

const MenuItem = ({ name, price, description, isPopular, isSpicy }: MenuItemProps) => {
  return (
    <div className="group flex justify-between items-start gap-4 py-4 border-b border-border last:border-0 hover:bg-muted/50 -mx-4 px-4 rounded-lg transition-colors">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
            {name}
          </h4>
          {isPopular && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gold/20 text-gold-dark text-xs font-medium rounded-full">
              <Star size={10} fill="currentColor" />
              Popular
            </span>
          )}
          {isSpicy && (
            <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
              🌶️ Spicy
            </span>
          )}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <span className="text-primary font-semibold whitespace-nowrap">{price}</span>
    </div>
  );
};

interface MenuSectionProps {
  title: string;
  items: MenuItemProps[];
}

const MenuSection = ({ title, items }: MenuSectionProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card">
      <h3 className="text-2xl font-serif font-bold text-foreground mb-4 pb-4 border-b-2 border-gold/30">
        {title}
      </h3>
      <div className="space-y-0">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export { MenuItem, MenuSection };
export type { MenuItemProps, MenuSectionProps };
