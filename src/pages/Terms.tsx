import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Terms of Service | Newlink Lab Services"
        description="Terms of Service for Newlink Lab Services Limited."
        noIndex={true}
      />
      <Navigation />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: 14 September 2025</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>1. Agreement</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                These Terms govern your use of our website and engagement of Newlink Lab Services Limited for
                laboratory services, including service & repair, preventive maintenance, installation and qualification,
                and laboratory construction & fit‑out. By requesting a quote or service, you agree to these Terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Services and Orders</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>Quotes are based on information provided and are valid for the stated period.</li>
                <li>Orders are confirmed upon written acceptance (email or PO) and, where applicable, deposit receipt.</li>
                <li>We may substitute equivalent parts subject to OEM or compliance requirements.</li>
                <li>Documentation (e.g., IQ/OQ/PQ) is provided for qualifying services as specified in the quote.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Customer Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide accurate equipment details, site access, utilities and safety information.</li>
                <li>Ensure the work area is safe and compliant (e.g., permits, EHS procedures) for our technicians.</li>
                <li>Back up data and remove confidential samples/materials prior to service where applicable.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Scheduling, Fees and Payments</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>We schedule services based on urgency and availability; emergency services may incur surcharges.</li>
                <li>Prices exclude taxes/duties unless specified. Payment terms are as stated on the quotation/invoice.</li>
                <li>Late payments may accrue interest and collection costs as permitted by law.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Warranties and Liability</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>We warrant services will be performed with reasonable skill and care.</li>
                <li>OEM parts carry manufacturers’ warranties where applicable.</li>
                <li>
                  To the maximum extent permitted by law, we are not liable for indirect, consequential or incidental
                  losses; our aggregate liability is limited to amounts paid for the relevant services.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Compliance, IP and Confidentiality</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>Both parties will comply with applicable laws and safety requirements.</li>
                <li>We retain IP in our materials, procedures and documentation unless otherwise agreed.</li>
                <li>Each party will protect confidential information disclosed for the purpose of the services.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                We process personal data according to our Privacy Policy. By using our site or services, you consent to
                such processing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Termination</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                Either party may terminate for material breach not cured within a reasonable period or as otherwise
                allowed by law or the applicable quotation/contract.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Governing Law and Disputes</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                These Terms are governed by the laws of Kenya. Disputes shall be resolved through good‑faith
                negotiations, and if unresolved, by the competent courts in Nairobi, Kenya.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Changes and Contact</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                We may update these Terms from time to time. For questions, contact info@newlinklabservices.co.ke or
                call +254 780 165 490.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Terms;
