import React from "react";

import { Box, Divider, Typography } from "@mui/material";

import Image from "next/image";
import Link from "next/link";

import {
  Container,
  Description,
  FastLinks,
  Label,
  Adress,
  AdressBox,
  Copyright,
  Logo,
  GroupBox,
  ContactsBox,
  Contact,
  ContactLabel,
} from "./styles";
import { BLACK, GRAY } from "@/src/styles/constants";
import { emails, FOOTER_LINKS } from "./data";

interface FooterProps {
  divider?: React.ReactNode;
}

export const Footer = ({ divider }: FooterProps) => {
  return (
    <Box sx={{ backgroundColor: BLACK }}>
      {divider}
      <Container disableGutters maxWidth="lg">
        <GroupBox>
          <Logo alt="logo" src="/header-mobile/logo.svg" width={0} height={0} />
          <Description>
            About We Live 4: We are 4 dedication to our clients. Our mission is
            to build lasting relationships with our clients by providing
            exceptional service and support. We are aware that each client has 4
            particular requirements for a trusted experience: clear
            communication, reliable service, expert advice, and ongoing support.
            These principles guide everything we do. Meantime, we provide 4
            Eastern Europeans in North America the greatest smart home solutions
            that combine aesthetic interior design and technology setup. We
            assess any problems and establish precise standards for quality,
            offer design, do project management, and run end-to-end installation
            services. Our goal is to deliver exceptional solutions while keeping
            your vision at the forefront.
          </Description>
        </GroupBox>
        <Box m="30px 0">
          <Label>CONTACT US</Label>
          <ContactsBox>
            {emails.map((item) => (
              <Contact key={item.id}>
                <ContactLabel>{item.label}</ContactLabel>
                <Link
                  href={`mailto:${item.email}`}
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "white",
                  }}
                  passHref
                >
                  <Typography color="white" fontSize="14px">
                    {item.email}
                  </Typography>
                </Link>
              </Contact>
            ))}
          </ContactsBox>
          <Box mt="30px">
            <Link
              href="tel:+18779354834"
              style={{
                textDecoration: "underline",
                textDecorationColor: "white",
              }}
              passHref
            >
              <Label>Call +1-877-935-4834</Label>
            </Link>
          </Box>
        </Box>
        <FastLinks>
          {FOOTER_LINKS.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <Label key={index}>{item.label}</Label>
            </Link>
          ))}
        </FastLinks>
        <AdressBox>
          <Image
            alt="location-icon"
            src="/footer/location-logo.png"
            height={36}
            width={36}
          />
          <Adress>
            WE LIVE 4 / HEYO SMART TECHNOLOGY HQ: 300 Delaware Ave Suite 210-515
            Wilmington, DE 19801
          </Adress>
        </AdressBox>
        <Divider sx={{ backgroundColor: GRAY }} flexItem />
        <Copyright>© 2020-2025 HEYO SMART TECHNOLOGY</Copyright>
      </Container>
    </Box>
  );
};
