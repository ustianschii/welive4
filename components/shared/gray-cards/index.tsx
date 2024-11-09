"use client";

import React from "react";

import Image from "next/image";

import { useMediaQuery, useTheme } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

import { GrayCardsBoxProps } from "./types";
import {
  CardBox,
  Container,
  Title,
  Description,
  Subtitle,
  CardContent,
} from "./styles";
import { Highlighted } from "../../hero-title/styles";
import { GREEN } from "@/styles/constants";

export const GrayCardsBox: React.FC<GrayCardsBoxProps> = ({ data, button }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const getWidth = () => (isMobile ? 380 : isTablet ? 750 : 900);
  const getHeight = () => (isMobile ? 380 : isTablet ? 400 : 500);

  return (
    <Container disableGutters>
      {data.map((item, index) => (
        <CardBox key={index}>
          {item.image && (
            <Image
              alt="service"
              src={isTablet && item.imagetablet ? item.imagetablet : item.image}
              height={getHeight()}
              width={getWidth()}
              quality={100}
              style={{
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          )}

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
            {item.descriptions?.map((desc, index) => (
              <Description display="flex" alignItems="center" key={index}>
                <DoneIcon
                  fontSize="large"
                  style={{ marginRight: 8, color: GREEN }}
                />
                {desc}
              </Description>
            ))}
            {button}
          </CardContent>
        </CardBox>
      ))}
    </Container>
  );
};
