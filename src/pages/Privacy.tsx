import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Privacy Policy | Newlink Lab Services"
        description="Privacy Policy for Newlink Lab Services Limited."
        noIndex={true}
      />
      <Navigation />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: 14 September 2025</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Who we are</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Newlink Lab Services Limited ("we", "our", "us") provides laboratory equipment service,
                maintenance, installation, qualification and laboratory construction & fit‑out services in Kenya.
              </p>
              <p>
                Contact: info@newlinklabservices.co.ke • P.O Box 36294‑00200, Nairobi, Kenya • +254 780 165 490
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information we collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Contact details (name, company, email, phone) when you request quotes or service.</li>
                <li>Service request details (equipment type, model/serial, issue description, urgency).</li>
                <li>Business and billing information needed to provide services and issue invoices.</li>
                <li>Technical, usage and device data collected by our website for security and analytics.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How we use your information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>To respond to inquiries, provide quotations and perform contracted services.</li>
                <li>To schedule visits, communicate updates and manage customer accounts.</li>
                <li>To comply with legal, safety and quality documentation requirements (e.g., IQ/OQ/PQ records).</li>
                <li>To improve our website, services and customer experience.</li>
              </ul>
              <p>Legal bases: performance of a contract, legitimate interests, and compliance with legal obligations.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sharing and international transfers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                We may share data with trusted service providers (e.g., logistics, OEM spare‑parts suppliers,
                IT and accounting partners) under confidentiality terms. We do not sell personal data.
              </p>
              <p>
                Where data is processed outside your country, we use appropriate safeguards consistent with
                applicable law.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Retention, security and your rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>We retain records only as long as necessary for the purposes above and legal requirements.</li>
                <li>We use reasonable technical and organizational measures to protect information.</li>
                <li>You may request access, correction, deletion, or objection/restriction to processing where applicable.</li>
              </ul>
              <p>
                To exercise rights or raise questions, contact info@newlinklabservices.co.ke. For emergencies: info@newlinklabservices.co.ke.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies and analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Our site may use strictly necessary cookies and basic analytics to understand usage and improve
                performance. You can manage cookies through your browser settings.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                We may update this Policy to reflect changes in our practices or legal requirements. Material
                changes will be indicated by an updated date at the top of this page.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Privacy;
