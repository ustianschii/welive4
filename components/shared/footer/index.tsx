import React from "react";

import { Box, Divider } from "@mui/material";

import Image from "next/image";

import {
  Container,
  Description,
  FastLinks,
  Title,
  LinksContainer,
  Label,
  Button,
  Adress,
  AdressBox,
  Copyright,
  Logo,
  GroupBox,
} from "./styles";
import { BLACK, GRAY } from "@/styles/constants";
import { FooterProps } from "./types";
import { ROUTES } from "../../../utils/routes-constants";

import Link from "next/link";

export const Footer: React.FC<FooterProps> = ({ divider }) => {
  const ABOUT_US_LINKS = [
    { label: "Privacy policy", href: ROUTES.PRIVACY_POLICY },
    { label: "Our brands", href: "#our-brands" },
    { label: "Reviews", href: "#reviews" },
  ];

  const OUR_SERVICES_LINKS = [
    {
      label: "Home theater & entertainment",
      href: ROUTES.AUDIO_VISUAL_SYSTEMS,
    },
    { label: "Smart home automation", href: ROUTES.LOXONE_AUTOMATION },
    { label: "Smart EV charger", href: ROUTES.ENERGY_MANAGEMENT },
    { label: "Solar installation", href: ROUTES.ENERGY_MANAGEMENT },
    { label: "TV mounting", href: ROUTES.OUTDOOR_TV },
    { label: "Network", href: ROUTES.NETWORK_SYSTEM },
  ];

  const OUR_LOCATION_LINKS = [
    "Pennsylvania",
    "Philadelphia",
    "New Jersey",
    "Delaware",
  ];

  return (
    <Box sx={{ backgroundColor: BLACK }}>
      {divider}
      <Container disableGutters maxWidth="lg">
        <GroupBox>
          <Logo alt="logo" src="/header-mobile/logo.svg" width={0} height={0} />
          <Description>
            We are dedicated to our customers, and they benefit from our
            understanding of their individual differences and needs. We have
            strong technical know-how around your electronics. We uncover
            possible pitfalls, price estimates, and expectations of quality
            before starting a job and focus on your dream with the best possible
            solution. 
          </Description>
        </GroupBox>
        <FastLinks>
          <LinksContainer>
            <Title>About us</Title>
            {ABOUT_US_LINKS.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <Label key={index}>{item.label}</Label>
              </Link>
            ))}
          </LinksContainer>

          <LinksContainer className="second">
            <Title>Our services</Title>
            {OUR_SERVICES_LINKS.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <Label key={index}>{item.label}</Label>
              </Link>
            ))}
          </LinksContainer>

          <LinksContainer>
            <Title>Our location</Title>
            {OUR_LOCATION_LINKS.map((item, index) => (
              <Label key={index}>{item}</Label>
            ))}
          </LinksContainer>
        </FastLinks>
        <Button href={ROUTES.CONSULTATION}>CONTACT US</Button>
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
    </Box>
  );
};
