import { useEffect } from "react";

export type SEOProps = {
  title: string;
  description?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

function upsertMeta(selector: { name?: string; property?: string }, content: string) {
  const attr = selector.name ? ["name", selector.name] : ["property", selector.property!];
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr[0]}='${attr[1]}']`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr[0], String(attr[1]));
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, id?: string) {
  let el: HTMLLinkElement | null = id ? document.getElementById(id) as HTMLLinkElement | null : null;
  if (!el) {
    el = document.head.querySelector(`link[rel='${rel}']`) as HTMLLinkElement | null;
  }
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (id) el.id = id;
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  const id = "seo-json-ld";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.text = JSON.stringify(data);
}

export const SEO = ({ title, description, image, canonical, noIndex, jsonLd }: SEOProps) => {
  useEffect(() => {
    const url = canonical || `${window.location.origin}${window.location.pathname}${window.location.search}`;

    document.title = title;

    if (description) upsertMeta({ name: "description" }, description);
    upsertMeta({ name: "robots" }, noIndex ? "noindex, nofollow" : "index, follow");

    // Open Graph
    upsertMeta({ property: "og:title" }, title);
    if (description) upsertMeta({ property: "og:description" }, description);
    upsertMeta({ property: "og:type" }, "website");
    upsertMeta({ property: "og:url" }, url);
    if (image) upsertMeta({ property: "og:image" }, image);

    // Twitter
    upsertMeta({ name: "twitter:card" }, image ? "summary_large_image" : "summary");
    upsertMeta({ name: "twitter:title" }, title);
    if (description) upsertMeta({ name: "twitter:description" }, description);
    if (image) upsertMeta({ name: "twitter:image" }, image);

    // Canonical
    upsertLink("canonical", url, "seo-canonical");

    // JSON-LD
    if (jsonLd) upsertJsonLd(jsonLd);
  }, [title, description, image, canonical, noIndex, jsonLd]);

  return null;
};

export default SEO;
