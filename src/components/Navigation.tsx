import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import ServiceQuoteModal from "./modals/ServiceQuoteModal";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Build", href: "#planning", children: [
      { name: "Lab Planning", href: "#planning", icon: "Layout" },
      { name: "Safer labs", href: "#safety", icon: "Shield" },
      { name: "Gas Cupboards", href: "#gas-cupboards", icon: "Wind" },
      { name: "Projects", href: "#projects", icon: "Layout" },
      { name: "Services", href: "#services", icon: "Wrench" },
      { name: "Blog", href: "#blog", icon: "Book" },
    ]},
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-background/70 backdrop-blur-md border-b sticky top-0 z-50 w-full overflow-visible">
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
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-300 px-2 py-2 text-sm font-medium whitespace-nowrap"
                  >
                    {item.name}
                    {item.children && (
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/></svg>
                    )}
                  </a>
                  {item.children && (
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 mt-2 w-[520px] max-w-[92vw] bg-background border rounded-xl shadow-xl p-4 transition-all z-[60] origin-top-right">
                      <div className="grid grid-cols-2 gap-3">
                        {item.children.map((child) => (
                          <a key={child.name} href={child.href} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50">
                            {/* simple icon set via inline svg based on name */}
                            <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                              {child.icon === "Layout" && (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>)}
                              {child.icon === "Shield" && (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>)}
                              {child.icon === "Wind" && (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12h13a4 4 0 100-8"/><path d="M3 20h9a4 4 0 110-8"/></svg>)}
                              {child.icon === "Wrench" && (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14.7 6.3a4 4 0 01-5.66 5.66L3 18l3 3 6.04-6.04A4 4 0 1014.7 6.3z"/></svg>)}
                              {child.icon === "Book" && (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M4 4v15.5A2.5 2.5 0 006.5 22H20V6a2 2 0 00-2-2H6.5A2.5 2.5 0 004 6.5z"/></svg>)}
                            </div>
                            <div>
                              <div className="font-medium text-sm">{child.name}</div>
                              <div className="text-xs text-muted-foreground">{child.name === 'Lab Planning' ? 'Layouts & compliance' : child.name === 'Safer labs' ? 'Furniture & extraction' : child.name === 'Gas Cupboards' ? 'Fume hoods & safety' : child.name === 'Services' ? 'Repair & maintenance' : 'Articles & updates'}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          • {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
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
