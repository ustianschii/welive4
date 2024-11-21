"use client";

import React, { useState } from "react";

import {
  Box,
  IconButton,
  ListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Image from "next/image";

import { soundSystems } from "./data";
import { Container, Title, Wrapper, Dot, Feature } from "./styles";
import { Highlighted } from "../hero-title/styles";

export const SoundSystemDemo: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === soundSystems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? soundSystems.length - 1 : prevIndex - 1
    );
  };

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const height = isSmall ? 220 : isMedium ? 250 : 300;
  const width = isSmall ? 220 : isMedium ? 250 : 300;

  return (
    <Wrapper>
      <Container maxWidth="lg" disableGutters>
        <Box display="flex" alignItems="center">
          <IconButton onClick={handlePrev}>
            <ArrowBackIosIcon fontSize="large" />
          </IconButton>
          <Image
            src={soundSystems[currentIndex].imagePath}
            alt="carousel"
            height={height}
            width={width}
            style={{ objectFit: "cover", marginBottom: "30px" }}
          />
          <IconButton onClick={handleNext}>
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box
          display="flex"
          flexDirection={isLarge ? "row" : "column"}
          gap={isLarge ? "30px" : ""}
          marginLeft={isLarge ? "30px" : ""}
        >
          {soundSystems[currentIndex].types.map((item, index) => (
            <Box key={index} mb="20px" minHeight="200px">
              <Title>
                <Highlighted>{item.highlighted}</Highlighted>
                {item.title}
              </Title>
              {item.features.map((feature, index) => (
                <ListItem
                  key={index}
                  sx={{
                    alignItems: "flex-start",
                    padding: "4px 10px",
                  }}
                >
                  <Dot />
                  <Feature>{feature}</Feature>
                </ListItem>
              ))}
            </Box>
          ))}
        </Box>
      </Container>
    </Wrapper>
  );
};
