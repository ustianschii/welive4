"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { ExtendedRecordMap } from "notion-types";

import { Header } from "@/components/shared/header";
import NotionPage from "@/components/notion-page/NotionPage";
import { BLACK } from "@/src/styles/constants";
import { Meta } from "@/components/meta";
import { Loading } from "@/components/loading/Loading";

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [recordMap, setRecordMap] = useState<ExtendedRecordMap | null>(null);
  const [post, setPost] = useState<{
    title: string;
    description: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postRes = await fetch(`/api/posts/slug/${params.slug}`);
        if (!postRes.ok) throw new Error("Failed to fetch post info");
        const postData = await postRes.json();
        setPost({ title: postData.title, description: postData.description });

        const recordRes = await fetch(`/api/page/${postData.id}`);
        if (!recordRes.ok) throw new Error("Failed to fetch recordMap");
        const recordData = await recordRes.json();
        setRecordMap(recordData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (loading) return <Loading />;
  if (!recordMap || !post) return <div>Post not found</div>;

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
        background={{ backColor: BLACK }}
      />
      <NotionPage recordMap={recordMap} />
    </Box>
  );
}
