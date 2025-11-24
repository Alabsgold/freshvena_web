import { motion } from "framer-motion";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      name: "Ijebu Garri",
      description: "Premium fine-grained garri, hygienically processed for export",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600",
      packagingSize: "1kg, 5kg, 25kg bags",
      benefits: ["100% Pure white", "No additives", "Fine texture", "Long shelf life"],
    },
    {
      name: "White Garri",
      description: "Classic white garri for traditional Nigerian meals",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600",
      packagingSize: "1kg, 5kg, 25kg bags",
      benefits: ["Pure & natural", "Export-ready", "Perfect for eba"],
    },
    {
      name: "Yam Flour (Elubo)",
      description: "Premium yam flour for smooth, delicious pounded yam",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600",
      packagingSize: "1kg, 2kg, 5kg",
      benefits: ["Smooth texture", "Easy to prepare", "Authentic taste"],
    },
    {
      name: "Plantain Flour",
      description: "Unripe plantain flour, rich in nutrients",
      image: "https://images.unsplash.com/photo-1603052176053-c2a5f8e3f0a9?w=600",
      packagingSize: "500g, 1kg, 2kg",
      benefits: ["High fiber", "Gluten-free", "Low GI"],
    },
    {
      name: "Pure Red Palm Oil",
      description: "Naturally extracted palm oil, rich in vitamins A & E",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600",
      packagingSize: "1L, 5L, 25L containers",
      benefits: ["Rich in Vitamin A", "100% Natural", "No preservatives"],
    },
    {
      name: "Dried Fish",
      description: "Premium dried fish for authentic Nigerian soups",
      image: "https://images.unsplash.com/photo-1535473895227-bdecb20fb157?w=600",
      packagingSize: "250g, 500g, 1kg",
      benefits: ["Sun-dried", "High protein", "Rich flavor"],
    },
    {
      name: "Dried Crayfish",
      description: "Ground and whole crayfish for seasoning",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600",
      packagingSize: "100g, 250g, 500g, 1kg",
      benefits: ["Premium quality", "Rich umami", "Finely ground"],
    },
    {
      name: "Suya Spice Mix",
      description: "Authentic suya spice blend with groundnuts and spices",
      image: "https://images.unsplash.com/photo-1596040033229-a0b962cb3c61?w=600",
      packagingSize: "100g, 250g, 500g",
      benefits: ["Authentic recipe", "Premium ingredients", "Ready to use"],
    },
    {
      name: "Chin-Chin",
      description: "Crunchy Nigerian snack, perfect for any occasion",
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600",
      packagingSize: "250g, 500g, 1kg",
      benefits: ["Crunchy texture", "Sweet & savory", "Long-lasting"],
    },
    {
      name: "Groundnuts (Roasted)",
      description: "Premium roasted groundnuts, lightly salted",
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600",
      packagingSize: "250g, 500g, 1kg",
      benefits: ["Protein-rich", "Freshly roasted", "Crispy & tasty"],
    },
    {
      name: "Egusi (Melon Seeds)",
      description: "Premium shelled egusi for Nigerian soups",
      image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600",
      packagingSize: "250g, 500g, 1kg",
      benefits: ["Hulled & cleaned", "High protein", "Rich in nutrients"],
    },
    {
      name: "Ogbono",
      description: "African mango seeds for thick, delicious soup",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600",
      packagingSize: "200g, 500g, 1kg",
      benefits: ["Finely ground", "Rich flavor", "Natural thickener"],
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
