import React from "react";
import {
  BannerBox,
  ConsultationBox,
  ConsultationTitle,
  TextTitle,
  Button,
  Wrapper,
  Highlight,
  Description,
  TextBox,
} from "./styles";

export const IntroSecondary = () => {
  return (
    <Wrapper disableGutters>
      <BannerBox>
        <ConsultationBox>
          <ConsultationTitle variant="h3">
            To get your smart house
          </ConsultationTitle>
          <Button variant="contained">Request Consultation</Button>
        </ConsultationBox>
      </BannerBox>
      <TextBox>
        <TextTitle variant="h2">
          A <Highlight>Smarter</Highlight> Way to
          <Highlight>Live</Highlight>
        </TextTitle>

        <Description>
          Smart technology has many cool designs and solutions to make your life
          more comfortable and bring additional passive income to your
          household, not to mention more fun! It is possible to live better
          without breaking the bank.
        </Description>
      </TextBox>
    </Wrapper>
  );
};
