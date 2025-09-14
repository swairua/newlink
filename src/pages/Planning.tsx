import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LabPlanningSection from "@/components/LabPlanningSection";
import SEO from "@/components/SEO";

const Planning = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Lab Planning | Newlink Lab Services"
        description="Compliant laboratory layouts, optimized workflows and integrated utilities from concept to commissioning."
        image="https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F356eaac87e534266a3db84684b4b56a2?format=webp&width=1200"
      />
      <Navigation />
      <section className="relative">
        <div className="h-72 md:h-96 w-full overflow-hidden">
          <img src="https://www.burdinola.com/img/burdinola-lab-planning-disenamos-tu-laboratorio.jpg" alt="Lab Planning" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Lab Planning</h1>
          <p className="text-white/90 mt-2 max-w-3xl">We design your laboratory: compliant layouts, optimized workflows and integrated utilities.</p>
        </div>
      </section>
      <LabPlanningSection />
      <Footer />
    </div>
  );
};

export default Planning;
