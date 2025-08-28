import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Wrench, 
  Settings, 
  Shield, 
  Clock, 
  CheckCircle2, 
  Users,
  Microscope,
  Beaker,
  FlaskConical,
  Thermometer
} from "lucide-react";

const ServicesSection = () => {
  const mainServices = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "24/7 Emergency Repair",
      description: "Certified technicians dispatched within 2 hours for critical equipment failures across all major brands.",
      features: ["2-hour response time", "Multi-vendor support", "Genuine OEM parts", "Same-day resolution"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Preventive Maintenance",
      description: "GMP compliant PM programs with IQ/OQ/PQ qualification services to meet regulatory requirements.",
      features: ["Annual maintenance contracts", "Performance qualification", "Compliance documentation", "Scheduled calibration"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Installation & Qualification",
      description: "Complete installation, validation, and qualification services for new laboratory instrumentation.",
      features: ["DQ/IQ/OQ/PQ services", "System commissioning", "User training programs", "Compliance validation"]
    }
  ];

  const equipmentTypes = [
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Chromatography Systems",
      items: ["HPLC & UHPLC", "GC & GC-MS", "LC-MS/MS", "Ion Chromatography"]
    },
    {
      icon: <Beaker className="w-6 h-6" />,
      title: "Spectroscopy Equipment",
      items: ["UV-Vis Spectrophotometers", "FTIR Spectrometers", "Atomic Absorption", "ICP-MS"]
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Environmental Chambers",
      items: ["Incubators & Ovens", "Stability Chambers", "Autoclaves", "Refrigerators & Freezers"]
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "General Lab Equipment",
      items: ["Balances & Scales", "Centrifuges", "Water Systems", "Dissolution Testers"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Complete Laboratory Service Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional maintenance and repair services for all brands and types of laboratory equipment, 
            backed by years of experience and technical expertise.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Manufacturer Support */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Supported Manufacturers</h3>
            <p className="text-muted-foreground">
              We service equipment from all major laboratory instrument manufacturers
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {["Agilent", "Shimadzu", "Thermo Fisher", "Waters", "PerkinElmer", "Bruker", "Applied Biosystems", "Bio-Rad", "Eppendorf", "Mettler Toledo", "Sartorius", "Hach"].map((brand, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-300">
                <div className="font-medium text-sm">{brand}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Types */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Instrumentation Categories</h3>
            <p className="text-muted-foreground">
              Expert service for all categories of analytical and general laboratory equipment
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-3">
                    {type.icon}
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {type.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Service Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">🚨 Emergency Service Available</h3>
            <p className="text-white/90 text-lg">Critical equipment failure? Our certified technicians respond within 2 hours</p>
            <div className="grid sm:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold mb-2">2 Hours</div>
                <div className="text-white/80">Emergency Response</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-white/80">Instrument Models</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8">
              🚨 Emergency Service
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Request Quote
            </Button>
          </div>
          <p className="text-muted-foreground">Call +254 780 165 490 for immediate assistance</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
