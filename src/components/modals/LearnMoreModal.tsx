import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

interface LearnMoreModalProps {
  trigger: React.ReactNode;
  type: "service" | "equipment" | "product";
  title: string;
  data: any;
}

const LearnMoreModal = ({ trigger, type, title, data }: LearnMoreModalProps) => {
  const renderServiceContent = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
          {data.icon}
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">{data.title}</h3>
        <p className="text-muted-foreground">{data.description}</p>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold">Key Features:</h4>
        <div className="grid grid-cols-1 gap-3">
          {data.features?.map((feature: string, index: number) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4">
        <h4 className="font-semibold mb-3">Service Specifications:</h4>
        {data?.category === "construction" ? (
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Standards:</span>
              <br />
              <span className="text-muted-foreground">ISO 14644, OSHA, NFPA, WHO GMP</span>
            </div>
            <div>
              <span className="font-medium">Deliverables:</span>
              <br />
              <span className="text-muted-foreground">As-built drawings, validation docs, user training</span>
            </div>
            <div>
              <span className="font-medium">Project Management:</span>
              <br />
              <span className="text-muted-foreground">Single point of contact, phased milestones</span>
            </div>
            <div>
              <span className="font-medium">Timeframes:</span>
              <br />
              <span className="text-muted-foreground">Fast-track and scheduled builds available</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Response Time:</span>
              <br />
              <span className="text-muted-foreground">
                {data.title.includes("Emergency") ? "Within 2 hours" : "Same/Next day"}
              </span>
            </div>
            <div>
              <span className="font-medium">Coverage:</span>
              <br />
              <span className="text-muted-foreground">Nationwide Kenya</span>
            </div>
            <div>
              <span className="font-medium">Technicians:</span>
              <br />
              <span className="text-muted-foreground">Certified professionals</span>
            </div>
            <div>
              <span className="font-medium">Documentation:</span>
              <br />
              <span className="text-muted-foreground">GMP compliant reports</span>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold">Why Choose This Service?</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• Multi-vendor support across all major laboratory equipment brands</p>
          <p>• Certified technicians with extensive training and experience</p>
          <p>• Genuine OEM parts and consumables for reliable repairs</p>
          <p>• Comprehensive documentation for regulatory compliance</p>
          <p>• Flexible service agreements tailored to your needs</p>
        </div>
      </div>
    </div>
  );

  const renderEquipmentContent = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
          {data.icon}
        </div>
        <h3 className="text-xl font-bold text-secondary mb-2">{data.title}</h3>
        <p className="text-muted-foreground">Professional service for {data.title.toLowerCase()}</p>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold">Equipment Categories:</h4>
        <div className="grid grid-cols-1 gap-2">
          {data.items?.map((item: string, index: number) => (
            <div key={index} className="flex items-center space-x-3 p-2 bg-muted/30 rounded">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-lg p-4">
        <h4 className="font-semibold mb-3">Service Capabilities:</h4>
        <div className="space-y-3 text-sm">
          <div className="flex items-center space-x-3">
            <Award className="w-4 h-4 text-secondary" />
            <span>Preventive maintenance programs</span>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="w-4 h-4 text-secondary" />
            <span>Emergency repair services</span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="w-4 h-4 text-secondary" />
            <span>Calibration and validation</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-4 h-4 text-secondary" />
            <span>Installation and commissioning</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold">Supported Manufacturers:</h4>
        <div className="flex flex-wrap gap-2">
          {["Agilent", "Shimadzu", "Thermo Fisher", "Waters", "PerkinElmer", "Bruker"].map((brand) => (
            <Badge key={brand} variant="outline" className="text-xs">
              {brand}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProductContent = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary mb-2">{data.name}</h3>
        <p className="text-muted-foreground">{data.description}</p>
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4">
        <h4 className="font-semibold mb-3">Product Details:</h4>
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-medium">Applications:</span>
            <br />
            <span className="text-muted-foreground">
              Research laboratories, clinical diagnostics, quality control, and educational institutions
            </span>
          </div>
          <div>
            <span className="font-medium">Quality Standards:</span>
            <br />
            <span className="text-muted-foreground">
              ISO certified, GMP compliant, and pharmaceutical grade where applicable
            </span>
          </div>
          <div>
            <span className="font-medium">Support:</span>
            <br />
            <span className="text-muted-foreground">
              Technical support, training, and maintenance services available
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold">Key Benefits:</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• High-quality products from reputable manufacturers</p>
          <p>• Competitive pricing with volume discounts available</p>
          <p>• Fast delivery across Kenya with reliable logistics</p>
          <p>• Technical support and application guidance</p>
          <p>• Flexible payment terms for institutional customers</p>
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-4">
        <h4 className="font-semibold mb-2">Need More Information?</h4>
        <p className="text-sm text-muted-foreground">
          Contact our product specialists for detailed specifications, pricing, and availability.
          We can also provide custom solutions tailored to your specific requirements.
        </p>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (type) {
      case "service":
        return renderServiceContent();
      case "equipment":
        return renderEquipmentContent();
      case "product":
        return renderProductContent();
      default:
        return <div>Content not available</div>;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
};

export default LearnMoreModal;
