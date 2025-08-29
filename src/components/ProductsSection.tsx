import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Beaker,
  Microscope,
  FlaskConical,
  Thermometer,
  TestTube,
  Zap,
  Droplets,
  Pill,
  Shield,
  ChevronRight
} from "lucide-react";
import LearnMoreModal from "./modals/LearnMoreModal";
import ServiceQuoteModal from "./modals/ServiceQuoteModal";
import ContactModal from "./modals/ContactModal";

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("general");

  const categories = [
    { id: "general", name: "General Supplies", icon: <Beaker className="w-4 h-4" /> },
    { id: "equipment", name: "Lab Equipment", icon: <Microscope className="w-4 h-4" /> },
    { id: "instruments", name: "Instruments", icon: <FlaskConical className="w-4 h-4" /> },
    { id: "testing", name: "Testing Kits", icon: <TestTube className="w-4 h-4" /> },
    { id: "reagents", name: "Reagents", icon: <Droplets className="w-4 h-4" /> },
    { id: "pharma", name: "Pharmaceuticals", icon: <Pill className="w-4 h-4" /> },
  ];

  const products = {
    general: [
      { name: "General Supplies", description: "Basic laboratory consumables and supplies" },
      { name: "Laboratory Equipment", description: "Essential lab equipment for daily operations" },
      { name: "Laboratory Chemicals", description: "High-grade chemicals for research" },
      { name: "Industrial Chemicals", description: "Industrial-grade chemical solutions" },
      { name: "Research Products", description: "Specialized research equipment and materials" },
      { name: "Biological Products", description: "Biological specimens and media" },
      { name: "Hospital Equipment", description: "Medical and hospital-grade equipment" },
      { name: "Pharmaceutical Items", description: "Pharmaceutical supplies and equipment" }
    ],
    equipment: [
      { name: "Barcode Label Printers", description: "Professional labeling solutions" },
      { name: "Thermal Transfer Ribbons", description: "High-quality printing ribbons" },
      { name: "Barcode Generating Software", description: "Label design and printing software" },
      { name: "Barcode Scanning Devices", description: "Handheld and fixed scanners" },
      { name: "Receipt Papers", description: "Thermal receipt papers" },
      { name: "Ribbons", description: "Printer ribbons and consumables" },
      { name: "Labels and Tags", description: "Various labeling solutions" },
      { name: "Security Devices", description: "Lab security equipment" }
    ],
    instruments: [
      { name: "Universal Incubator", description: "Multi-purpose incubation solutions" },
      { name: "Cooled Storage Incubator", description: "Temperature-controlled storage" },
      { name: "Cooled Incubator", description: "Precision cooling incubation" },
      { name: "Peltier Cooled Incubator", description: "Advanced cooling technology" },
      { name: "CO2 Incubator", description: "Carbon dioxide incubation systems" },
      { name: "Compressor Cooled Incubator", description: "High-capacity cooling" },
      { name: "Vacuum Oven", description: "Vacuum drying solutions" },
      { name: "Universal Oven", description: "General-purpose heating" }
    ],
    testing: [
      { name: "Portable Colorimeter", description: "Field color measurement for water analysis" },
      { name: "Chlorimeter Kit", description: "Free/total chlorine testing kit" },
      { name: "Dissolved Oxygen Meter", description: "Portable DO measurement" },
      { name: "Arsenator", description: "Arsenic detection systems" },
      { name: "Compact Turbidity Meter", description: "Water clarity measurement" },
      { name: "UV-VISIBLE", description: "UV-Visible spectroscopy" },
      { name: "Spectrophotometers", description: "Optical analysis instruments" },
      { name: "Standard Comparators", description: "Visual comparison tools" }
    ],
    reagents: [
      { name: "Reagents & Standards", description: "High-purity analytical reagents" },
      { name: "pH Buffers", description: "Buffer solutions for pH calibration" },
      { name: "Analytical Reagents", description: "Certified analytical standards" },
      { name: "Analytical Standards", description: "Reference standards for analysis" },
      { name: "Volumetric Solutions", description: "Precise volumetric reagents" },
      { name: "General Laboratory Reagents", description: "Common lab chemicals" }
    ],
    pharma: [
      { name: "Microbiology Media", description: "Culture media for microbiology" },
      { name: "MC Conkey, PDA, XLD", description: "Selective culture media" },
      { name: "SDA, Transport Media", description: "Specialized growth media" },
      { name: "Biotechnology Products", description: "Advanced biotech solutions" },
      { name: "Fermentation Products", description: "Fermentation systems and media" }
    ]
  };

  const getProductImage = (name: string) => {
    const k = name.toLowerCase();
    if (k.includes("incubator")) return "https://images.unsplash.com/photo-1581092334651-cfb7a1f4aa69?q=80&w=1200&auto=format&fit=crop";
    if (k.includes("oven")) return "https://images.unsplash.com/photo-1578496781461-5c6ce9a71173?q=80&w=1200&auto=format&fit=crop";
    if (k.includes("vacuum")) return "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop";
    if (k.includes("chromat") || k.includes("spectro")) return "https://images.unsplash.com/photo-1582719478251-2e7a47f64d5c?q=80&w=1200&auto=format&fit=crop";
    if (k.includes("label") || k.includes("barcode")) return "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop";
    if (k.includes("reagent") || k.includes("buffer") || k.includes("chemical")) return "https://images.unsplash.com/photo-1581093458791-9d4ae6b9a9e3?q=80&w=1200&auto=format&fit=crop";
    return "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop";
  };

  return (
    <section id="products" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 mb-16">
          {/* Hero Image Section */}
          <div className="relative rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F3ec06b2425894bcb8e101743fb5119c6?format=webp&width=800"
                alt="Scientists in protective gear analyzing test tubes"
                className="w-full h-64 md:h-80 object-cover"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F2d574e1bf20d42c6b3bfd379123ff05d?format=webp&width=800"
                alt="Laboratory analysis with microscope and glassware"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white text-center">
              <Badge variant="secondary" className="text-sm px-4 py-2 mb-4 bg-white/20 text-white border-white/30">
                Our Products
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive Laboratory Solutions
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                We supply a wide range of laboratory equipment, chemicals, and instruments
                for research, medical, and industrial applications.
              </p>
            </div>
          </div>
        </div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 h-auto bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center space-x-2 p-3 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                {category.icon}
                <span className="text-xs font-medium">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(products).map(([categoryId, items]) => (
            <TabsContent key={categoryId} value={categoryId} className="space-y-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((product, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center justify-between group-hover:text-primary transition-colors">
                        {product.name}
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {product.description}
                      </p>
                      <LearnMoreModal
                        trigger={
                          <Button variant="outline" size="sm" className="w-full">
                            Learn More
                          </Button>
                        }
                        type="product"
                        title={product.name}
                        data={{...product, image: getProductImage(product.name)}}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center space-y-6">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl overflow-hidden">
            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2Fa6cbd484a34e492c9ce6437fdacd3775?format=webp&width=800"
                alt="Laboratory engineer analyzing modern equipment"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Custom Laboratory Solutions</h3>
                  <p className="text-lg text-white/90">Tailored equipment and service packages</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We work with leading manufacturers to provide custom laboratory solutions
                tailored to your specific requirements and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ServiceQuoteModal
                  trigger={
                    <Button variant="hero">
                      Request Custom Quote
                    </Button>
                  }
                  title="Custom Product Quote"
                />
                <ContactModal
                  trigger={
                    <Button variant="outline">
                      Download Product Catalog
                    </Button>
                  }
                  title="Request Product Catalog"
                  purpose="Product Catalog Request"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
