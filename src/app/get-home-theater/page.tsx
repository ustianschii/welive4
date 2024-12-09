import React from "react";

import Image from "next/image";

import { IconButton } from "@mui/material";

import { GetServiceCard } from "@/components/shared/get-services-black-card";
import { homeTheater } from "@/components/shared/get-services-black-card/services";
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

export default function GetHomeTheater() {
  return (
    <>
      <Meta title="Get Home Theater" />
      <Header
        mobileheight="150px"
        tabletheight="150px"
        desktopheight="150px"
        backcolor={BLACK}
        title={<Subtitle sx={{ marginTop: "50px" }}>HOME THEATER</Subtitle>}
      />
      <Wrapper>
        <Container disableGutters>
          <GetServiceCard data={homeTheater} />
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
