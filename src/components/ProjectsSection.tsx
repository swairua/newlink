import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const projects = [
  {
    title: "Life Sciences Campus",
    subtitle: "Integrated research facility",
    location: "Nairobi, Kenya",
    image: "https://images.pexels.com/photos/33619257/pexels-photo-33619257.png",
    description:
      "Design & build project with flexible laboratory layouts, fume extraction and service systems.",
  },
  {
    title: "Pharmaceutical Facility",
    subtitle: "GMP production & QC labs",
    location: "Eldoret, Kenya",
    image: "https://images.pexels.com/photos/1385056/pexels-photo-1385056.jpeg",
    description:
      "Cleanrooms, HVAC, gas and vacuum networks, validation and commissioning of critical utilities.",
  },
  {
    title: "Women’s Health Research Center",
    subtitle: "Clinical & analytical labs",
    location: "Mombasa, Kenya",
    image: "https://images.pexels.com/photos/18471568/pexels-photo-18471568.jpeg",
    description:
      "Turnkey fit‑out with laboratory furniture, safety equipment and instrument installation.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="text-sm px-4 py-2">Case Studies</Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Integrated Laboratory Projects</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Safe, efficient laboratories delivered end‑to‑end: design & build, cleanrooms, utilities and fit‑out.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <Card key={p.title} className="relative overflow-hidden group border">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-5">
                <div className="text-sm text-muted-foreground mb-1">{p.subtitle}</div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <div className="text-sm text-muted-foreground mb-3">{p.location}</div>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
