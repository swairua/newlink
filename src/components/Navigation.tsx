import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import ServiceQuoteModal from "./modals/ServiceQuoteModal";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-28 lg:h-36 min-w-0">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F356eaac87e534266a3db84684b4b56a2?format=webp&width=800"
                alt="Newlink Lab Services Ltd - Orchestrating Scientific Solutions"
                className="h-16 sm:h-24 lg:h-32 w-auto object-contain max-w-[200px] sm:max-w-[300px] lg:max-w-none"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="flex items-baseline space-x-4 xl:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 px-2 py-2 text-sm font-medium whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Get Started Button */}
          <div className="hidden lg:block flex-shrink-0">
            <ServiceQuoteModal
              trigger={
                <Button variant="hero" size="sm" className="whitespace-nowrap">
                  Get Quote
                </Button>
              }
              title="Service Quote Request"
            />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <ServiceQuoteModal
                  trigger={
                    <Button variant="hero" className="w-full">
                      Get Service Quote
                    </Button>
                  }
                  title="Service Quote Request"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
