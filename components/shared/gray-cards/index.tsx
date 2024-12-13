"use client";

import React from "react";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

import Image from "next/image";

import { GrayCardsBoxProps } from "./types";
import {
  CardBox,
  Container,
  Title,
  Description,
  Subtitle,
  CardContent,
  ImageBox,
} from "./styles";
import { Highlighted } from "@/components/hero-title/styles";
import { GREEN } from "@/src/styles/constants";

export const GrayCardsBox: React.FC<GrayCardsBoxProps> = ({ data, button }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Container disableGutters>
      {data.map((item, index) => (
        <CardBox key={index} index={index}>
          <ImageBox
            hasImage={Boolean(item.image || (isTablet && item.imagetablet))}
          >
            {item.image && (
              <Image
                alt="service"
                src={
                  isDesktop && isTablet && item.imagetablet
                    ? item.imagetablet
                    : item.image
                }
                fill
                sizes={`
    (max-width: 600px) 80vw,
    (max-width: 900px) 70vw,
    (max-width: 1200px) 350px,
    400px
  `}
                style={{
                  borderRadius: "10px",
                  objectFit: "cover",
                  boxShadow:
                    "5px 5px 30px rgba(0, 0, 0, 0.2), -5px -5px 30px rgba(0, 0, 0, 0.2)",
                }}
              />
            )}
          </ImageBox>

          <CardContent>
            {(item.title && <Title>{item.title}</Title>) || (
              <Title>
                <Highlighted mLeft="0px" mRight="0px">
                  {item.titlehighlightedstart}
                </Highlighted>
                {item.titlestart}
                <Highlighted mLeft="0px" mRight="0px">
                  {item.titlehighlightedend}
                </Highlighted>
                {item.titleend}
              </Title>
            )}
            <Description>{item.maindescription}</Description>
            <Subtitle>{item.firsttitle}</Subtitle>
            <Description>{item.firstdescription}</Description>
            <Subtitle>{item.secondtitle}</Subtitle>
            <Description>{item.seconddescription}</Description>
            <Subtitle>{item.thirdtitle}</Subtitle>
            <Description>{item.thirddescription}</Description>
            <Box>
              {item.descriptions?.map((desc, index) => (
                <Description display="flex" alignItems="center" key={index}>
                  <DoneIcon
                    fontSize="large"
                    style={{ marginRight: 8, color: GREEN }}
                  />
                  {desc}
                </Description>
              ))}
            </Box>
            {button}
          </CardContent>
        </CardBox>
      ))}
    </Container>
  );
};
