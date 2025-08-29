import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import ServiceQuoteModal from "./modals/ServiceQuoteModal";

const ImageGallerySection = () => {
  const galleryImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2Fadba5febae5f4dc191263688c2907132?format=webp&width=800",
      alt: "Installed laboratory gas cupboard and worktops",
      title: "Precision Equipment Service",
      description: "Expert maintenance of analytical instruments"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F3ec06b2425894bcb8e101743fb5119c6?format=webp&width=800",
      alt: "Detailed planning and measurements for lab layouts",
      title: "Sterile Environment Standards",
      description: "GMP compliant service procedures"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F2d574e1bf20d42c6b3bfd379123ff05d?format=webp&width=800",
      alt: "Partitioned lab with frosted glass",
      title: "Quality Analysis",
      description: "Comprehensive testing and validation"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2Fa6cbd484a34e492c9ce6437fdacd3775?format=webp&width=800",
      alt: "Partition wall with framed windows",
      title: "Advanced Technology",
      description: "State-of-the-art laboratory instrumentation"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2Fdc3349e2d7864fbe94ea42a6be7475f1?format=webp&width=800",
      alt: "3D rendered plan for lab counters",
      title: "Analytical Services",
      description: "Professional sample analysis and testing"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F23fa8ca88f6c4061a04b386cdf033046?format=webp&width=800",
      alt: "Service corridor and utility planning",
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
              <ServiceQuoteModal
                trigger={
                  <div className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors cursor-pointer">
                    Request Service Now
                  </div>
                }
                title="Service Request"
              />
              <ServiceQuoteModal
                trigger={
                  <div className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors cursor-pointer">
                    🚨 Emergency: +254 780 165 490
                  </div>
                }
                title="Emergency Service Request"
                isEmergency={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallerySection;
