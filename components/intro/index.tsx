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
  Box,
} from "./styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const strongPointsData = ["Vetted", "95% Retention rate", "Quality"];

export const Intro = () => {
  return (
    <Wrapper disableGutters>
      <Box>
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
          {strongPointsData.map((point, index) => (
            <StrongPointContainer key={index}>
              <StrongPointIcon>
                <CheckCircleOutlineIcon />
              </StrongPointIcon>
              <StrongPointTitle>{point}</StrongPointTitle>
            </StrongPointContainer>
          ))}
        </StrongPoints>
      </Box>
      <SmartHomeImg />
    </Wrapper>
  );
};
