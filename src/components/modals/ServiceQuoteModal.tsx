import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Badge } from "../ui/badge";
import { Send, CheckCircle } from "lucide-react";

interface ServiceQuoteModalProps {
  trigger: React.ReactNode;
  title?: string;
  isEmergency?: boolean;
}

const ServiceQuoteModal = ({ trigger, title = "Service Request", isEmergency = false }: ServiceQuoteModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    contactName: "",
    organization: "",
    email: "",
    phone: "",
    urgency: isEmergency ? "🚨 Emergency (Equipment Down)" : "📅 Routine (Within 1 week)",
    equipmentType: "",
    manufacturer: "",
    modelNumber: "",
    serialNumber: "",
    description: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (in real implementation, this would send to your backend)
    const emailData = {
      to: "info@newlinklabservices.co.ke",
      subject: `${isEmergency ? "🚨 EMERGENCY" : ""} Service Request - ${formData.equipmentType}`,
      body: `
New Service Request:

Contact Information:
- Name: ${formData.contactName}
- Organization: ${formData.organization}
- Email: ${formData.email}
- Phone: ${formData.phone}

Service Details:
- Urgency: ${formData.urgency}
- Equipment Type: ${formData.equipmentType}
- Manufacturer: ${formData.manufacturer}
- Model Number: ${formData.modelNumber}
- Serial Number: ${formData.serialNumber}

Issue Description:
${formData.description}

${isEmergency ? "⚠️ This is an EMERGENCY request requiring immediate attention!" : ""}
      `
    };

    // In a real implementation, you would send this to your backend
    console.log("Email would be sent to:", emailData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <div className="text-center space-y-4 py-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800">Request Sent Successfully!</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {isEmergency 
                  ? "Our emergency team has been notified and will contact you within 2 hours."
                  : "We've received your service request and will respond within 4 hours."
                }
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-green-800">
                Emergency Hotline: +254 780 165 490
              </p>
              <p className="text-xs text-green-600 mt-1">
                For immediate assistance, call our 24/7 emergency line
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            {isEmergency && <span className="text-red-600">🚨</span>}
            <span>{title}</span>
            {isEmergency && <Badge variant="destructive">Emergency</Badge>}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Contact Name *</label>
              <Input
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Organization *</label>
              <Input
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                placeholder="Lab/Hospital/University"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address *</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number *</label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+254 7XX XXX XXX"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Urgency Level *</label>
            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleInputChange}
              className="w-full p-2 border border-input rounded-md bg-background"
              required
            >
              <option value="🚨 Emergency (Equipment Down)">🚨 Emergency (Equipment Down)</option>
              <option value="⚡ Urgent (Within 24 hours)">⚡ Urgent (Within 24 hours)</option>
              <option value="📅 Routine (Within 1 week)">📅 Routine (Within 1 week)</option>
              <option value="💡 Quote/Consultation">💡 Quote/Consultation</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Equipment Type *</label>
              <select
                name="equipmentType"
                value={formData.equipmentType}
                onChange={handleInputChange}
                className="w-full p-2 border border-input rounded-md bg-background"
                required
              >
                <option value="">Select Equipment Type</option>
                <option value="HPLC/UHPLC System">HPLC/UHPLC System</option>
                <option value="GC/GC-MS System">GC/GC-MS System</option>
                <option value="LC-MS/MS System">LC-MS/MS System</option>
                <option value="Spectrophotometer">Spectrophotometer</option>
                <option value="Incubator/Oven">Incubator/Oven</option>
                <option value="Autoclave">Autoclave</option>
                <option value="Balance/Scale">Balance/Scale</option>
                <option value="Centrifuge">Centrifuge</option>
                <option value="Other Laboratory Equipment">Other Laboratory Equipment</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Manufacturer</label>
              <select
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleInputChange}
                className="w-full p-2 border border-input rounded-md bg-background"
              >
                <option value="">Select Manufacturer</option>
                <option value="Agilent Technologies">Agilent Technologies</option>
                <option value="Shimadzu">Shimadzu</option>
                <option value="Thermo Fisher Scientific">Thermo Fisher Scientific</option>
                <option value="Waters Corporation">Waters Corporation</option>
                <option value="PerkinElmer">PerkinElmer</option>
                <option value="Bruker">Bruker</option>
                <option value="Other Manufacturer">Other Manufacturer</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Model Number</label>
              <Input
                name="modelNumber"
                value={formData.modelNumber}
                onChange={handleInputChange}
                placeholder="e.g., 1260 Infinity, GC-2030"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Serial Number</label>
              <Input
                name="serialNumber"
                value={formData.serialNumber}
                onChange={handleInputChange}
                placeholder="Equipment serial number"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Issue Description *</label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe the problem: error codes, symptoms, when it started..."
              rows={4}
              required
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              variant={isEmergency ? "destructive" : "hero"}
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  {isEmergency ? "Send Emergency Request" : "Send Service Request"}
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceQuoteModal;
