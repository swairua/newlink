import { Button } from "./ui/button";
import { Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Emergency Repair Services",
    "Preventive Maintenance",
    "Equipment Installation",
    "Calibration Services",
    "Technical Support",
    "Equipment Validation"
  ];

  const products = [
    "Laboratory Equipment",
    "Analytical Instruments",
    "Testing Kits",
    "Chemical Reagents",
    "Lab Supplies",
    "Safety Equipment"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NL</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">NEWLINK LAB</h3>
                <p className="text-xs text-background/70 -mt-1">SERVICES LTD</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Professional laboratory equipment maintenance and repair services. 
              We provide quality solutions to keep your laboratory running efficiently.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@newlinklabservices.co.ke</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Products</h4>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href="#products"
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Contact</h4>
            <p className="text-sm text-background/70">
              Need immediate assistance? Get in touch with our service team.
            </p>
            <div className="space-y-3">
              <Button 
                variant="secondary" 
                size="sm" 
                className="w-full bg-primary hover:bg-primary/90 text-white border-0"
              >
                Request Service Quote
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-background/20 text-background hover:bg-background hover:text-foreground"
              >
                Emergency Service
              </Button>
            </div>
            <div className="text-sm text-background/70">
              <div className="font-medium text-secondary">24/7 Emergency Available</div>
              <div>Response time: Within 2 hours</div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-background/70">
            © {currentYear} Newlink Lab Services Limited. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;