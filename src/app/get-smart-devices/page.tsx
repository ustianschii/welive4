import React from "react";

import Image from "next/image";

import { IconButton } from "@mui/material";

import { GetServiceCard } from "../../../components/shared/get-services-black-card";
import { smartDevices } from "../../../components/shared/get-services-black-card/services";
import { ROUTES } from "../utils/routes-constants";
import {
  BackButton,
  Wrapper,
  Container,
  ButtonsBox,
} from "../../../components/shared/get-services-black-card/styles";
import { BLACK } from "@/styles/constants";

import { Header } from "../../../components/shared/header";
import { GreenDivider } from "../../../components/shared/green-divider";

import { Subtitle } from "../../../components/hero-title/styles";
import { Meta } from "../../../components/meta";

export default function GetSmartDevices() {
  return (
    <>
      <Meta title="Get Smart Devices" />
      <Header
        mobileheight="250px"
        tabletheight="300px"
        desktopheight="300px"
        backcolor={BLACK}
        dividerTop={<GreenDivider />}
        title={<Subtitle sx={{ marginTop: "50px" }}>SMART DEVICES</Subtitle>}
      />
      <Wrapper>
        <Container disableGutters>
          <GetServiceCard data={smartDevices} />
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