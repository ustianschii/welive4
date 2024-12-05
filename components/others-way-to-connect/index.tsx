import React from "react";

import { BannerContainer, Description, Title, Wrapper } from "./styles";

import { Box } from "@mui/material";

import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://www.facebook.com/welive4.co",
    src: "consultation/facebook.svg",
    alt: "Facebook icon",
    description:
      "Join our community on Facebook for exclusive updates, special offers, and insider insights into our cutting-edge home and building automation solutions.",
  },
  {
    href: "https://www.instagram.com/welive4.co",
    src: "consultation/instagram.svg",
    alt: "Instagram icon",
    description:
      "Discover inspiration, tips, and behind-the-scenes moments that showcase the power of automation by following us on Instagram!",
  },
];

export const OtherWayToConnect = () => {
  return (
    <Wrapper>
      <BannerContainer>
        <Title>Other ways to connect</Title>
        <Box>
          {socialLinks.map(({ href, src, alt, description }) => (
            <Box display="flex" m="20px 0" key={alt}>
              <Link href={href} target="_blank" rel="noopener noreferrer">
                <Image alt={alt} src={src} height={70} width={68} />
              </Link>
              <Description>{description}</Description>
            </Box>
          ))}
        </Box>
      </BannerContainer>
    </Wrapper>
  );
};
