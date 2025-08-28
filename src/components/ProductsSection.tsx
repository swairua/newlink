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
      { name: "Photometer 8000", description: "Advanced photometric analysis" },
      { name: "Photometer 7500", description: "Professional water testing" },
      { name: "Photometer 7100", description: "Portable testing solutions" },
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

  return (
    <section id="products" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Our Products
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Comprehensive Laboratory Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We supply a wide range of laboratory equipment, chemicals, and instruments 
            for research, medical, and industrial applications.
          </p>
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
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center space-y-6">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We work with leading manufacturers to provide custom laboratory solutions 
              tailored to your specific requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero">
                Request Custom Quote
              </Button>
              <Button variant="outline">
                Download Product Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;