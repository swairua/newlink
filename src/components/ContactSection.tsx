import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Mail, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-8">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            🚨 Emergency Service Available 24/7
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get Laboratory Equipment Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Emergency repair needed? Call +254 780 165 490 for immediate response.
            For routine service, use the form below.
          </p>
        </div>

        {/* Emergency Service Banner */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white mb-12 text-center">
          <h3 className="text-xl font-bold mb-2">🚨 EMERGENCY SERVICE</h3>
          <p className="mb-4">Critical equipment failure? Our technicians respond within 2 hours</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2">
              <span className="font-semibold">Call:</span>
              <span className="text-2xl font-bold">+254 780 165 490</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="font-semibold">Email:</span>
              <span>emergency@newlinklabservices.co.ke</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Service Request Form</CardTitle>
              <p className="text-muted-foreground">
                Provide equipment details for faster service. We respond within 2 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Contact Name</label>
                  <Input placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Organization</label>
                  <Input placeholder="Lab/Hospital/University" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input placeholder="+254 7XX XXX XXX" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Urgency Level</label>
                <select className="w-full p-2 border border-input rounded-md bg-background">
                  <option>🚨 Emergency (Equipment Down)</option>
                  <option>⚡ Urgent (Within 24 hours)</option>
                  <option>📅 Routine (Within 1 week)</option>
                  <option>💡 Quote/Consultation</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Equipment Type</label>
                  <select className="w-full p-2 border border-input rounded-md bg-background">
                    <option>HPLC/UHPLC System</option>
                    <option>GC/GC-MS System</option>
                    <option>LC-MS/MS System</option>
                    <option>Spectrophotometer</option>
                    <option>Incubator/Oven</option>
                    <option>Autoclave</option>
                    <option>Balance/Scale</option>
                    <option>Centrifuge</option>
                    <option>Other Laboratory Equipment</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Manufacturer</label>
                  <select className="w-full p-2 border border-input rounded-md bg-background">
                    <option>Agilent Technologies</option>
                    <option>Shimadzu</option>
                    <option>Thermo Fisher Scientific</option>
                    <option>Waters Corporation</option>
                    <option>PerkinElmer</option>
                    <option>Bruker</option>
                    <option>Other Manufacturer</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Model Number</label>
                  <Input placeholder="e.g., 1260 Infinity, GC-2030" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Serial Number</label>
                  <Input placeholder="Equipment serial number" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Issue Description</label>
                <Textarea
                  placeholder="Describe the problem: error codes, symptoms, when it started..."
                  rows={4}
                />
              </div>

              <Button variant="hero" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-red-700">
                  <span className="text-2xl">🚨</span>
                  <span>Emergency Hotline</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-600 mb-4 font-medium">
                  Critical equipment failure? Call immediately for 2-hour response.
                </p>
                <div className="space-y-2">
                  <div className="font-bold text-xl text-red-700">+254 780 165 490</div>
                  <div className="text-sm text-red-600">Available 24/7 for emergencies</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-primary" />
                  <span>Email Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Send service requests and we'll respond within 2 hours.
                </p>
                <div className="space-y-2">
                  <div className="font-medium">info@newlinklabservices.co.ke</div>
                  <div className="text-sm text-muted-foreground">Service requests & general inquiries</div>
                  <div className="font-medium text-red-600">emergency@newlinklabservices.co.ke</div>
                  <div className="text-sm text-muted-foreground">Emergency service requests</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>Service Coverage</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Nationwide service coverage across Kenya with local technicians.
                </p>
                <div className="space-y-1">
                  <div className="font-medium">P.O Box 36294-00200, Nairobi, Kenya</div>
                  <div className="text-sm text-muted-foreground">
                    Serving labs nationwide: Nairobi, Mombasa, Kisumu, Eldoret
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <span>Response Times</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emergency Response</span>
                    <span className="font-medium text-red-600">Within 2 Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Routine Service</span>
                    <span className="font-medium">Same/Next Day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quote Response</span>
                    <span className="font-medium">Within 4 Hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
