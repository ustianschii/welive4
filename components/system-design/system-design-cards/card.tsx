import React from "react";

import { Box } from "@mui/material";

import { CardBox, ContentBox, Description, Title, Button } from "./styles";
import { DesignTypesProps } from "./types";

export const SystemDesignCard: React.FC<DesignTypesProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <CardBox
          key={index + 1}
          image={item.image}
          imagetablet={item.imagetablet}
          position="relative"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            position="absolute"
            bottom="20px"
            left="0"
            right="0"
          >
            <ContentBox>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </ContentBox>
            <Button href={item.link}>LEARN MORE</Button>
          </Box>
        </CardBox>
      ))}
    </>
  );
};
