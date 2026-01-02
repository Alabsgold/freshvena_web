import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      category: "Ordering & Payment",
      questions: [
        {
          q: "How do I place an order?",
          a: "You can place orders through our website contact form, via WhatsApp, or by emailing us directly at freshlyfoods25@gmail.com. Simply specify the products and quantities you need.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept bank transfers, Western Union, MoneyGram, and for some locations, credit card payments. Payment details will be provided with your invoice.",
        },
        {
          q: "Do you offer wholesale pricing?",
          a: "Yes! We offer competitive wholesale pricing for bulk orders. Contact us with your requirements for a customized quote.",
        },
        {
          q: "What is your minimum order quantity?",
          a: "For retail customers, there's no minimum order. For wholesale partners, minimum order quantities vary by product. Contact us for details.",
        },
      ],
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          q: "Which countries do you ship to?",
          a: "We ship to USA, UK, Canada, throughout Europe, and various African countries. If your location isn't listed, contact us – we can often arrange special delivery.",
        },
        {
          q: "How long does shipping take?",
          a: "Delivery times vary by method and destination: Air cargo (5-10 days), Courier services (3-7 days), Sea freight (4-8 weeks).",
        },
        {
          q: "How do you ensure products stay fresh during shipping?",
          a: "All products are hermetically sealed in food-grade packaging. For temperature-sensitive items, we use appropriate shipping methods and packaging materials.",
        },
        {
          q: "Can I track my order?",
          a: "Yes! You'll receive tracking information once your order ships. Air cargo and courier shipments have real-time tracking.",
        },
        {
          q: "What are the shipping costs?",
          a: "Shipping costs depend on destination, weight, and chosen shipping method. We provide a shipping quote before you confirm your order.",
        },
      ],
    },
    {
      category: "Product Quality & Safety",
      questions: [
        {
          q: "Are your products NAFDAC approved?",
          a: "Yes, all our products are processed in NAFDAC-approved facilities that meet international food safety standards.",
        },
        {
          q: "How do you ensure product quality?",
          a: "We follow an 8-step quality process including washing, drying, grinding, sieving, packaging, sealing, labeling, and final quality checks. Each batch undergoes laboratory testing.",
        },
        {
          q: "What is the shelf life of your products?",
          a: "Shelf life varies by product but typically ranges from 6-18 months when stored properly. All products are labeled with manufacturing and expiry dates.",
        },
        {
          q: "Do your products contain preservatives?",
          a: "No. Our products are 100% natural with no artificial preservatives. We rely on proper processing and packaging for shelf stability.",
        },
      ],
    },
    {
      category: "Returns & Complaints",
      questions: [
        {
          q: "What if my order arrives damaged?",
          a: "Please photograph the damage and contact us within 48 hours of delivery. We'll arrange a replacement or refund as appropriate.",
        },
        {
          q: "Do you have a return policy?",
          a: "Due to the nature of food products, we generally don't accept returns. However, if there's a quality issue, we'll provide a replacement or refund.",
        },
        {
          q: "What if I receive the wrong items?",
          a: "Contact us immediately with your order number and photos. We'll correct the error at no cost to you.",
        },
      ],
    },
    {
      category: "Wholesale & Partnership",
      questions: [
        {
          q: "How do I become a wholesale partner?",
          a: "Contact us with information about your business, expected order volumes, and location. We'll discuss partnership terms and pricing.",
        },
        {
          q: "Do you offer private labeling?",
          a: "Yes, we can discuss private label arrangements for large-volume orders. Minimum order quantities apply.",
        },
        {
          q: "Can you supply products not listed on your website?",
          a: "We can source a wide variety of Nigerian food products. Share your requirements and we'll let you know if we can fulfill them.",
        },
      ],
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
            <h1 className="text-4xl md:text-6xl font-bold">Frequently Asked Questions</h1>
            <p className="text-xl opacity-90">
              Find answers to common questions about our products and services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <Card className="glass-card">
                  <CardContent className="pt-8">
                    <h2 className="text-2xl font-bold mb-6 text-brand-gold">
                      {category.category}
                    </h2>
                    <Accordion type="single" collapsible className="space-y-2">
                      {category.questions.map((item, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${categoryIndex}-${index}`}
                          className="border rounded-lg px-4"
                        >
                          <AccordionTrigger className="hover:no-underline">
                            <span className="text-left font-semibold">{item.q}</span>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Still have questions?</h2>
            <p className="text-xl text-muted-foreground">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Contact Us
              </a>
              <a
                href="https://wa.me/2349023798724"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#25D366] text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
