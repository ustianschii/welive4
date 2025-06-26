import React from "react";

import { GetServiceCard } from "@/components/shared/get-services-black-card";
import { networkWifi } from "@/components/shared/get-services-black-card/services";
import { ROUTES } from "@/src/app/utils/routes-constants";
import {
  BackButton,
  Wrapper,
  Container,
  ButtonsBox,
} from "@/components/shared/get-services-black-card/styles";
import { BLACK } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import { Subtitle } from "@/components/hero-title/styles";
import { Meta } from "@/components/meta";

export default function GetNetworkWifi() {
  return (
    <>
      <Meta
        title="Ethernet, WiFi, & Cell Signal Boosting – Network Installation & Support"
        description="Expert Ethernet & WiFi setup, signal boosting & large-area design. We optimize speed, install smart WiFi & handle wiring. Get reliable connectivity today!"
      />
      <Header
        layout={{
          mobileHeight: "150px",
          tabletHeight: "150px",
          desktopHeight: "150px",
        }}
        background={{
          backColor: BLACK,
        }}
        content={{
          title: (
            <Subtitle component="h1" sx={{ marginTop: "50px" }}>
              NETWORK & WIFI
            </Subtitle>
          ),
        }}
      />

      <Wrapper>
        <Container disableGutters>
          <GetServiceCard data={networkWifi} />
          <ButtonsBox>
            <BackButton href={ROUTES.GET_SERVICES}>&#10229; BACK</BackButton>
          </ButtonsBox>
        </Container>
      </Wrapper>
    </>
  );
}
