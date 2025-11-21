import { motion } from "framer-motion";
import { Plane, Ship, Package, Globe, Clock, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Logistics = () => {
  const shippingMethods = [
    {
      icon: Plane,
      title: "Air Cargo",
      description: "Fast delivery for urgent orders",
      timeline: "5-10 business days",
      features: ["Express delivery", "Temperature controlled", "Real-time tracking"],
    },
    {
      icon: Ship,
      title: "Sea Freight",
      description: "Cost-effective for bulk orders",
      timeline: "4-8 weeks",
      features: ["Large quantities", "Economical", "Container shipping"],
    },
    {
      icon: Package,
      title: "Courier Services",
      description: "DHL, UPS, FedEx partnerships",
      timeline: "3-7 business days",
      features: ["Door-to-door", "Insurance included", "Reliable tracking"],
    },
  ];

  const destinations = [
    { region: "USA", cities: "New York, Houston, Atlanta, Los Angeles, Chicago" },
    { region: "UK", cities: "London, Manchester, Birmingham, Leeds" },
    { region: "Canada", cities: "Toronto, Montreal, Vancouver, Calgary" },
    { region: "Europe", cities: "Paris, Berlin, Amsterdam, Brussels, Rome" },
    { region: "Africa", cities: "Ghana, South Africa, Kenya, Uganda" },
  ];

  const advantages = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Established shipping routes to 30+ countries",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We meet our delivery promises consistently",
    },
    {
      icon: Shield,
      title: "Secure Packaging",
      description: "Export-grade packaging for product protection",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "From small parcels to full containers",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">Worldwide Shipping & Logistics</h1>
            <p className="text-xl opacity-90">
              From Lagos to your doorstep – reliable delivery you can count on
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Shipping Options</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the shipping method that best suits your needs and timeline
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shippingMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card glass-card-hover h-full">
                  <CardContent className="pt-8 space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10">
                      <method.icon className="h-8 w-8 text-brand-gold" />
                    </div>
                    <h3 className="text-2xl font-bold">{method.title}</h3>
                    <p className="text-muted-foreground">{method.description}</p>
                    <div className="pt-2">
                      <span className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-semibold">
                        {method.timeline}
                      </span>
                    </div>
                    <ul className="space-y-2 pt-4">
                      {method.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We Ship Worldwide</h2>
            <p className="text-xl text-muted-foreground">
              Delivering to major cities across continents
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.region}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card glass-card-hover">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-shrink-0">
                        <h3 className="text-2xl font-bold text-brand-gold">{dest.region}</h3>
                      </div>
                      <div className="flex-grow">
                        <p className="text-muted-foreground">{dest.cities}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Don't see your location? Contact us for special arrangements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Logistics?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card glass-card-hover h-full text-center">
                  <CardContent className="pt-8 space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10">
                      <advantage.icon className="h-8 w-8 text-brand-gold" />
                    </div>
                    <h3 className="text-xl font-bold">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Shipping */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center">Wholesale Bulk Shipping</h2>
              <p className="text-xl opacity-90 text-center">
                Special logistics solutions for wholesale partners
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Container Shipping</h3>
                  <ul className="space-y-2 opacity-90">
                    <li>• Full Container Load (FCL)</li>
                    <li>• Less than Container Load (LCL)</li>
                    <li>• Customized pallet arrangements</li>
                    <li>• Competitive freight rates</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Volume Discounts</h3>
                  <ul className="space-y-2 opacity-90">
                    <li>• Tiered pricing for bulk orders</li>
                    <li>• Negotiated shipping rates</li>
                    <li>• Flexible payment terms</li>
                    <li>• Dedicated account manager</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
