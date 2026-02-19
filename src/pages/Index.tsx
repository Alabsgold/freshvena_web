import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Globe, Award, Shield, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { Card, CardContent } from "@/components/ui/card";
import plantainFlour from "../prod_assets/plantain flour.jpg";
import Groundnut from "../prod_assets/Groundnut.jpg";
import PalmOil from "../prod_assets/Palm oil.jpg";
import Crayfish from "../prod_assets/Cray fish.jpg";

const Index = () => {
  const featuredProducts = [
    {
      name: "Plantain Flour",
      description: "Premium quality plantain flour for authentic Nigerian meals",
      image: plantainFlour,
      packagingSize: "1kg, 5kg, 25kg bags",
      benefits: ["100% Pure & Natural", "No additives", "Export-ready packaging"],
    },
    {
      name: "Groundnuts (fresh)",
      description: "Premium groundnuts, hygienically processed for export",
      image: Groundnut,
      packagingSize: "250g, 500g, 1kg",
      benefits: ["Protein-rich", "Hygienically processed", "Export-ready"],
    },
    {
      name: "Palm Oil",
      description: "Naturally extracted red palm oil, rich in vitamins",
      image: PalmOil,
      packagingSize: "1L, 5L, 25L containers",
      benefits: ["Rich in Vitamin A", "100% Natural", "Premium quality"],
    },
    {
      name: "Crayfish",
      description: "Premium dried crayfish for authentic Nigerian flavoring",
      image: Crayfish,
      packagingSize: "250g, 500g, 1kg",
      benefits: ["Sun-dried", "Rich flavor", "High protein"],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Export-Standard Hygiene",
      description: "NAFDAC approved facilities with international quality standards",
    },
    {
      icon: Globe,
      title: "Worldwide Delivery",
      description: "We ship to USA, UK, Canada, Europe, and across Africa",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "100% pure Nigerian products with no artificial additives",
    },
    {
      icon: ShoppingBag,
      title: "Wholesale & Retail",
      description: "Flexible ordering options for businesses and individuals",
    },
  ];

  const testimonials = [
    {
      name: "Adebayo O.",
      location: "London, UK",
      text: "Best garri I've tasted since leaving Nigeria! Fast delivery and excellent packaging.",
      rating: 5,
    },
    {
      name: "Chioma M.",
      location: "Houston, USA",
      text: "The palm oil quality is exceptional. Freshvena has become my go-to supplier.",
      rating: 5,
    },
    {
      name: "Kwame A.",
      location: "Toronto, Canada",
      text: "Reliable wholesale partner. Always deliver on time with consistent quality.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90 z-0" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-block"
              >
                <span className="px-6 py-2 bg-brand-gold text-primary text-sm font-semibold rounded-full">
                  Premium Nigerian Foods Export
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground">
                From Nigeria to the World
              </h1>

              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
                Premium, Clean, Export-Ready Foods
              </p>

              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Bringing authentic Nigerian flavors to Africans abroad with world-class quality standards and global delivery
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button
                  size="lg"
                  className="bg-brand-gold text-primary hover:glow-gold text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/products">
                    Shop Products
                    <ShoppingBag className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/contact">
                    Become a Partner
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center justify-center gap-8 pt-12 text-primary-foreground/90"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold">100+</p>
                  <p className="text-sm">Products</p>
                </div>
                <div className="h-12 w-px bg-primary-foreground/30" />
                <div className="text-center">
                  <p className="text-3xl font-bold">30+</p>
                  <p className="text-sm">Countries</p>
                </div>
                <div className="h-12 w-px bg-primary-foreground/30" />
                <div className="text-center">
                  <p className="text-3xl font-bold">5000+</p>
                  <p className="text-sm">Happy Customers</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Freshvena?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for premium Nigerian food products worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card glass-card-hover h-full text-center">
                  <CardContent className="pt-6 space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10">
                      <benefit.icon className="h-8 w-8 text-brand-gold" />
                    </div>
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium quality Nigerian foods, hygienically processed for global export
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.name} {...product} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by thousands of customers worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card h-full">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                    <p className="text-foreground italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-primary-foreground"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers enjoying authentic Nigerian flavors worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-gold text-primary hover:glow-gold text-lg px-8"
                asChild
              >
                <Link to="/contact">
                  Order Now - We Ship Worldwide
                  <Globe className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
                asChild
              >
                <Link to="/products">
                  Browse Catalog
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
