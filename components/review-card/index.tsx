import React, { useState } from "react";
import { CardContent, IconButton, Typography } from "@mui/material";

import { Review as ReviewType } from "../review-card/types";
import {
  Wrapper,
  Card,
  Name,
  Description,
  NameRating,
  ArrowBack,
  ArrowForward,
} from "./styles";

interface ReviewContainerProps {
  reviews: ReviewType[];
}

export const Review: React.FC<ReviewContainerProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 2 < reviews.length) {
      setCurrentIndex(currentIndex + 2);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 2 >= 0) {
      setCurrentIndex(currentIndex - 2);
    }
  };
  const displayedReviews = reviews.slice(currentIndex, currentIndex + 2);

  return (
    <Wrapper>
      <IconButton
        onClick={handlePrev}
        disabled={currentIndex === 0}
        disableRipple
        sx={{
          color: currentIndex === 0 ? "lightgray" : "primary.main", // Disabled state color
        }}
      >
        <ArrowBack />
      </IconButton>
      {displayedReviews.map((review, index) => (
        <Card key={index}>
          <CardContent sx={{ overflow: "hidden", p: "20px" }}>
            <Description variant="body2">{review.text}</Description>
            <NameRating>
              <Name variant="h5">{review.name}</Name>
              <Typography variant="caption">⭐⭐⭐⭐⭐</Typography>
            </NameRating>
          </CardContent>
        </Card>
      ))}

      <IconButton
        onClick={handleNext}
        disabled={currentIndex + 2 >= reviews.length}
        disableRipple
      >
        <ArrowForward />
      </IconButton>
    </Wrapper>
  );
};
