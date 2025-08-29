import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Wind, ShieldCheck, Gauge, Activity } from "lucide-react";
import LearnMoreModal from "./modals/LearnMoreModal";

const GasCupboardsSection = () => {
  const features = [
    { icon: <ShieldCheck className="w-5 h-5" />, text: "EN14175 compliant containment" },
    { icon: <Gauge className="w-5 h-5" />, text: "High efficiency airflow" },
    { icon: <Activity className="w-5 h-5" />, text: "Energy-saving motors & controls" },
    { icon: <Wind className="w-5 h-5" />, text: "Ducted and ductless options" },
  ];

  return (
    <section id="gas-cupboards" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="text-sm px-4 py-2">Gas Cupboards</Badge>
          <h2 className="text-3xl md:text-4xl font-bold">New range of fume display cases</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">The ultimate in safety and efficiency for hazardous chemical handling and extraction.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden border">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2Fadba5febae5f4dc191263688c2907132?format=webp&width=1200"
              alt="Installed laboratory gas cupboard and worktops"
              className="w-full h-80 object-cover"
            />
          </div>
          <div>
            <div className="space-y-3 mb-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">{f.icon}</div>
                  <span className="text-sm md:text-base">{f.text}</span>
                </div>
              ))}
            </div>
            <LearnMoreModal
              trigger={<Button variant="outline">Learn more</Button>}
              type="service"
              title="Gas Cupboards & Fume Hoods"
              data={{
                title: "Gas Cupboards & Fume Hoods",
                description: "High containment solutions with low energy consumption and robust safety systems.",
                features: features.map((f) => f.text),
                category: "construction",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GasCupboardsSection;
