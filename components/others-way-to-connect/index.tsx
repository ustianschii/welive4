import React from "react";

import { Box } from "@mui/material";

import Image from "next/image";
import Link from "next/link";

import { BannerContainer, Description, Title, Wrapper } from "./styles";
import { socialLinks } from "./data";

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
