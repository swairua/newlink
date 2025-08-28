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
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact Our Service Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to get started? Contact us today for professional laboratory equipment 
            maintenance and repair services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Request Service Quote</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input type="email" placeholder="john.doe@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Organization</label>
                <Input placeholder="Your Company Name" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Service Type</label>
                <select className="w-full p-2 border border-input rounded-md bg-background">
                  <option>Emergency Repair</option>
                  <option>Preventive Maintenance</option>
                  <option>Equipment Installation</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Please describe your equipment and service requirements..."
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-primary" />
                  <span>Email Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Send us an email and we'll respond within 24 hours.
                </p>
                <div className="space-y-2">
                  <div className="font-medium">info@newlinklabservices.co.ke</div>
                  <div className="text-sm text-muted-foreground">General inquiries and support</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>Visit Our Office</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Come visit our office and laboratory for in-person consultations.
                </p>
                <div className="space-y-1">
                  <div className="font-medium">Nairobi, Kenya</div>
                  <div className="text-sm text-muted-foreground">
                    Professional laboratory services nationwide
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <span>Service Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emergency Service</span>
                    <span className="font-medium text-secondary">24/7 Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Regular Hours</span>
                    <span className="font-medium">Mon-Fri: 8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Weekend</span>
                    <span className="font-medium">Sat: 9:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Emergency Service</h3>
              <p className="text-white/80 mb-4">
                Need immediate assistance? Our emergency service team is available 24/7 
                for critical laboratory equipment failures.
              </p>
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Call Emergency Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;