import { Box } from "@mui/material";

import { Header } from "@/components/shared/header";
import { BLACK } from "@/src/styles/constants";
import BlogClient from "@/components/blog-client/BlogClient";
import { Meta } from "@/components/meta";
import { metadata } from "@/src/app/metadata";

const categories = [
  "All posts",
  "Explore & Secure",
  "Jet - Set - Automate",
  "World Adventures & Smart Returns",
  "The Connected Traveler",
  "Luxury Escapes & Luxury Living",
  "Adventure & Assurance",
  "Smart Business Travel",
];

export default async function Blog() {
  return (
    <Box bgcolor={BLACK} minHeight="100vh">
      <Meta
        title={metadata.Blog.title}
        description={metadata.Blog.description}
        keywords={metadata.Blog.keywords}
      />
      <Header
        layout={{
          mobileHeight: "100px",
          tabletHeight: "150px",
          desktopHeight: "150px",
          isHeaderTop: true,
        }}
        background={{ backColor: BLACK }}
        content={{ titleStart: "Blog" }}
      />
      <BlogClient categories={categories} />
    </Box>
  );
}
