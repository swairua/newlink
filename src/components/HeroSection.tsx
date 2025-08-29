import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckCircle, Mail } from "lucide-react";
import ServiceQuoteModal from "./modals/ServiceQuoteModal";

const bgImages = [
  "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2Fadba5febae5f4dc191263688c2907132?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F3ec06b2425894bcb8e101743fb5119c6?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F2d574e1bf20d42c6b3bfd379123ff05d?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2Fa6cbd484a34e492c9ce6437fdacd3775?format=webp&width=1600",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % bgImages.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background slider */}
      <div className="absolute inset-0">
        {bgImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Laboratory construction and fit-out"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.08%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                🚨 24/7 Emergency Service Available
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Multi-Vendor Laboratory
                </span>
                <br />
                <span className="text-foreground">Equipment Service & Repair</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Fast, reliable maintenance and repair for HPLC, GC, LC-MS, spectrophotometers, incubators,
                autoclaves and all laboratory instrumentation. Certified technicians dispatched within 2 hours.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-sm">Agilent, Shimadzu, Thermo, Waters</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-sm">IQ/OQ/PQ Qualification Services</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-sm">Response Within 2 Hours</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-sm">Nationwide Coverage Kenya</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <ServiceQuoteModal
                trigger={
                  <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                    🚨 Emergency Service Now
                  </Button>
                }
                title="Emergency Service Request"
                isEmergency={true}
              />
              <ServiceQuoteModal
                trigger={
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    Request Quote
                  </Button>
                }
                title="Service Quote Request"
                isEmergency={false}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Emergency & Service</p>
                  <p className="font-medium">+254 780 165 490</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <p className="font-medium">info@newlinklabservices.co.ke</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden border">
              <img
                src="https://images.pexels.com/photos/8940355/pexels-photo-8940355.jpeg"
                alt="Laboratory technician working on precision equipment"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"></div>
              <div className="relative p-8 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-primary">Equipment We Service</h3>
                  <p className="text-muted-foreground">Multi-vendor support & certified technicians</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Instrument Models</div>
                  </div>
                  <div className="p-4 bg-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">15+</div>
                    <div className="text-sm text-muted-foreground">OEM Brands</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm">HPLC/LC-MS Systems</span>
                    <Badge variant="secondary">✓ Supported</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm">GC & Spectrophotometers</span>
                    <Badge variant="secondary">✓ Supported</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm">Incubators & Autoclaves</span>
                    <Badge variant="secondary">✓ Supported</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
