import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const posts: Record<string, { title: string; image: string; content: string[] }>
 = {
  "designing-safer-labs": {
    title: "Designing Safer Labs: From Planning to Commissioning",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2Fdc3349e2d7864fbe94ea42a6be7475f1?format=webp&width=1200",
    content: [
      "A successful laboratory project begins with integrated planning that balances safety, workflow and utilities.",
      "Define functional zones (preparation, analysis, storage) to minimize cross‑contamination and optimize movement.",
      "Plan utilities early: HVAC, gas, vacuum, water and electrical capacity with redundancy for future growth.",
      "Complete the process with commissioning, validation and user training for sustained compliance.",
    ],
  },
  "fume-hoods-gas-cupboards": {
    title: "Fume Hoods & Gas Cupboards: What to Consider",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2Fadba5febae5f4dc191263688c2907132?format=webp&width=1200",
    content: [
      "Containment performance (face velocity, sash design) and energy efficiency are critical selection criteria.",
      "Ensure compliance with EN14175 and local standards; verify alarms, airflow monitoring and filtration options.",
      "Consider ducted vs. ductless based on chemical profile, facility constraints and lifecycle cost.",
    ],
  },
  "pm-iot-monitoring": {
    title: "Extending Instrument Uptime with PM & IoT Monitoring",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F14ef2fdbcfb242f3b9b974b49e20f798%2F3ec06b2425894bcb8e101743fb5119c6?format=webp&width=1200",
    content: [
      "Preventive maintenance schedules reduce failures and stabilize analytical performance.",
      "IoT sensors provide real‑time status, temperature and vibration alerts to prevent downtime.",
      "Combine PM, calibration and remote alerts for compliant, predictable operations.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? posts[slug] : undefined;

  if (!post) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-24">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Button asChild><Link to="/">Go back home</Link></Button>
      </div>
    );
  }

  return (
    <article className="py-24">
      <SEO
        title={`${post.title} | Newlink Lab Services`}
        description={post.content[0]}
        image={post.image}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          image: post.image,
        }}
      />
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="text-sm px-4 py-2">Insights</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">{post.title}</h1>
        </div>
        <div className="rounded-2xl overflow-hidden border mb-8">
          <img src={post.image} alt={post.title} className="w-full h-80 object-cover" />
        </div>
        <div className="prose prose-slate max-w-none dark:prose-invert">
          {post.content.map((p, i) => (
            <p key={i} className="text-lg leading-8 text-muted-foreground">{p}</p>
          ))}
        </div>
        <div className="mt-10"><Button asChild variant="outline"><Link to="/">← Back to home</Link></Button></div>
      </div>
    </article>
  );
};

export default BlogPost;
