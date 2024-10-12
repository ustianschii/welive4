import React from "react";
import { Box, Typography } from "@mui/material";

import Image from "next/image";

import { Container, LogoContainer, CustomLink, CardContainer } from "./styles";
import { Card } from "../review-card";
import { data } from "./data";

export const Reviews = () => {
  const stars = new Array(5).fill(0);

  return (
    <Container disableGutters>
      <LogoContainer>
        <Image
          alt="review-provider"
          src="/reviews-mobile/arrivala.png"
          width={200}
          height={45}
          style={{ marginBottom: "5px" }}
        />
        <Box display="flex" pb="5px">
          {stars.map((_, index) => (
            <Image
              key={index}
              alt="review-provider"
              src="/reviews-mobile/star-outlined.png"
              width={47}
              height={46}
            />
          ))}
        </Box>
        <CustomLink href={"https://arrivala.com/heyo-smart-605/reviews/"}>
          <Typography>5 out of 5 stars based on 32 reviews</Typography>
        </CustomLink>
      </LogoContainer>
      <CardContainer>
        {data.map((review, index) => (
          <Card key={index} name={review.name} review={review.review} />
        ))}
      </CardContainer>
    </Container>
  );
};
