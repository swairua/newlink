import { Button } from "./ui/button";
import { Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "24/7 Emergency Repair",
    "Preventive Maintenance",
    "IQ/OQ/PQ Qualification",
    "Equipment Installation",
    "Calibration & Validation",
    "Multi-Vendor Support"
  ];

  const equipmentTypes = [
    "HPLC & LC-MS Systems",
    "GC & GC-MS Systems",
    "Spectrophotometers",
    "Incubators & Autoclaves",
    "Balances & Centrifuges",
    "Environmental Chambers"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F356eaac87e534266a3db84684b4b56a2?format=webp&width=800"
                alt="Newlink Lab Services Ltd"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Professional laboratory equipment maintenance and repair services across Kenya.
              Multi-vendor support with certified technicians for all major laboratory instruments.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-red-400">🚨</span>
                <span className="font-semibold text-red-400">Emergency: +254 780 165 490</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@newlinklabservices.co.ke</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>P.O Box 36294-00200, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>24/7 Emergency Response Available</span>
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

          {/* Equipment */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Equipment We Service</h4>
            <ul className="space-y-2">
              {equipmentTypes.map((equipment, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {equipment}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-red-400">🚨 Emergency Contact</h4>
            <p className="text-sm text-background/70">
              Critical equipment failure? Get immediate assistance from our certified technicians.
            </p>
            <div className="space-y-3">
              <div className="bg-red-600 rounded-lg p-3 text-center">
                <div className="font-bold text-lg text-white">+254 780 165 490</div>
                <div className="text-xs text-red-100">Call for immediate response</div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-background/20 text-background hover:bg-background hover:text-foreground"
              >
                Request Service Quote
              </Button>
            </div>
            <div className="text-sm text-background/70">
              <div className="font-medium text-red-400">Response: Within 2 Hours</div>
              <div>Nationwide coverage across Kenya</div>
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
