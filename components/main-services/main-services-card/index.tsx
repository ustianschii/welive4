"use client";

import React from "react";

import { Box, useMediaQuery, useTheme } from "@mui/material";

import Link from "next/link";
import { Background, Button } from "./styles";

import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({ link, img, imgtablet, text }) => {
  const theme = useTheme();
  const isTabletOrBelow = useMediaQuery(theme.breakpoints.down("md"));

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
          src={isTabletOrBelow ? imgtablet : img}
          width={250}
          height={250}
        />
      </Box>
      <Link href={link}>
        <Button variant="outlined">{text}</Button>
      </Link>
    </Box>
  );
};
