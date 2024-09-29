import React from "react";
import { Typography, Box, Rating } from "@mui/material";
import { Review as ReviewType } from "./types";

interface ReviewProps {
  review: ReviewType;
}

export const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <Box
      sx={{
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "100%",
      }}
    >
      <Rating value={review.rating} readOnly precision={0.5} />
      <Typography variant="h6">{review.name}</Typography>
      <Typography variant="body2">{review.text}</Typography>
    </Box>
  );
};
