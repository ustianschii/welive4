import Image from "next/image";
import { IconButton } from "@mui/material";

import { GetServiceCard } from "@/components/shared/get-services-black-card";
import { consultation } from "@/components/shared/get-services-black-card/services";
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

export default function GetConsultation() {
  return (
    <>
      <Meta
        title={metadata.GetConsultation.title}
        description={metadata.GetConsultation.description}
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
              CONSULTATION
            </Subtitle>
          ),
        }}
      />
      <Wrapper>
        <Container disableGutters>
          <GetServiceCard data={consultation} />
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
