import { motion } from "framer-motion";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  packagingSize?: string;
  benefits?: string[];
  index?: number;
}

const ProductCard = ({ name, description, image, packagingSize, benefits, index = 0 }: ProductCardProps) => {
  const handleWhatsAppOrder = () => {
    const message = `Hi, I'm interested in ordering ${name}`;
    window.open(`https://wa.me/2349023798724?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="glass-card glass-card-hover overflow-hidden h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-brand-gold text-primary text-xs font-semibold rounded-full">
              Export Ready
            </span>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl">{name}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          {packagingSize && (
            <div className="text-sm">
              <span className="font-semibold text-muted-foreground">Packaging:</span>{" "}
              <span className="text-foreground">{packagingSize}</span>
            </div>
          )}

          {benefits && benefits.length > 0 && (
            <div className="space-y-1">
              <p className="text-sm font-semibold text-muted-foreground">Benefits:</p>
              <ul className="text-sm space-y-1">
                {benefits.slice(0, 3).map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-brand-gold mr-2">•</span>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex gap-2">
          <Button
            variant="default"
            className="flex-1 bg-primary hover:bg-primary/90"
            size="sm"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Request Invoice
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleWhatsAppOrder}
            className="flex-1"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
