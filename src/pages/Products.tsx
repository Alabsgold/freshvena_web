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
      name: "Platain Flour",
      description: "Premium fine-processed Plantain flour, hygienically processed for export",
      image: "https://drive.google.com/file/d/1l7XmAuJ3y9CTzl8H4BPK6jfQY7-MCFnf/view?usp=sharing",
      packagingSize: "1kg, 5kg, 25kg bags",
      benefits: ["100% Pure white", "No additives", "Fine texture", "Long shelf life"],
    },
    {
      name: "Yam Flour (Elubo)",
      description: "Premium yam flour for smooth, delicious pounded yam",
      image: "https://drive.google.com/file/d/1IXkiO5KvJ3EshIY4_5F3PD40oH2pHL8I/view?usp=sharing",
      packagingSize: "1kg, 2kg, 5kg",
      benefits: ["Smooth texture", "Easy to prepare", "Authentic taste"],
    },
    {
      name: "Cassava Flour",
      description: "Unripe cassava flour, rich in nutrients",
      image: "https://drive.google.com/file/d/1aEYsufsArqCNAwzbkMna8ByCoyA9lpaG/view?usp=sharing",
      packagingSize: "500g, 1kg, 2kg",
      benefits: ["High fiber", "Gluten-free", "Low GI"],
    },
    {
      name: "Palm Oil",
      description: "Naturally extracted palm oil, rich in vitamins A & E",
      image: "https://drive.google.com/file/d/1r4WhfVD-fcAekZV51_79_JNm_qDv2HuN/view?usp=sharing",
      packagingSize: "1L, 5L, 25L containers",
      benefits: ["Rich in Vitamin A", "100% Natural", "No preservatives"],
    },
    {
      name: "Dried Fish",
      description: "Premium dried fish for authentic Nigerian soups",
      image: "https://drive.google.com/file/d/1o76rns2CyC_gzqKCBVEupa6vrVlKUDHg/view?usp=sharing",
      packagingSize: "250g, 500g, 1kg",
      benefits: ["Sun-dried", "High protein", "Rich flavor"],
    },
    {
      name: "Dried Crayfish",
      description: "Ground and whole crayfish for seasoning",
      image: "https://drive.google.com/file/d/10Dl8MuJX_kKwtef1FkaeuBRbiN2JWPC_/view?usp=sharing",
      packagingSize: "100g, 250g, 500g, 1kg",
      benefits: ["Premium quality", "Rich umami", "Finely ground"],
    },
    {
      name: "Groundnut Oil",
      description: "Premium groundnut oil, hygienically processed for export",
      image: "https://drive.google.com/file/d/1apDs-VgTnDQ2bHmiqVILAcqkAxwK6lxi/view?usp=sharing",
      packagingSize: "100g, 250g, 500g",
      benefits: ["Premium Quality", "Rich in Vitamin E", "Ready to use"],
    },
    {
      name: "Goat Meat",
      description: "Premium goat meat, hygienically processed for export",
      image: "https://drive.google.com/file/d/1rOang8rRnUkhKfFFG3r58dfdvQnHXDlp/view?usp=sharing",
      packagingSize: "250g, 500g, 1kg",
      benefits: ["Fresh", "Hygienically processed", "Export-ready"],
    },
    {
      name: "Groundnuts (fresh)",
      description: "Premium groundnuts, hygienically processed for export",
      image: "https://drive.google.com/file/d/1E_0ubEmQGqjRK4n1ciqhFg6l8UVmVSKz/view?usp=sharing",
      packagingSize: "250g, 500g, 1kg",
      benefits: ["Protein-rich", "Hygienically processed", "Export-ready"],
    },
    {
      name: "Egusi (Melon Seeds)",
      description: "Premium shelled egusi for Nigerian soups",
      image: "https://drive.google.com/file/d/1BqQwmJYlv-ihxD9Bn_T-aJZJKBEXh2_P/view?usp=sharing",
      packagingSize: "250g, 500g, 1kg",
      benefits: ["Hulled & cleaned", "High protein", "Rich in nutrients"],
    },
    {
      name: "Ogbono (Pumpkin Seeds)",
      description: "African pumpkin seeds for thick, delicious soup",
      image: "https://drive.google.com/file/d/1C9gWmjAvBNtbjGvFos6rDh5J-Vx6PtGj/view?usp=sharing",
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
