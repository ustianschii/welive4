import React from "react";

import { Container, ContentBox, Description, Title, Wrapper } from "./styles";
import { Highlighted } from "../hero-title/styles";

import Image from "next/image";

import { useTheme, useMediaQuery, Box } from "@mui/material";

export const NewFuture = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const imageWidth = isPhone ? 380 : isTablet ? 450 : 400;
  const imageHeight = isPhone ? 230 : isTablet ? 280 : 250;

  return (
    <Wrapper>
      <Container maxWidth="lg" disableGutters>
        <Image
          alt="smart-home-progress"
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
          <Description>
            Today, we&apos;re all too familiar with the concept of smart homes
            (also known as Smart Home 2.0). We control lighting systems,
            thermostats, and more using voice-controlled assistants like Amazon
            Alexa.
          </Description>
          <Description>
            But in a world where time and convenience matter most, just using
            voice commands might not be enough for you!
          </Description>
          <Description>
            That&apos;s where Loxone home automation comes in. It&apos;s
            changing how we do things at home, making everyday tasks easier,
            cozier, and safer.
          </Description>
        </ContentBox>
      </Container>
    </Wrapper>
  );
};
