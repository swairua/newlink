import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Mail, MapPin, Clock } from "lucide-react";
import ServiceQuoteModal from "./modals/ServiceQuoteModal";

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
          <div className="space-y-6">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Quick Service Request</CardTitle>
                <p className="text-muted-foreground">
                  Click below to open our service request form. We respond within 2 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <ServiceQuoteModal
                    trigger={
                      <Button variant="hero" size="lg" className="w-full">
                        🚨 Emergency Service Request
                      </Button>
                    }
                    title="Emergency Service Request"
                    isEmergency={true}
                  />
                  <ServiceQuoteModal
                    trigger={
                      <Button variant="outline" size="lg" className="w-full">
                        Regular Service Request
                      </Button>
                    }
                    title="Service Request"
                    isEmergency={false}
                  />
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">What to Include:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Equipment type and manufacturer</li>
                    <li>• Model and serial numbers</li>
                    <li>• Detailed problem description</li>
                    <li>• Urgency level and preferred service time</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

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
