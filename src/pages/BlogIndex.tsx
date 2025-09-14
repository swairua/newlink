import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";

const BlogIndex = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="relative">
        <div className="h-56 md:h-72 w-full overflow-hidden">
          <img src="https://www.burdinola.com/img/burdinola-productos.jpg" alt="Blog" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Insights</h1>
          <p className="text-white/90 mt-2 max-w-3xl">Articles and updates on laboratory planning, safety and services.</p>
        </div>
      </section>
      <BlogSection />
      <Footer />
    </div>
  );
};

export default BlogIndex;
