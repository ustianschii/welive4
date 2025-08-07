import { Box } from "@mui/material";

import { Header } from "@/components/shared/header";
import { BLACK } from "@/src/styles/constants";
import BlogClient from "@/components/blog-client/BlogClient";
import { Meta } from "@/components/meta";
import { metadata } from "@/src/app/metadata";

const categories = [
  "All posts",
  "Home automation system",
  "Entertainment",
  "Outdoor living",
  "Network",
  "Interior design",
  "Smart tech trade",
  "360 degree Smart home",
  "Commercial automation system",
  "Lightning design",
  "Home & building designs",
  "Window treatments",
  "Security systems",
  "Security cameras",
  "Solar power & EV charging",
  "Audio systems",
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
          tabletHeight: "100px",
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
