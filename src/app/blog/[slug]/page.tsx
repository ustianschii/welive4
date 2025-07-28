import { Box } from "@mui/material";
import { notFound } from "next/navigation";

import { Header } from "@/components/shared/header";
import { BLACK, GREEN } from "@/src/styles/constants";
import { getPublishedPosts } from "@/utils/notionApi";

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  const posts = await getPublishedPosts("All posts");
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <Box bgcolor={BLACK}>
      <Header
        layout={{
          mobileHeight: "100px",
          tabletHeight: "100px",
          desktopHeight: "50px",
          isHeaderTop: true,
        }}
        background={{
          backColor: BLACK,
        }}
      />
      <Box
        height="100vh"
        width="50%"
        m="0 auto"
        pb="3rem"
        position="relative"
        overflow="hidden"
      >
        <iframe
          src={post.iframeUrl}
          width="100%"
          height="100%"
          style={{ border: `1px solid ${GREEN}`, borderRadius: "10px" }}
        />
      </Box>
    </Box>
  );
}
