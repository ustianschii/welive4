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
import { metadata } from "@/src/app/metadata";

export default function GetNetworkWifi() {
  return (
    <>
      <Meta
        title={metadata.GetNetworkWifi.title}
        description={metadata.GetNetworkWifi.description}
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
