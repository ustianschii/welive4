import React from "react";
import { Address, Title, Wrapper, Copyright } from "./styles";
import {
  SubscribeButton,
  SubscribeContainer,
  TextField,
} from "../intro/styles";

const GetInTouch = () => {
  return (
    <Wrapper>
      <Title variant="h5">WeLive4</Title>
      <Address>
        Heyo Smart HQ 300 Delaware Ave Suite 210-515 Wilmington, DE 19801
      </Address>
      <SubscribeContainer>
        <TextField
          id="outlined-basic"
          label="Enter your email"
          variant="outlined"
          size="small"
        />
        <SubscribeButton variant="contained">Subscribe</SubscribeButton>
      </SubscribeContainer>
      <Copyright>Copyright 2024</Copyright>
    </Wrapper>
  );
};

export default GetInTouch;
