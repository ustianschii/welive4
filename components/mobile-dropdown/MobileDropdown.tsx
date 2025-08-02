import { Box, MenuItem, Select } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { BLACK, GREEN, WHITE } from "@/src/styles/constants";

type MobileDropdownProps = {
  categories: string[];
  selectedCategory: string;
  fetchPosts: (category: string) => void;
  isCategorySelected: (category: string) => boolean;
};

export const MobileDropdown = ({
  categories,
  fetchPosts,
  selectedCategory,
  isCategorySelected,
}: MobileDropdownProps) => {
  return (
    <Box px={2} mb={2}>
      <Select
        fullWidth
        value={selectedCategory}
        onChange={(e) => fetchPosts(e.target.value)}
        variant="outlined"
        IconComponent={KeyboardArrowDownIcon}
        sx={{
          color: WHITE,
          bgcolor: BLACK,
          borderRadius: "10px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: GREEN,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: GREEN,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: GREEN,
          },
          "& .MuiSelect-icon": {
            color: GREEN,
            right: "12px",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              border: "1px solid gray",
              borderRadius: "10px",
              bgcolor: BLACK,
              mt: 1,
              maxHeight: 48 * 5 + 8,
              overflowY: "auto",
            },
          },
        }}
      >
        {categories.map((category) => (
          <MenuItem
            key={category}
            value={category}
            sx={{
              color: isCategorySelected(category) ? GREEN : WHITE,
              backgroundColor: BLACK,
              "&.Mui-selected": {
                backgroundColor: BLACK,
                color: GREEN,
              },
              "&.Mui-selected:hover": {
                backgroundColor: BLACK,
                color: GREEN,
              },
              "&:hover": {
                backgroundColor: GREEN,
                color: BLACK,
              },
            }}
          >
            {category}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
