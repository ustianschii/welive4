import React from "react";

import Image from "next/image";

import { Box } from "@mui/material";

import { Container, Description, LogoWrapper, Subtitle, Title } from "./styles";
import { ARTICLE_BACKGROUND } from "@/styles/constants";

const sections = [
  {
    id: 1,
    subtitle: "Design system to every custom application",
    descriptions: [
      {
        id: 1,
        text: "No two spaces are the same, which is why we specialize in tailoring Loxone systems to fit every custom application.",
      },
      {
        id: 2,
        text: "Whether you’re looking to automate your home, office, or commercial property, our experts will work closely with you to understand your requirements and design a solution that perfectly aligns with your vision.",
      },
      {
        id: 3,
        text: "With our personalized approach, you can rest assured that your Loxone system will be optimized to enhance efficiency, comfort, and convenience.",
      },
    ],
  },
  {
    id: 2,
    subtitle: "Integrate with leading brands in the business",
    descriptions: [
      {
        id: 1,
        text: "We believe in offering you the best of the best. That’s why we partner with leading brands in the industry to provide you with a comprehensive range of options for your automation needs.",
      },
      {
        id: 2,
        text: "From lighting and shading elements to security and audio-visual systems, we integrate top-quality products seamlessly into your Loxone setup, ensuring a smooth and efficient operation every step of the way.",
      },
    ],
  },
];

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
