import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import {
  Container,
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
import { opensans } from "@/src/app/layout";

interface FooterProps {
  divider?: React.ReactNode;
}

export const Footer = ({ divider }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ backgroundColor: BLACK }}>
      {divider}
      <Container disableGutters maxWidth="lg">
        <GroupBox>
          <Logo alt="logo" src="/header-mobile/logo.svg" width={0} height={0} />

          <Box
            sx={{
              fontFamily: opensans.style.fontFamily,
              mt: 2,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 2, md: 6 },
              color: "#d1d1d1",
              fontSize: "14px",
              lineHeight: 1.6,
              textAlign: "left",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "inherit",
                  fontFamily: opensans.style.fontFamily,
                }}
              >
                WeLive4 stands for four commitments to our clients. Our mission
                is to build lasting relationships by delivering exceptional
                service, thoughtful design, and reliable long-term support.
              </Typography>

              <Typography variant="body2" sx={{ fontSize: "inherit" }}>
                We understand that every client expects four essential elements
                in a trusted experience:
              </Typography>

              <Box
                component="ul"
                sx={{
                  m: 0,
                  pl: { xs: 2.5, md: 3 },
                  listStylePosition: "outside",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                <li>Clear communication</li>
                <li>Reliable service</li>
                <li>Expert guidance</li>
                <li>Ongoing support</li>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "inherit",
                  fontFamily: opensans.style.fontFamily,
                }}
              >
                These principles guide everything we design and implement.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "inherit",
                  fontFamily: opensans.style.fontFamily,
                }}
              >
                WeLive4 specializes in advanced smart home and Property
                Automated Safeguard solutions, serving Eastern European families
                and global homeowners across North America. Our approach blends
                refined interior aesthetics with intelligent technology
                architecture, ensuring that automation enhances design rather
                than disrupting it.
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "inherit",
                  fontFamily: opensans.style.fontFamily,
                }}
              >
                Every project begins with careful evaluation. We establish clear
                quality standards, develop system designs, manage project
                execution, and deliver end-to-end installation services. From
                concept to commissioning, each system is engineered for
                performance, reliability, and long-term value.
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "inherit",
                  fontFamily: opensans.style.fontFamily,
                }}
              >
                Our goal is simple: to deliver exceptional Property Automated
                Safeguard and home automation solutions while keeping your
                vision at the center of every decision.
              </Typography>
            </Box>
          </Box>
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
              href="tel:+13023949656"
              style={{
                textDecoration: "underline",
                textDecorationColor: "white",
              }}
              passHref
            >
              <Label>Call +1-302-394-9656</Label>
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
        <Copyright>© 2020-{currentYear} HEYO SMART TECHNOLOGY</Copyright>
      </Container>
    </Box>
  );
};
