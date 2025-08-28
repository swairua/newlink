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
      description: "Experienced service engineers available around the clock for emergency laboratory equipment repairs.",
      features: ["Immediate response", "On-site diagnostics", "Genuine parts", "Warranty coverage"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Preventive Maintenance",
      description: "GMP compliant preventive maintenance services to keep your equipment running at peak performance.",
      features: ["Scheduled inspections", "Performance testing", "Calibration services", "Compliance documentation"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Equipment Installation",
      description: "Professional installation and startup services for new laboratory equipment.",
      features: ["Expert installation", "System integration", "User training", "Validation support"]
    }
  ];

  const equipmentTypes = [
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Analytical Instruments",
      items: ["Spectrophotometers", "Photometers", "Comparators", "pH Meters"]
    },
    {
      icon: <Beaker className="w-6 h-6" />,
      title: "Laboratory Equipment",
      items: ["Incubators", "Ovens", "Centrifuges", "Microscopes"]
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Processing Equipment",
      items: ["Distillers", "Thermal Cyclers", "Shakers", "Hot Plates"]
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Testing & Safety",
      items: ["Test Kits", "Safety Equipment", "Storage Solutions", "Lab Supplies"]
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

        {/* Equipment Types */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Equipment We Service</h3>
            <p className="text-muted-foreground">
              We provide maintenance and repair services for a wide range of laboratory equipment
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

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">3,000+</div>
              <div className="text-white/80">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">200,000+</div>
              <div className="text-white/80">Completed Jobs</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Emergency Support</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Request Service Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;