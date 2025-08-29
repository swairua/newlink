import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Shield, Camera, Box, Wrench, Layers, Package, Wind } from "lucide-react";
import LearnMoreModal from "./modals/LearnMoreModal";

const items = [
  { title: "Gas Cupboards", icon: <Wind className="w-5 h-5" />, img: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2Fadba5febae5f4dc191263688c2907132?format=webp&width=800" },
  { title: "Display cabinet accessories", icon: <Package className="w-5 h-5" />, img: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F9af414ebd20648ad942e05d0c896b7d1?format=webp&width=800" },
  { title: "Nano cameras", icon: <Camera className="w-5 h-5" />, img: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F2d574e1bf20d42c6b3bfd379123ff05d?format=webp&width=800" },
  { title: "Laboratory Tables", icon: <Layers className="w-5 h-5" />, img: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2Fe6abbe4e5dea4339bed3dc71bd91d53d?format=webp&width=800" },
  { title: "Service Systems", icon: <Wrench className="w-5 h-5" />, img: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F23fa8ca88f6c4061a04b386cdf033046?format=webp&width=800" },
  { title: "Storage units", icon: <Box className="w-5 h-5" />, img: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2Fdc3349e2d7864fbe94ea42a6be7475f1?format=webp&width=800" },
  { title: "Other Extraction Equipment", icon: <Wind className="w-5 h-5" />, img: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2Fa6cbd484a34e492c9ce6437fdacd3775?format=webp&width=800" },
  { title: "Laboratory Accessories", icon: <Package className="w-5 h-5" />, img: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F74c6c4a711a1457cbba7ffb26da9b4bd?format=webp&width=800" },
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
                    image: item.img,
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
