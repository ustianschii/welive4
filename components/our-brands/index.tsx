"use client";

import { useMediaQuery, useTheme } from "@mui/material";

import { Container, Title, BrandsBox, BrandsImages } from "./styles";
import { Highlighted } from "@/components/hero-title/styles";
import { GreenDivider } from "@/components/shared/green-divider";
import { partners } from "./data";

export const OurPartners = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const getWidth = () => {
    if (isMobile) return 150;
    if (isTablet) return 200;
    return 250;
  };
  const getHeight = () => {
    if (isMobile) return 60;
    if (isTablet) return 100;
    return 300;
  };

  const infinitePartners = [...partners, ...partners];

  return (
    <>
      <Container id="our-brands">
        <Title>
          OUR<Highlighted mLeft="5px">PARTNERS</Highlighted>
        </Title>
        <BrandsBox>
          {infinitePartners.map((partner, index) => (
            <BrandsImages
              key={index + 1}
              alt="our-brands"
              src={partner}
              width={getWidth()}
              height={getHeight()}
            />
          ))}
        </BrandsBox>
      </Container>
      <GreenDivider />
    </>
  );
};
