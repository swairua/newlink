import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LabPlanningSection from "@/components/LabPlanningSection";
import SaferLabsSection from "@/components/SaferLabsSection";
import GasCupboardsSection from "@/components/GasCupboardsSection";
import ServicesSection from "@/components/ServicesSection";
import NewlinkLabServiceSection from "@/components/NewlinkLabServiceSection";
import ProductsSection from "@/components/ProductsSection";
import ImageGallerySection from "@/components/ImageGallerySection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <LabPlanningSection />
      <SaferLabsSection />
      <GasCupboardsSection />
      <NewlinkLabServiceSection />
      <ProductsSection />
      <ImageGallerySection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
