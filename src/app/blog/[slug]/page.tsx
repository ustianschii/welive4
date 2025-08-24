import { Box } from "@mui/material";
import { notFound } from "next/navigation";

import { Header } from "@/components/shared/header";
import NotionPage from "@/components/notion-page/NotionPage";
import { BLACK } from "@/src/styles/constants";
import { getPostById, getPostBySlug } from "@/utils/notionApi";
import { Meta } from "@/components/meta";

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }

  const postId = post.id;
  const recordMap = await getPostById(postId);

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
