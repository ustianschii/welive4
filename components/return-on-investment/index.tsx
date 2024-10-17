import React from "react";

import {
  Card,
  Container,
  Descriptions,
  Icon,
  IconTitle,
  Subtitle,
  Title,
  Typography,
} from "./styles";
import { data } from "./data";
import { Highlighted } from "../hero-title/styles";

export const ReturnOnInvestments = () => {
  return (
    <Container disableGutters>
      <Title>
        <Highlighted>LOXONE</Highlighted>
      </Title>
      <Subtitle>
        <Highlighted>Your Smartest Return on Investment (ROI)</Highlighted>
      </Subtitle>
      {data.map((item, index) => (
        <Card key={index}>
          <Icon alt="icon" src={item.icon} width={190} height={190} />
          <IconTitle>{item.iconTitle}</IconTitle>
          <Descriptions>
            {item.description.map((desc, i) => (
              <Typography key={i}>{desc}</Typography>
            ))}
          </Descriptions>
        </Card>
      ))}
    </Container>
  );
};
