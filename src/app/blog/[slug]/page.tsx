import { Box } from "@mui/material";
import { notFound } from "next/navigation";

import { Header } from "@/components/shared/header";
import { BLACK } from "@/src/styles/constants";
import { getPublishedPosts } from "@/utils/notionApi";
import ClientPostBox from "@/components/client-post-box/ClientPostBox";

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const posts = await getPublishedPosts("All posts");
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <Box mb="-100px">
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
      <ClientPostBox
        iframeUrl={post.iframeUrl}
        title={post.title}
        description={post.description}
      />
    </Box>
  );
}
