import React from "react";
import {
  Title,
  Wrapper,
  SmartHomeImg,
  SubscribeContainer,
  SubscribeButton,
  Description,
  TextField,
  Highlight,
  StrongPoints,
  StrongPointIcon,
  StrongPointTitle,
  StrongPointContainer,
} from "./styles";
import { Box } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const IntroText = () => {
  return (
    <Wrapper disableGutters>
      <Box maxWidth={"50%"}>
        <Title variant="h2">
          Welcome to <Highlight>WeLive4</Highlight>
          Your home is your <Highlight>Smart future</Highlight>
        </Title>
        <Description>
          Our mission is to make your exerience as smooth and fulfilling as
          possible. We provide expert advice, transparent communication.
        </Description>
        <SubscribeContainer>
          <TextField
            id="outlined-basic"
            label="Enter your email"
            variant="outlined"
            size="small"
          />
          <SubscribeButton variant="contained">Let&apos;s go</SubscribeButton>
        </SubscribeContainer>
        <StrongPoints>
          <StrongPointContainer display={"flex"}>
            <StrongPointIcon>
              <CheckCircleOutlineIcon />
            </StrongPointIcon>
            <StrongPointTitle>Vetted</StrongPointTitle>
          </StrongPointContainer>
          <StrongPointContainer>
            <StrongPointIcon>
              <CheckCircleOutlineIcon />
            </StrongPointIcon>
            <StrongPointTitle>95% retention rate</StrongPointTitle>
          </StrongPointContainer>
          <StrongPointContainer>
            <StrongPointIcon>
              <CheckCircleOutlineIcon />
            </StrongPointIcon>
            <StrongPointTitle>Quality</StrongPointTitle>
          </StrongPointContainer>
        </StrongPoints>
      </Box>
      <SmartHomeImg />
    </Wrapper>
  );
};
