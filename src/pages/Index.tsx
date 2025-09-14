import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LabPlanningSection from "@/components/LabPlanningSection";
import SaferLabsSection from "@/components/SaferLabsSection";
import GasCupboardsSection from "@/components/GasCupboardsSection";
import ServicesSection from "@/components/ServicesSection";
import NewlinkLabServiceSection from "@/components/NewlinkLabServiceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ImageGallerySection from "@/components/ImageGallerySection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Newlink Lab Services | Lab Equipment Service, Planning & Fit-Out (Kenya)"
        description="Laboratory equipment service & repair, preventive maintenance, installation, qualification, and lab planning & fit‑out in Kenya. 24/7 emergency support."
        image="https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F356eaac87e534266a3db84684b4b56a2?format=webp&width=1200"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Newlink Lab Services Limited",
          logo: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F356eaac87e534266a3db84684b4b56a2?format=webp&width=1200",
        }}
      />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LabPlanningSection />
      <SaferLabsSection />
      <GasCupboardsSection />
      <NewlinkLabServiceSection />
      <ProjectsSection />
      <ImageGallerySection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
