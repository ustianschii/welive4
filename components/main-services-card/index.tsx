import React from "react";

import { Box } from "@mui/material";

import Link from "next/link";
import { Background, Button } from "./styles";

import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({ link, img, text }) => {
  return (
    <Box
      display="flex"
      position="relative"
      flexDirection="column"
      width="fit-content"
      height="fit-content"
      maxWidth="50%"
      flexShrink={0}
    >
      <Link href={link}>
        <Background
          alt="service"
          src={img}
          layout="responsive"
          width={100}
          height={210}
        />
        <Button variant="outlined">{text} </Button>
      </Link>
    </Box>
  );
};
