import React from "react";
import { Title, Wrapper } from "./styles";
import { Review } from "../review-card/index";
import { ReviewsProps } from "./types";

export const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <Wrapper disableGutters>
      <Title variant="h3">What Our Clients Say</Title>
      <Review reviews={reviews} />
    </Wrapper>
  );
};
