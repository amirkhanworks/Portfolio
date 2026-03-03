import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";

const baseUrl = "https://amir-khan-product.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified },
    { url: `${baseUrl}/case-studies`, lastModified },
    { url: `${baseUrl}/about`, lastModified },
    { url: `${baseUrl}/resume`, lastModified },
    { url: `${baseUrl}/contact`, lastModified }
  ];
  caseStudies.forEach((cs) => {
    routes.push({
      url: `${baseUrl}/case-studies/${cs.slug}`,
      lastModified
    });
  });
  return routes;
}
