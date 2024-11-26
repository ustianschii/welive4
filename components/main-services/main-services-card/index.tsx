"use client";

import React from "react";

import { Box, useMediaQuery, useTheme } from "@mui/material";

import Link from "next/link";
import Image from "next/image";

import { Button, ImageBox } from "./styles";
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({ link, img, imgdesktop, text }) => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const imageSrc = isDesktop ? imgdesktop : img;

  return (
    <Box display="flex" position="relative" flexDirection="column">
      <ImageBox>
        <Image
          alt="service"
          src={imageSrc}
          quality={50}
          fill
          objectFit="cover"
          style={{ borderRadius: "10px" }}
        />
      </ImageBox>
      <Link href={link}>
        <Button variant="outlined" sx={{ marginTop: "10px" }}>
          {text}
        </Button>
      </Link>
    </Box>
  );
};
