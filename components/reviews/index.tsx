import React from "react";
import { Title, Wrapper } from "./styles";
import { Box } from "@mui/material";
import { Review } from "../review-card";
import { reviews } from "../review-card/reviews";

export const Reviews = () => {
  return (
    <Wrapper disableGutters>
      <Title variant="h3">What Our Clients Say</Title>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          padding: "16px",
          width: "100%",
          gap: "16px",
        }}
      >
        {reviews.slice(0, 2).map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </Box>
    </Wrapper>
  );
};
