import React from "react";

import { Divider } from "@mui/material";

import Image from "next/image";

import {
  Container,
  Description,
  LinksColumn,
  FastLinks,
  Title,
  LinksContainer,
  Link,
  Button,
  Adress,
  AdressBox,
  Copyright,
} from "./styles";
import { GRAY } from "@/styles/constants";
import { FooterProps } from "./types";

export const Footer: React.FC<FooterProps> = ({ divider }) => {
  const ABOUT_US_LINKS = ["Privacy policy", "Our brands", "Reviews", "Blog"];
  const OUR_LOCATION_LINKS = [
    "Pennsylvania",
    "Philadelphia",
    "New Jersey",
    "Delaware",
  ];

  return (
    <>
      {divider}
      <Container disableGutters>
        <Image
          alt="logo"
          src="/header-mobile/logo.svg"
          width={240}
          height={120}
        />
        <Description>
          We are dedicated to our customers, and they benefit from our
          understanding of their individual differences and needs. We have
          strong technical know-how around your electronics. We uncover possible
          pitfalls, price estimates, and expectations of quality before starting
          a job and focus on your dream with the best possible solution. 
        </Description>
        <FastLinks>
          <LinksColumn>
            <Title>About us</Title>
            <LinksContainer>
              {ABOUT_US_LINKS.map((item, index) => (
                <Link key={index}>{item}</Link>
              ))}
            </LinksContainer>
          </LinksColumn>
          <LinksColumn>
            <Title>Our location</Title>
            <LinksContainer>
              {OUR_LOCATION_LINKS.map((item, index) => (
                <Link key={index}>{item}</Link>
              ))}
            </LinksContainer>
          </LinksColumn>
        </FastLinks>
        <Button>CONTACT US</Button>
        <AdressBox>
          <Image
            alt="location-icon"
            src="/footer/location-logo.png"
            height={36}
            width={36}
          />
          <Adress>
            WE LIVE 4 HQ 300 Delaware Ave Suite 210-515 Wilmington, DE 19801
          </Adress>
        </AdressBox>
        <Divider sx={{ backgroundColor: GRAY }} flexItem />
        <Copyright>
          © 2024 WE LIVE 4  PA HIC# PA180918 | NJ HIC# 13VH11384300
        </Copyright>
      </Container>
    </>
  );
};
