import React from "react";

import {
  Button,
  CardContainer,
  Container,
  Description,
  PublishDate,
  Title,
} from "./styles";
import { articles } from "./data";

import { Box } from "@mui/material";

import Image from "next/image";

export const BlogArticles = () => {
  return (
    <Container>
      {articles.map((article, index) => (
        <CardContainer key={index}>
          <Image
            alt={article.alt}
            src={article.image}
            height={0}
            width={0}
            style={{
              width: "100%",
              height: "270px",
              objectFit: "cover",
              borderRadius: "10px 10px 0 0 ",
            }}
          />
          <Box p="20px">
            <PublishDate>{article.date}</PublishDate>
            <Title>{article.title}</Title>
            <Description>{article.description}</Description>
            <Button>READ THE BLOG</Button>
          </Box>
        </CardContainer>
      ))}
    </Container>
  );
};
