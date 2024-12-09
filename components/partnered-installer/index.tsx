import React from "react";

import Image from "next/image";

import { Box } from "@mui/material";

import { Container, Description, LogoWrapper, Subtitle, Title } from "./styles";
import { ARTICLE_BACKGROUND } from "@/src/styles/constants";
import { sections } from "./data";

export const PartneredInstaller = () => {
  return (
    <Box sx={{ backgroundColor: ARTICLE_BACKGROUND }}>
      <Container maxWidth="lg" disableGutters>
        <LogoWrapper>
          <Image
            alt="loxone"
            src="/loxone-commercial/loxone-logo.svg"
            width={260}
            height={50}
            quality={100}
          />
          <Image
            alt="welive4"
            src="/header-mobile/logo.svg"
            width={300}
            height={70}
            style={{ marginTop: "20px" }}
          />
        </LogoWrapper>

        <Title>WE LIVE 4: LOXONE Partnered Installer</Title>
        <Description>
          At WE LIVE 4, we take pride in being your trusted Loxone partnered
          installers. With years of experience and expertise, our team is
          dedicated to delivering top-notch solutions that meet your specific
          needs.
        </Description>
        <Description>
          From initial consultation to installation and beyond, we&apos;re here
          to guide you every step of the way, ensuring a seamless experience and
          maximum satisfaction.
        </Description>
        {sections.map((section) => (
          <Box key={section.id}>
            <Subtitle>{section.subtitle}</Subtitle>
            {section.descriptions.map((desc) => (
              <Description key={desc.id}>{desc.text}</Description>
            ))}
          </Box>
        ))}
      </Container>
    </Box>
  );
};
