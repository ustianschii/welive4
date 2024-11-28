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
import { Highlighted } from "../../hero-title/styles";
import { GREEN } from "@/styles/constants";

export const GrayCardsBox: React.FC<GrayCardsBoxProps> = ({ data, button }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container disableGutters>
      {data.map((item, index) => (
        <CardBox key={index} index={index}>
          <ImageBox>
            {item.image && (
              <Image
                alt="service"
                src={
                  isDesktop && isTablet && item.imagetablet
                    ? item.imagetablet
                    : item.image
                }
                fill
                style={{ borderRadius: "10px", objectFit: "cover" }}
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
