import React, { useState } from "react";

import { Box, IconButton, ListItem } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Image from "next/image";

import { soundSystems } from "./data";
import { Container, Title } from "./styles";
import { Highlighted } from "../hero-title/styles";
import { Dot, Feature } from "../shared/key-features-card/styles";
import { MAIN_SERVICES_BACKGROUND } from "@/styles/constants";

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

  return (
    <Container disableGutters>
      <Box display="flex" alignItems="center">
        <IconButton onClick={handlePrev}>
          <ArrowBackIosIcon fontSize="large" />
        </IconButton>
        <Image
          src={soundSystems[currentIndex].imagePath}
          alt="carousel"
          height={300}
          width={300}
          style={{ objectFit: "cover", marginBottom: "30px" }}
        />
        <IconButton onClick={handleNext}>
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      </Box>
      {soundSystems[currentIndex].types.map((item, index) => (
        <Box key={index} mb="20px">
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
      <Box
        sx={{
          backgroundColor: MAIN_SERVICES_BACKGROUND,
          marginBottom: "-110px",
        }}
        width="100%"
        display="flex"
        justifyContent="center"
      ></Box>
    </Container>
  );
};
