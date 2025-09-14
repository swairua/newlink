import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceQuoteModal from "@/components/modals/ServiceQuoteModal";
import ContactModal from "@/components/modals/ContactModal";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
            <p className="text-muted-foreground">We respond within 2 hours during business times. Emergency support is 24/7.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>+254 780 165 490</span></div>
                <div className="flex items-center gap-2"><Mail className="w-4 h-4" /><span>info@newlinklabservices.co.ke</span></div>
                <div className="flex items-center gap-2"><Mail className="w-4 h-4" /><span className="text-red-600">info@newlinklabservices.co.ke</span></div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>P.O Box 36294‑00200, Nairobi, Kenya</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>Mon–Fri 8:00–18:00 • Emergency 24/7</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Request Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ServiceQuoteModal
                  trigger={<Button variant="hero" className="w-full">🚨 Emergency Service</Button>}
                  title="Emergency Service Request"
                  isEmergency={true}
                />
                <ServiceQuoteModal
                  trigger={<Button variant="outline" className="w-full">Regular Service Request</Button>}
                  title="Service Request"
                  isEmergency={false}
                />
                <ContactModal
                  trigger={<Button variant="ghost" className="w-full">General Inquiry</Button>}
                  title="General Contact"
                  purpose="General Inquiry"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
