"use client";

import { useState, MouseEvent } from "react";
import { Box, Button, CircularProgress, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import PostCard from "@/components/post-card";
import { BLACK, GREEN, WHITE } from "@/src/styles/constants";

type Post = {
  id: string;
  title: string;
  slug: string;
  iframeUrl: string;
  coverUrl: string | null;
};

type Props = {
  initialPosts: Post[];
  categories: string[];
};

export default function BlogClient({ initialPosts, categories }: Props) {
  const MAIN_CATEGORIES_COUNT = 5;

  const mainCategories = categories.slice(0, MAIN_CATEGORIES_COUNT);
  const moreCategories = categories.slice(MAIN_CATEGORIES_COUNT);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [loading, setLoading] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

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

  const isCategorySelected = (category: string) =>
    selectedCategory === category;
  const isFromMoreMenu = moreCategories.includes(selectedCategory);

  const handleMenuHoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuHoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box display="flex" justifyContent="center" p={2}>
        <Box display="flex" flexWrap="wrap" gap={2}>
          {mainCategories.map((category) => (
            <Button
              key={category}
              onClick={() => fetchPosts(category)}
              sx={{
                color: isCategorySelected(category) ? GREEN : WHITE,
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              {category}
            </Button>
          ))}
          {moreCategories.length > 0 && (
            <Box
              onMouseEnter={handleMenuHoverOpen}
              onMouseLeave={handleMenuHoverClose}
              sx={{ cursor: "pointer" }}
            >
              <Button
                sx={{
                  color: isFromMoreMenu ? GREEN : WHITE,
                  textTransform: "none",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                More
                <KeyboardArrowDownIcon
                  sx={{
                    color: GREEN,
                    fontSize: "1.2rem",
                  }}
                />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuHoverClose}
                MenuListProps={{
                  onMouseLeave: handleMenuHoverClose,
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                disableScrollLock
                disableAutoFocusItem
                sx={{
                  "& .MuiMenu-paper": {
                    border: `1px solid ${GREEN}`,
                    backgroundColor: BLACK,
                    color: WHITE,
                    borderRadius: "10px",
                  },
                }}
              >
                {moreCategories.map((category) => (
                  <MenuItem
                    key={category}
                    onClick={() => fetchPosts(category)}
                    selected={isCategorySelected(category)}
                    sx={{
                      color: isCategorySelected(category) ? GREEN : "inherit",
                      "&.Mui-selected": {
                        backgroundColor: "transparent",
                      },
                      "&.Mui-selected:hover": {
                        backgroundColor: "transparent",
                      },
                      "&:hover": {
                        backgroundColor: GREEN,
                      },
                    }}
                  >
                    {category}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Box>
      </Box>
      <Box
        bgcolor={BLACK}
        p="2rem"
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
          <Box gridColumn="1/-1" textAlign="center">
            <CircularProgress sx={{ color: GREEN }} />
          </Box>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              slug={post.slug}
              coverUrl={post.coverUrl}
            />
          ))
        )}
      </Box>
    </>
  );
}
