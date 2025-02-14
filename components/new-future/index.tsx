"use client";

import React from "react";

import Image from "next/image";

import { useTheme, useMediaQuery } from "@mui/material";

import { Container, ContentBox, Description, Title, Wrapper } from "./styles";
import { Highlighted } from "@/components/hero-title/styles";
import { descriptions } from "./data";

export const NewFuture = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const imageWidth = isPhone ? 350 : isTablet ? 450 : 400;
  const imageHeight = isPhone ? 230 : isTablet ? 280 : 250;

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
