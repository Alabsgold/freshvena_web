import { motion } from "framer-motion";
import { Target, Eye, Award, Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We maintain the highest standards in processing and packaging",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction and trust are our top priorities",
    },
    {
      icon: CheckCircle,
      title: "Hygiene Excellence",
      description: "NAFDAC approved facilities with international standards",
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
            <h1 className="text-4xl md:text-6xl font-bold">About Freshvena Foods</h1>
            <p className="text-xl opacity-90">
              Bringing the taste of home to Africans worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>

              <p className="text-muted-foreground leading-relaxed">
                Freshvena Foods Limited was born from a simple yet powerful vision: to connect Africans
                in the diaspora with the authentic flavors of home. We understand the longing for that
                perfect bowl of garri, the aroma of fresh palm oil, and the taste of traditionally
                processed Nigerian foods.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                What started as a small operation has grown into a trusted export company, serving
                thousands of customers across USA, UK, Canada, Europe, and beyond. Our commitment to
                quality, hygiene, and authenticity has made us a preferred supplier for both retail
                customers and wholesale partners.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Every product we export goes through rigorous quality control and is processed in
                NAFDAC-approved facilities that meet international food safety standards. We believe
                that our customers deserve nothing but the best – and that's exactly what we deliver.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full">
                <CardContent className="pt-8 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10">
                    <Target className="h-8 w-8 text-brand-gold" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide Africans worldwide with access to premium quality Nigerian food products
                    that are hygienically processed, properly packaged, and delivered with care. We aim
                    to be the bridge between Nigeria's rich food heritage and the global African community.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full">
                <CardContent className="pt-8 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10">
                    <Eye className="h-8 w-8 text-brand-gold" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the world's most trusted and recognized brand for Nigerian food exports,
                    setting industry standards for quality, hygiene, and customer satisfaction. We envision
                    a future where authentic Nigerian foods are accessible in every corner of the globe.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card glass-card-hover h-full text-center">
                  <CardContent className="pt-8 space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10">
                      <value.icon className="h-8 w-8 text-brand-gold" />
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Our Commitment to Hygiene</h2>
            <p className="text-xl opacity-90">
              At Freshvena Foods, hygiene is not negotiable. Every step of our process, from sourcing
              raw materials to packaging finished products, follows strict hygiene protocols. Our
              facilities are regularly inspected and certified by regulatory authorities, ensuring that
              every product that bears our name meets the highest international standards.
            </p>
            <p className="text-xl opacity-90">
              We invest continuously in modern processing equipment, staff training, and quality
              assurance systems to guarantee that you receive products that are not just authentic,
              but also safe and healthy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
