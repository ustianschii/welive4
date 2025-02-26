import React from "react";

import { IconButton } from "@mui/material";

import Image from "next/image";

import { GetServiceCard } from "@/components/shared/get-services-black-card";
import { smartHome } from "@/components/shared/get-services-black-card/services";
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

export default function GetSmartHome() {
  return (
    <>
      <Meta
        title="Complete Smart Home Technology Design & LOXONE Automation"
        description="Custom smart home automation with LOXONE. Integrate HVAC, lighting, security & internet for a seamless experience. Get expert consultation today!"
      />
      <Header
        mobileheight="150px"
        tabletheight="150px"
        desktopheight="150px"
        backcolor={BLACK}
        title={
          <Subtitle component="h1" sx={{ marginTop: "50px" }}>
            SMART HOME
          </Subtitle>
        }
      />
      <Wrapper>
        <Container disableGutters>
          <GetServiceCard data={smartHome} />
          <ButtonsBox>
            <BackButton href={ROUTES.GET_SERVICES}>&#10229; BACK</BackButton>
            <IconButton href={ROUTES.CART_CHOOSED_SERVICES}>
              <Image
                src="/get-services/cart.svg"
                alt="cart-icon"
                width={70}
                height={70}
              />
            </IconButton>
          </ButtonsBox>
        </Container>
      </Wrapper>
    </>
  );
}
