import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Target, Eye, Award, Users } from "lucide-react";
import LearnMoreModal from "./modals/LearnMoreModal";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Who We Are
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-primary">NEWLINK LAB SERVICES LIMITED</span>
              </h2>
              <p className="text-lg text-secondary font-medium italic">
                Orchestrating Scientific Solutions
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                NEWLINK LAB SERVICES LIMITED welcomes you to our scientific world, 
                where we believe in quality and relationship in terms of competitiveness 
                and services, the use of modern technology in the operations of any 
                modern business cannot be emphasized enough.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It therefore becomes imperative for partnership by both public and private 
                sectors to not only embrace technology but continuously upgrade their operations 
                to enhance productivity.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-primary" />
                    <CardTitle className="text-lg">Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    To provide affordable, flexible, reliable and high quality 
                    solutions to our esteemed clients.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <Eye className="w-6 h-6 text-secondary" />
                    <CardTitle className="text-lg">Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    To be a respectable distributor that exceed clients expectations 
                    by providing high quality, cost effective and timely solutions.
                  </p>
                </CardContent>
              </Card>
            </div>

            <LearnMoreModal
              trigger={
                <Button variant="outline" size="lg">
                  Learn More About Our Services
                </Button>
              }
              type="service"
              title="About Newlink Lab Services"
              data={{
                title: "Professional Laboratory Services",
                description: "Comprehensive equipment maintenance, repair, and support services",
                icon: <Award className="w-8 h-8" />,
                features: [
                  "ISO 9001:2015 certified quality management",
                  "GMP compliant documentation and procedures",
                  "Multi-vendor equipment support",
                  "24/7 emergency response service",
                  "Certified and trained technicians",
                  "Nationwide service coverage"
                ]
              }}
            />
          </div>

          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img
                src="https://images.pexels.com/photos/3862623/pexels-photo-3862623.jpeg"
                alt="Focused laboratory engineer analyzing equipment"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Expert Laboratory Services</h3>
                <p className="text-white/90">Professional equipment maintenance by certified technicians</p>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-0">
              <CardHeader>
                <CardTitle className="text-xl text-center">Our Objectives</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our primary objective is to serve our customers in a way that is remarkably 
                  different from our competitors so that we do not just supply the orders but 
                  do it in a way that leaves a positive impression on them.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By so doing, we intend to make ourselves the company of choice to any client 
                  we come across. Our long-term objective is to build a market that is not entirely 
                  based on price but on customer satisfaction, the ultimate goal being to build 
                  a line so unique and promote it so effectively that customers will be willing 
                  to pay the price.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
