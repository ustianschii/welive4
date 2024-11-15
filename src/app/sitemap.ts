import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "/system-design",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/network",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/audio-visual-systems",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/loxone-automation",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/loxone-residential",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/loxone-commercial",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/energy-management",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/outdoor-tv",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/blog",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/consultation",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/high-performance-sound",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/game-media",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/checklist-long",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/checklist-short",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/home-theater",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/home-audio",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/outdoor-entertainment",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/get-services",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/cart-choosed-services",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/cart-date&time",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/cart-client-details",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "/privacy-policy",
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
