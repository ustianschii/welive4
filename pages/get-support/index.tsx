import React from "react";

import Image from "next/image";

import { IconButton } from "@mui/material";

import GetSupportLayout from "./layout";
import { GetServiceCard } from "../../components/shared/get-services-black-card";
import { support } from "../../components/shared/get-services-black-card/services";
import { ROUTES } from "../../utils/routes-constants";
import {
  BackButton,
  Wrapper,
  Container,
  ButtonsBox,
} from "../../components/shared/get-services-black-card/styles";

export default function GetSupport() {
  return (
    <GetSupportLayout>
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
    </GetSupportLayout>
  );
}
