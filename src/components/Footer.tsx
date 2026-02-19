import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/freshvena-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="Freshvena Foods"
                className="h-12 w-12 rounded-full ring-2 ring-brand-gold"
              />
              <div>
                <h3 className="text-lg font-bold">Freshvena Foods</h3>
                <p className="text-xs opacity-80">Premium Nigerian Exports</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Bringing authentic Nigerian flavors to the world with export-ready quality and hygiene standards.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-brand-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="opacity-90 hover:text-brand-gold hover:opacity-100 transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="opacity-90 hover:text-brand-gold hover:opacity-100 transition-all">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/processing" className="opacity-90 hover:text-brand-gold hover:opacity-100 transition-all">
                  Quality Process
                </Link>
              </li>
              <li>
                <Link to="/logistics" className="opacity-90 hover:text-brand-gold hover:opacity-100 transition-all">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/faq" className="opacity-90 hover:text-brand-gold hover:opacity-100 transition-all">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Products</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90">Plantain Flour</li>
              <li className="opacity-90">Groundnut</li>
              <li className="opacity-90">Palm oil</li>
              <li className="opacity-90">Dried Fish & Crayfish</li>
              <li className="opacity-90">Egusi(Melon seeds)</li>
              <li className="opacity-90">Prawn</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="opacity-90">Lagos, Nigeria</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="opacity-90">+234 902 379 8724</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="opacity-90">freshlyfoods25@gmail.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-block px-6 py-2 bg-brand-gold text-primary rounded-full text-sm font-medium hover:glow-gold transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © {currentYear} Freshvena Foods Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="opacity-80 hover:text-brand-gold hover:opacity-100 transition-all">
                Privacy Policy
              </a>
              <a href="#" className="opacity-80 hover:text-brand-gold hover:opacity-100 transition-all">
                Terms of Service
              </a>
              <a href="#" className="opacity-80 hover:text-brand-gold hover:opacity-100 transition-all">
                Export Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
