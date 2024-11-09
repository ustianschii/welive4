"use client";

import React from "react";

import { Box, useMediaQuery, useTheme } from "@mui/material";

import Link from "next/link";

import { Background, Button } from "./styles";
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({ link, img, imgdesktop, text }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const imageSrc = isDesktop ? imgdesktop : isTablet ? imgdesktop : img;

  return (
    <Box display="flex" position="relative" flexDirection="column">
      <Box width="100%" height="80%">
        <Background
          alt="service"
          src={imageSrc}
          width={400}
          height={350}
          quality={100}
        />
      </Box>
      <Link href={link}>
        <Button variant="outlined" sx={{ marginTop: "10px" }}>
          {text}
        </Button>
      </Link>
    </Box>
  );
};
