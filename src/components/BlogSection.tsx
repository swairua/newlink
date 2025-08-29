import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "Designing Safer Labs: From Planning to Commissioning",
    slug: "designing-safer-labs",
    img: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2Fdc3349e2d7864fbe94ea42a6be7475f1?format=webp&width=800",
    excerpt: "A practical approach to planning, utilities, fume extraction and validation for new laboratories.",
  },
  {
    title: "Fume Hoods & Gas Cupboards: What to Consider",
    slug: "fume-hoods-gas-cupboards",
    img: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2Fadba5febae5f4dc191263688c2907132?format=webp&width=800",
    excerpt: "Key standards, airflow performance and energy considerations when selecting containment.",
  },
  {
    title: "Extending Instrument Uptime with PM & IoT Monitoring",
    slug: "pm-iot-monitoring",
    img: "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F3ec06b2425894bcb8e101743fb5119c6?format=webp&width=800",
    excerpt: "Combining preventive maintenance with remote alerts to reduce downtime and ensure compliance.",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="text-sm px-4 py-2">Insights</Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Guides and insights on laboratory planning, safety and equipment lifecycle.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Card key={p.title} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
              <CardHeader className="pb-2"><CardTitle className="text-lg">{p.title}</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p className="mb-4">{p.excerpt}</p>
                <Button variant="link" className="px-0">Read more <ArrowRight className="ml-1 w-4 h-4" /></Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
