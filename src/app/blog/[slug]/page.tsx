import { Box } from "@mui/material";
import { notFound } from "next/navigation";
import { NotionAPI } from "notion-client";

import { Header } from "@/components/shared/header";
import NotionPage from "@/components/notion-page/NotionPage";
import { BLACK } from "@/src/styles/constants";
import { getPublishedPosts } from "@/utils/notionApi";
import { Meta } from "@/components/meta";

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const posts = await getPublishedPosts("All posts");
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  const notion = new NotionAPI();
  const recordMap = await notion.getPage(post.id);

  return (
    <Box>
      <Meta title={post.title} description={post.description} />
      <Header
        layout={{
          mobileHeight: "0px",
          tabletHeight: "0px",
          desktopHeight: "0px",
          isHeaderTop: true,
        }}
        background={{
          backColor: BLACK,
        }}
      />
      <NotionPage recordMap={recordMap} />
    </Box>
  );
}
