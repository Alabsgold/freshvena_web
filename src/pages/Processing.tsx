import { motion } from "framer-motion";
import { Droplet, Sun, Zap, Filter, Package, ShieldCheck, Tag, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Processing = () => {
  const steps = [
    {
      icon: Droplet,
      title: "Washing",
      description: "Raw materials are thoroughly washed with clean water to remove impurities",
      color: "text-blue-500",
    },
    {
      icon: Sun,
      title: "Drying",
      description: "Proper drying in controlled environments to prevent contamination",
      color: "text-yellow-500",
    },
    {
      icon: Zap,
      title: "Grinding",
      description: "Industrial-grade mills ensure consistent texture and quality",
      color: "text-orange-500",
    },
    {
      icon: Filter,
      title: "Sieving",
      description: "Multiple sieving stages remove any unwanted particles",
      color: "text-green-500",
    },
    {
      icon: Package,
      title: "Packaging",
      description: "Food-grade packaging materials that maintain freshness",
      color: "text-purple-500",
    },
    {
      icon: ShieldCheck,
      title: "Sealing",
      description: "Hermetic sealing for extended shelf life and protection",
      color: "text-pink-500",
    },
    {
      icon: Tag,
      title: "Labelling",
      description: "Clear labelling with all regulatory information and batch numbers",
      color: "text-indigo-500",
    },
    {
      icon: CheckCircle,
      title: "Quality Check",
      description: "Final inspection before export carton preparation",
      color: "text-brand-gold",
    },
  ];

  const standards = [
    "NAFDAC Approved Facilities",
    "ISO Quality Management",
    "HACCP Compliance",
    "Regular Third-Party Audits",
    "Trained Personnel",
    "Modern Equipment",
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
            <h1 className="text-4xl md:text-6xl font-bold">Our Processing & Quality Standards</h1>
            <p className="text-xl opacity-90">
              From farm to package – every step is carefully controlled for premium quality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our 8-Step Quality Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each product goes through a rigorous process to ensure export-ready quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card glass-card-hover h-full">
                  <CardContent className="pt-8 space-y-4 text-center">
                    <div className="flex items-center justify-center">
                      <div className="relative">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background ${step.color}`}>
                          <step.icon className="h-8 w-8" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-8 h-8 bg-brand-gold text-primary rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality Certifications & Standards</h2>
              <p className="text-xl text-muted-foreground">
                We meet and exceed international food safety requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standards.map((standard, index) => (
                <motion.div
                  key={standard}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card glass-card-hover">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-brand-gold" />
                      </div>
                      <p className="font-semibold">{standard}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hygiene Promise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-card">
              <CardContent className="pt-8 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Our Hygiene Promise</h2>

                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Clean Facilities:</strong> All processing is done in
                    facilities that meet NAFDAC standards, with regular deep cleaning and maintenance schedules.
                  </p>

                  <p className="leading-relaxed">
                    <strong className="text-foreground">Trained Staff:</strong> Our team undergoes continuous
                    training in food safety, hygiene practices, and quality control procedures.
                  </p>

                  <p className="leading-relaxed">
                    <strong className="text-foreground">Quality Raw Materials:</strong> We source only from
                    trusted farmers and suppliers who share our commitment to quality.
                  </p>

                  <p className="leading-relaxed">
                    <strong className="text-foreground">Modern Equipment:</strong> State-of-the-art processing
                    machines that minimize contamination risks and ensure consistent quality.
                  </p>

                  <p className="leading-relaxed">
                    <strong className="text-foreground">Batch Traceability:</strong> Every product is labeled
                    with batch numbers for complete supply chain transparency.
                  </p>

                  <p className="leading-relaxed">
                    <strong className="text-foreground">Regular Testing:</strong> Samples from each batch
                    undergo laboratory testing for microbiological safety and quality parameters.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Quality You Can Trust
            </h2>
            <p className="text-xl opacity-90">
              Every Freshvena product is a testament to our unwavering commitment to excellence
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Processing;
