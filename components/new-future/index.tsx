"use client";

import React from "react";

import Image from "next/image";

import { useTheme, useMediaQuery } from "@mui/material";

import { Container, ContentBox, Description, Title, Wrapper } from "./styles";
import { Highlighted } from "../hero-title/styles";

export const NewFuture = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const imageWidth = isPhone ? 350 : isTablet ? 450 : 400;
  const imageHeight = isPhone ? 230 : isTablet ? 280 : 250;

  const descriptions = [
    {
      id: 1,
      text: "Today, we’re all too familiar with the concept of smart homes (also known as Smart Home 2.0). We control lighting systems, thermostats, and more using voice-controlled assistants like Amazon Alexa.",
    },
    {
      id: 2,
      text: "But in a world where time and convenience matter most, just using voice commands might not be enough for you!",
    },
    {
      id: 3,
      text: "That’s where Loxone home automation comes in. It’s changing how we do things at home, making everyday tasks easier, cozier, and safer.",
    },
  ];

  return (
    <Wrapper>
      <Container maxWidth="lg" disableGutters>
        <Image
          alt="smart home progress"
          src="/loxone-residential/new-future.png"
          width={imageWidth}
          height={imageHeight}
          style={{ borderRadius: "10px" }}
          quality={100}
        />
        <ContentBox>
          <Title>
            Why is<Highlighted>LOXONE</Highlighted>The
            <Highlighted>New Future</Highlighted>Of Smart Automation?
          </Title>
          {descriptions.map((desc) => (
            <Description key={desc.id}>{desc.text}</Description>
          ))}
        </ContentBox>
      </Container>
    </Wrapper>
  );
};
