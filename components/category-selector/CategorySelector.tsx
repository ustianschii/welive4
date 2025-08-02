import { MouseEvent } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { BLACK, GREEN, WHITE } from "@/src/styles/constants";

type CategorySelectorProps = {
  categories: string[];
  selectedCategory: string;
  isCategorySelected: (category: string) => boolean;
  fetchPosts: (category: string) => void;
  setAnchorEl: (el: HTMLElement | null) => void;
  anchorEl: HTMLElement | null;
};

export const CategorySelector = ({
  categories,
  selectedCategory,
  isCategorySelected,
  fetchPosts,
  anchorEl,
  setAnchorEl,
}: CategorySelectorProps) => {
  const MAIN_CATEGORIES_COUNT = 5;

  const mainCategories = categories.slice(0, MAIN_CATEGORIES_COUNT);
  const moreCategories = categories.slice(MAIN_CATEGORIES_COUNT);
  const isFromMoreMenu = moreCategories.includes(selectedCategory);
  const open = Boolean(anchorEl);

  const handleMenuHoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuHoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" justifyContent="center" p={2}>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {mainCategories.map((category) => (
          <Button
            key={category}
            onClick={() => fetchPosts(category)}
            sx={{
              color: isCategorySelected(category) ? GREEN : WHITE,
              textDecorationLine: isCategorySelected(category)
                ? "underline"
                : "none",
              textTransform: "none",
              fontSize: "1rem",
              "&:hover": {
                color: GREEN,
              },
            }}
          >
            {category}
          </Button>
        ))}
        {moreCategories.length > 0 && (
          <Box
            onMouseEnter={handleMenuHoverOpen}
            onMouseLeave={handleMenuHoverClose}
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
  );
};
