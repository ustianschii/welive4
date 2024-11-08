import React from "react";

import { useMediaQuery, useTheme } from "@mui/material";

import {
  Card,
  Container,
  Descriptions,
  Icon,
  IconTitle,
  Subtitle,
  TabletBox,
  Title,
  Typography,
} from "./styles";
import { data } from "./data";
import { Highlighted } from "../hero-title/styles";

export const ReturnOnInvestments = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const getSize = () => {
    if (isMobile) return { width: 190, height: 190 };
    if (isTablet) return { width: 220, height: 220 };
    return { width: 190, height: 190 }; // default size for desktop
  };

  const imageSize = getSize();

  return (
    <Container disableGutters>
      <Title>
        <Highlighted>LOXONE</Highlighted>
      </Title>
      <Subtitle>
        <Highlighted>Your Smartest Return on Investment (ROI)</Highlighted>
      </Subtitle>
      {data.map((item, index) => (
        <Card key={index} index={index}>
          <Icon
            alt="icon"
            src={item.icon}
            width={imageSize.width}
            height={imageSize.height}
          />
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
    </Container>
  );
};
