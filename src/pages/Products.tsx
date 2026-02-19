import { motion } from "framer-motion";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";
import plantainFlour from "../prod_assets/plantain flour.jpg";
import palmOil from "../prod_assets/Palm oil.jpg";
import driedFish from "../prod_assets/dried fish.jpg";
import crayFish from "../prod_assets/Cray fish.jpg";
import goatMeat from "../prod_assets/Goat meat.jpg";
import groundnut from "../prod_assets/Groundnut.jpg";
import egusi from "../prod_assets/egusi.jpg";
import ogbono from "../prod_assets/Ogbono.jpg";
import prawn from "../prod_assets/prawn.jpg";
import kilishi from "../prod_asstes/kilishi.jpg";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      name: "Platain Flour",
      description: "Premium fine-processed Plantain flour, hygienically processed for export",
      image: plantainFlour,
      packagingSize: "1kg, 5kg, 25kg bags",
      benefits: ["100% Pure white", "No additives", "Fine texture", "Long shelf life"],
    },
    {
      name: "Palm Oil",
      description: "Naturally extracted palm oil, rich in vitamins A & E",
      image: palmOil,
      packagingSize: "1L, 5L, 25L containers",
      benefits: ["Rich in Vitamin A", "100% Natural", "No preservatives"],
    },
    {
      name: "Dried Fish",
      description: "Premium dried fish for authentic Nigerian soups",
      image: driedFish,
      packagingSize: "250g, 500g, 1kg",
      benefits: ["Sun-dried", "High protein", "Rich flavor"],
    },
    {
      name: "Crayfish",
      description: "Premium Fine, Hygenically packaged crayfish for export",
      image: crayFish,
      packagingSize: "100g, 250g, 500g, 1kg",
      benefits: ["Premium quality", "Rich umami", "Finely ground"],
    },
    {
      name: "Goat Meat",
      description: "Premium goat meat, hygienically processed for export",
      image: goatMeat,
      packagingSize: "250g, 500g, 1kg",
      benefits: ["Fresh", "Hygienically processed", "Export-ready"],
    },
    {
      name: "Groundnuts (fresh)",
      description: "Premium groundnuts, hygienically processed for export",
      image: groundnut,
      packagingSize: "250g, 500g, 1kg",
      benefits: ["Protein-rich", "Hygienically processed", "Export-ready"],
    },
    {
      name: "Egusi (Melon Seeds)",
      description: "Premium shelled egusi for Nigerian soups",
      image: egusi,
      packagingSize: "250g, 500g, 1kg",
      benefits: ["Hulled & cleaned", "High protein", "Rich in nutrients"],
    },
    {
      name: "Ogbono (Pumpkin Seeds)",
      description: "African pumpkin seeds for thick, delicious soup",
      image: ogbono,
      packagingSize: "200g, 500g, 1kg",
      benefits: ["Finely ground", "Rich flavor", "Natural thickener"],
    },
    {
      name: "Prawn (Shrimps)",
      description: "Premium Prawn, hygienically processed for export",
      image: prawn,
      packagingSize: "250g, 500g, 1kg",
      benefits: ["Protein-rich", "Hygienically processed", "Export-ready"],
    },
    {
      name: "Kilishi (Beef Jerkey)",
      description: "African Beef Jerkey, premium packaged and hygienically processed for export",
      image: goatMeat,
      packagingSize: "250g, 500g, 1kg",
      benefits: ["Fresh", "Hygienically processed", "Export-ready"],
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">Our Products</h1>
            <p className="text-xl opacity-90">
              Premium Nigerian foods, hygienically processed and export-ready
            </p>
            <Button
              size="lg"
              className="bg-brand-gold text-primary hover:glow-gold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Product Catalogue (PDF)
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10 glass-card"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.name} {...product} index={index} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No products found matching "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Can't find what you're looking for?
            </h2>
            <p className="text-xl text-muted-foreground">
              We can source a wide variety of Nigerian food products. Contact us for special requests.
            </p>
            <Button size="lg" variant="default" className="bg-primary">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
