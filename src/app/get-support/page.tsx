import React from "react";

import Image from "next/image";

import { IconButton } from "@mui/material";

import { GetServiceCard } from "@/components/shared/get-services-black-card";
import { support } from "@/components/shared/get-services-black-card/services";
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

export default function GetSupport() {
  return (
    <>
      <Meta
        title="Warranty Claims, Troubleshooting & Electronics Recycling Services"
        description="Easily file a warranty claim, get expert troubleshooting services, and recycle old electronics responsibly. We diagnose and resolve tech issues, provide repair estimates, and ensure eco-friendly disposal. Schedule your service today!"
      />
      <Header
        mobileheight="150px"
        tabletheight="150px"
        desktopheight="150px"
        backcolor={BLACK}
        title={<Subtitle sx={{ marginTop: "50px" }}>SUPPORT</Subtitle>}
      />
      <Wrapper>
        <Container disableGutters>
          <GetServiceCard data={support} />
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
