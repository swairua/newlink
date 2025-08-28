import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const ImageGallerySection = () => {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/8940355/pexels-photo-8940355.jpeg",
      alt: "Laboratory technician adjusting precision equipment",
      title: "Precision Equipment Service",
      description: "Expert maintenance of analytical instruments"
    },
    {
      src: "https://images.pexels.com/photos/5953827/pexels-photo-5953827.jpeg",
      alt: "Professional in sterile laboratory environment",
      title: "Sterile Environment Standards",
      description: "GMP compliant service procedures"
    },
    {
      src: "https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg",
      alt: "Scientists analyzing test tubes in protective gear",
      title: "Quality Analysis",
      description: "Comprehensive testing and validation"
    },
    {
      src: "https://images.pexels.com/photos/3862623/pexels-photo-3862623.jpeg",
      alt: "Engineer analyzing modern laboratory equipment",
      title: "Advanced Technology",
      description: "State-of-the-art laboratory instrumentation"
    },
    {
      src: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg",
      alt: "Scientist analyzing blue liquid with microscope",
      title: "Analytical Services",
      description: "Professional sample analysis and testing"
    },
    {
      src: "https://images.pexels.com/photos/6754844/pexels-photo-6754844.jpeg",
      alt: "Technician working on electronics in engineering lab",
      title: "Technical Support",
      description: "Expert equipment repair and maintenance"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Our Laboratory Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional Laboratory Equipment Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See our certified technicians in action providing expert maintenance, 
            repair, and validation services for laboratory equipment across Kenya.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                  <p className="text-white/90 text-sm">{image.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-white/90 mb-6">
              Contact our expert team for professional laboratory equipment service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Request Service Now
              </a>
              <a 
                href="tel:+254780165490" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                🚨 Emergency: +254 780 165 490
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallerySection;
