import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import SEO from "@/components/SEO";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Lab Services & Repair | Newlink Lab Services"
        description="Service & repair, preventive maintenance, installation and qualification for laboratory equipment."
        image="https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F356eaac87e534266a3db84684b4b56a2?format=webp&width=1200"
      />
      <Navigation />
      <section className="relative">
        <div className="h-72 md:h-96 w-full overflow-hidden">
          <img src="https://www.burdinola.com/img/burdinola-servicios.jpg" alt="Services" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Services</h1>
          <p className="text-white/90 mt-2 max-w-3xl">Service & repair, preventive maintenance, installation and qualification.</p>
        </div>
      </section>
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default ServicesPage;
