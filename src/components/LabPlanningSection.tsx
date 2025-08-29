import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Ruler, GitBranch, FileCheck, LayoutGrid, PenTool } from "lucide-react";
import LearnMoreModal from "./modals/LearnMoreModal";

const LabPlanningSection = () => {
  const features = [
    { icon: <Ruler className="w-5 h-5" />, label: "Custom laboratory layouts" },
    { icon: <Workflow className="w-5 h-5" />, label: "Workflow & process mapping" },
    { icon: <FileCheck className="w-5 h-5" />, label: "Regulatory & safety compliance" },
    { icon: <LayoutGrid className="w-5 h-5" />, label: "Space optimization & utilities" },
    { icon: <PenTool className="w-5 h-5" />, label: "3D visualization & modeling" },
  ];

  return (
    <section id="planning" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="text-sm px-4 py-2">Lab Planning</Badge>
          <h2 className="text-3xl md:text-4xl font-bold">We design your laboratory</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            At Newlink Lab Services we carry out studies for complex laboratory developments and installations,
            considering regulations, workflows, processes and equipment in a joint and integrated way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40">
                <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  {f.icon}
                </div>
                <span className="text-sm md:text-base">{f.label}</span>
              </div>
            ))}

            <div className="pt-2">
              <LearnMoreModal
                trigger={<Button variant="outline">Learn more about planning</Button>}
                type="service"
                title="Laboratory Planning & Design"
                data={{
                  title: "Laboratory Planning & Design",
                  description:
                    "Integrated planning that aligns compliance, safety and productivity for new and refurbished labs.",
                  features: features.map((f) => f.label),
                  category: "construction",
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2Fdc3349e2d7864fbe94ea42a6be7475f1?format=webp&width=800"
                alt="3D rendered lab plan"
                className="w-full h-40 object-cover"
              />
              <CardHeader className="pb-2"><CardTitle className="text-base">3D Design</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Visualize layouts before construction</CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F23fa8ca88f6c4061a04b386cdf033046?format=webp&width=800"
                alt="Lab partition and service corridor design"
                className="w-full h-40 object-cover"
              />
              <CardHeader className="pb-2"><CardTitle className="text-base">Utilities & Flow</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Plan gas, power, HVAC and movement</CardContent>
            </Card>
            <Card className="overflow-hidden col-span-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2Fe6abbe4e5dea4339bed3dc71bd91d53d?format=webp&width=800"
                alt="Shelving and storage planning"
                className="w-full h-48 object-cover"
              />
              <CardHeader className="pb-2"><CardTitle className="text-base">Storage & Safety</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">Optimize storage, zones and safety routes</CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabPlanningSection;
