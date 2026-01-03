import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import founderImage from "../assets/Founder.jpg";

const Founder = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold">Meet Our Founder</h1>
            <p className="text-xl opacity-90">
              The vision behind Freshvena Foods Limited
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Placeholder for founder photo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card shadow-2xl border border-white/20 relative group">
                    <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay z-10" />
                    <img
                      src={founderImage}
                      alt="Freshvena Foods Founder"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-30 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                      <h3 className="text-2xl font-bold mb-1">Mrs Oyebola Alabi</h3>
                      <p className="text-white/90 font-medium">CEO & Founder</p>
                      <p className="text-sm text-white/70 mt-1">Freshvena Foods Limited</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <Quote className="h-8 w-8 text-brand-gold mb-4" />
                    <blockquote className="text-xl italic text-muted-foreground leading-relaxed">
                      "I started Freshvena Foods with a simple belief: every African abroad deserves
                      access to the pure, authentic foods of home. Quality and hygiene should never
                      be compromised, no matter where you are in the world."
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Journey */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Journey</h2>

              <Card className="glass-card">
                <CardContent className="pt-8 space-y-6">
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p className="leading-relaxed">
                      The idea for Freshvena Foods was born from personal experience. Having traveled
                      extensively and witnessed the challenges Africans face in accessing authentic,
                      quality Nigerian foods abroad, our founder recognized a critical gap in the market.
                    </p>

                    <p className="leading-relaxed">
                      What began as a small export operation has evolved into a trusted brand serving
                      thousands of customers across multiple continents. This growth wasn't just about
                      business – it was about reconnecting people with their roots, one carefully
                      processed, hygienically packaged product at a time.
                    </p>

                    <p className="leading-relaxed">
                      The journey has been challenging but rewarding. From securing NAFDAC certifications
                      to establishing international shipping partnerships, every milestone has been driven
                      by our commitment to quality and customer satisfaction.
                    </p>

                    <p className="leading-relaxed">
                      Today, Freshvena Foods stands as a testament to what's possible when passion meets
                      purpose. We're not just exporting food – we're exporting culture, tradition, and
                      the taste of home to Africans worldwide.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Looking Ahead</h2>
              <Card className="glass-card">
                <CardContent className="pt-8 space-y-4 text-lg text-muted-foreground text-left">
                  <p className="leading-relaxed">
                    Our vision extends beyond just being a food export company. We aim to become the
                    global standard for Nigerian food products – setting benchmarks in quality, hygiene,
                    and customer service that others aspire to match.
                  </p>
                  <p className="leading-relaxed">
                    We're investing in expanded processing facilities, developing new product lines,
                    and strengthening our global distribution network. But at the core of everything
                    we do remains the same principle that started this journey: uncompromising quality
                    and authentic Nigerian flavors.
                  </p>
                  <p className="leading-relaxed">
                    Thank you for being part of the Freshvena Foods family. Together, we're bringing
                    the taste of home to every corner of the world.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Join Our Story</h2>
            <p className="text-xl opacity-90">
              Be part of our mission to bring authentic Nigerian flavors to the world
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Founder;
