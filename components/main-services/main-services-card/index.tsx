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
      <Box width="100%" height="80%">
        <Background
          alt="service"
          src={img}
          width={250}
          height={250}
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
      </Box>
      <Link href={link}>
        <Button variant="outlined">{text}</Button>
      </Link>
    </Box>
  );
};
