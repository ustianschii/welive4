import React, { useState } from "react";
import { Title, Wrapper } from "./styles";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { Review as ReviewType } from "../review-card/types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface ReviewContainerProps {
  reviews: ReviewType[];
}

export const Reviews: React.FC<ReviewContainerProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate the index for slicing the reviews
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
    <Wrapper disableGutters>
      <Title variant="h3">What Our Clients Say</Title>
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="stretch">
          <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
            <ArrowBackIcon />
          </IconButton>

          <Box sx={{ display: "flex", flex: 1 }}>
            {displayedReviews.map((review, index) => (
              <Card
                key={index}
                sx={{
                  marginBottom: 2,
                  width: "50%",
                  boxSizing: "border-box",
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{review.name}</Typography>
                  <Typography variant="body2">{review.text}</Typography>
                  <Typography variant="caption">{review.rating} ⭐</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          <IconButton
            onClick={handleNext}
            disabled={currentIndex + 2 >= reviews.length}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    </Wrapper>
  );
};
