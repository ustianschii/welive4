"use client";

import { useState, useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import PostCard from "@/components/post-card";
import { BLACK } from "@/src/styles/constants";
import { MobileDropdown } from "@/components/mobile-dropdown/MobileDropdown";
import { CategorySelector } from "@/components/category-selector/CategorySelector";
import { Loading } from "@/components/loading/Loading";

type Post = {
  id: string;
  title: string;
  slug: string;
  coverUrl: string | null;
};

type BlogClientProps = {
  categories: string[];
};

export default function BlogClient({ categories }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const fetchPosts = async (category: string) => {
    setLoading(true);
    setSelectedCategory(category);
    setAnchorEl(null);

    const res = await fetch(
      `/api/posts?category=${encodeURIComponent(category)}`
    );
    const data = await res.json();

    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts(categories[0]);
  }, [categories]);

  const isCategorySelected = (category: string) =>
    selectedCategory === category;

  return (
    <>
      {isMobile ? (
        <MobileDropdown
          categories={categories}
          fetchPosts={fetchPosts}
          selectedCategory={selectedCategory}
          isCategorySelected={isCategorySelected}
        />
      ) : (
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          isCategorySelected={isCategorySelected}
          fetchPosts={fetchPosts}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
        />
      )}
      <Box
        bgcolor={BLACK}
        p="1rem"
        maxWidth="1200px"
        m="0 auto"
        display="grid"
        gap="2rem"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
      >
        {loading ? (
          <Loading />
        ) : (
          posts.map(({ id, title, slug, coverUrl }) => (
            <PostCard
              key={id}
              id={id}
              title={title}
              slug={slug}
              coverUrl={coverUrl}
            />
          ))
        )}
      </Box>
    </>
  );
}
