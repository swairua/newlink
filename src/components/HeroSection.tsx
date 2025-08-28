import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckCircle, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Professional Laboratory Services Since 2010
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Laboratory Equipment
                </span>
                <br />
                <span className="text-foreground">Maintenance & Repair</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Professional maintenance and repair services for all brands and types of laboratory equipment. 
                We specialize in scientific apparatus, industrial chemicals, and research equipment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-sm">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-sm">GMP Compliant Documentation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-sm">Multi-Brand Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-sm">ISO Quality Standards</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Request Service Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Our Products
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t">
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
            <div className="relative bg-card rounded-2xl shadow-2xl p-8 border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"></div>
              <div className="relative space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-primary">Get Instant Quote</h3>
                  <p className="text-muted-foreground">Professional service within 24 hours</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">3,000+</div>
                    <div className="text-sm text-muted-foreground">Satisfied Customers</div>
                  </div>
                  <div className="p-4 bg-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm">Emergency Service</span>
                    <Badge variant="secondary">24/7 Available</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm">Response Time</span>
                    <Badge variant="secondary">Within 2 Hours</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm">Service Coverage</span>
                    <Badge variant="secondary">Nationwide</Badge>
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