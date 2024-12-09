"use client";

import React from "react";

import { Box, useMediaQuery, useTheme } from "@mui/material";

import {
  Card,
  CardsBox,
  Container,
  Descriptions,
  Icon,
  IconTitle,
  IconWrapper,
  Subtitle,
  TabletBox,
  Title,
  Typography,
} from "./styles";
import { data } from "./data";
import { Highlighted } from "@/components/hero-title/styles";
import { MAIN_SERVICES_BACKGROUND } from "@/src/styles/constants";

export const ReturnOnInvestments = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const getSize = () => {
    if (isMobile) return { width: 190, height: 190 };
    if (isTablet) return { width: 220, height: 220 };
    return { width: 190, height: 190 };
  };

  const imageSize = getSize();

  return (
    <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
      <Container maxWidth="lg" disableGutters>
        <Title>
          <Highlighted>LOXONE</Highlighted>
        </Title>
        <Subtitle>
          <Highlighted>Your Smartest Return on Investment (ROI)</Highlighted>
        </Subtitle>
        <CardsBox>
          {data.map((item, index) => (
            <Card key={index} index={index}>
              <IconWrapper>
                <Icon
                  alt="icon"
                  src={item.icon}
                  width={imageSize.width}
                  height={imageSize.height}
                />
              </IconWrapper>

              <TabletBox>
                <IconTitle>{item.iconTitle}</IconTitle>
                <Descriptions>
                  {item.description.map((desc, i) => (
                    <Typography key={i}>{desc}</Typography>
                  ))}
                </Descriptions>
              </TabletBox>
            </Card>
          ))}
        </CardsBox>
      </Container>
    </Box>
  );
};
