import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Settings, ClipboardCheck, Cpu, Users, GraduationCap } from "lucide-react";
import LearnMoreModal from "./modals/LearnMoreModal";

const services = [
  { title: "Verification", icon: <ClipboardCheck className="w-5 h-5" />, desc: "Instrument verification and IQ/OQ/PQ qualification." },
  { title: "Maintenance", icon: <Settings className="w-5 h-5" />, desc: "Preventive maintenance plans for uptime and compliance." },
  { title: "Formation", icon: <GraduationCap className="w-5 h-5" />, desc: "User training and best-practice SOP development." },
  { title: "SAT", icon: <Users className="w-5 h-5" />, desc: "Site Acceptance Testing and commissioning." },
  { title: "IoT Lab", icon: <Cpu className="w-5 h-5" />, desc: "Remote monitoring, alerts and utilization analytics." },
];

const NewlinkLabServiceSection = () => {
  return (
    <section id="newlinklab-service" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="text-sm px-4 py-2">NewlinkLab Service</Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Keep your laboratory up to date in the best safety conditions</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">Lifecycle services that ensure your laboratory performs safely and productively every day.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">{s.icon}</div>
                <CardTitle className="text-base">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p className="mb-4">{s.desc}</p>
                <LearnMoreModal
                  trigger={<Button variant="outline" size="sm" className="w-full">Learn More</Button>}
                  type="service"
                  title={`Learn more: ${s.title}`}
                  data={{ title: s.title, description: s.desc, features: [s.desc], category: "construction", image: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F3ec06b2425894bcb8e101743fb5119c6?format=webp&width=800" }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewlinkLabServiceSection;
