import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="relative">
        <div className="h-72 md:h-96 w-full overflow-hidden">
          <img src="https://www.burdinola.com/data/casos/25-img-biopole-sa-edificio-se-c-90212.jpg" alt="Projects" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Projects</h1>
          <p className="text-white/90 mt-2 max-w-3xl">Integrated laboratory projects delivered end‑to‑end.</p>
        </div>
      </section>
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
