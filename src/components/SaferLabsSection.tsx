import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Shield, Camera, Box, Wrench, Layers, Package, Wind } from "lucide-react";
import LearnMoreModal from "./modals/LearnMoreModal";

const items = [
  { title: "Gas Cupboards", icon: <Wind className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop" },
  { title: "Display cabinet accessories", icon: <Package className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop" },
  { title: "Nano cameras", icon: <Camera className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1200&auto=format&fit=crop" },
  { title: "Laboratory Tables", icon: <Layers className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1581091870622-7c71da2d47cd?q=80&w=1200&auto=format&fit=crop" },
  { title: "Service Systems", icon: <Wrench className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200&auto=format&fit=crop" },
  { title: "Storage units", icon: <Box className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1612197598285-067fef8cc0df?q=80&w=1200&auto=format&fit=crop" },
  { title: "Other Extraction Equipment", icon: <Wind className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1200&auto=format&fit=crop" },
  { title: "Laboratory Accessories", icon: <Package className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1579154209716-84fae8a87ef4?q=80&w=1200&auto=format&fit=crop" },
];

const SaferLabsSection = () => {
  return (
    <section id="safety" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="text-sm px-4 py-2">Safer labs</Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Everything you need to make your lab safe and efficient</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Engineered furniture, fume extraction, monitoring and accessories designed for safety, ergonomics and efficiency.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card key={item.title} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-28 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-primary">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">{item.icon}</div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <LearnMoreModal
                  trigger={<Button variant="outline" size="sm" className="w-full">Learn More</Button>}
                  type="product"
                  title={item.title}
                  data={{
                    name: item.title,
                    description: "Certified components and systems for modern laboratories ensuring performance and safety",
                  }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaferLabsSection;
