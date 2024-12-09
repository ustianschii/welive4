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
      <Meta title="Get Network & WiFi" />
      <Header
        mobileheight="150px"
        tabletheight="150px"
        desktopheight="150px"
        backcolor={BLACK}
        title={<Subtitle sx={{ marginTop: "50px" }}>NETWORK & WIFI</Subtitle>}
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
