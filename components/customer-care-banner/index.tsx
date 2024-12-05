import React from "react";
import {
  Address,
  BannerContainer,
  Feature,
  FeaturesBox,
  FeatureText,
  Subtitle,
  Title,
  WorkingHours,
  Wrapper,
} from "./styles";
import { Box } from "@mui/material";

export const CustomerCare = () => {
  const features = [
    "ON-SITE ASSESSMENT",
    "EXPERT ADVICE",
    "REMOTE CONSULTATION",
    "PERSONALIZED EXPERIENCE",
  ];

  return (
    <Wrapper>
      <BannerContainer>
        <Subtitle>
          Reach out to our dedicated team for prompt assistance and personalized
          support. We&apos;re here to ensure your experience with WE LIVE 4
          exceeds expectations every step of the way.
        </Subtitle>
        <FeaturesBox>
          {features.map((feature) => (
            <Feature key={feature}>
              <FeatureText>{feature}</FeatureText>
            </Feature>
          ))}
        </FeaturesBox>
        <Title>COUNTRYWIDE</Title>
        <Box display="flex" flexDirection="row" gap="30px">
          <Address>
            We Live 4 is based in Delaware. We specialize in technology design
            and integration services for Eastern European-Americans and anyone
            who emphasizes durability with a focus on functionality and
            practicality. Our tailored solutions cater to commercial buildings,
            offices, and homes all across the United States, from Alaska to
            Miami. We focus on systems and custom devices integration, software
            development, networking, green tech, and Audio & Video solutions. We
            adapt our services to meet the unique challenges of each region.{" "}
            <br /> <br />
            Our team uses advanced communication tools for continuous
            collaboration with clients. We are committed to innovation and
            incorporate the latest technologies. This forward-thinking approach
            prepares you for future challenges and supports your business and
            personal goals and experience. Contact us today to discover how we
            can help you thrive!
          </Address>
        </Box>
        <Title>WORKING HOURS</Title>
        <WorkingHours>
          Monday - Thursday: 9 AM - 6 PM <br /> <br />
          Friday: 9 AM - 5 PM <br /> <br /> Eastern Standard Time
        </WorkingHours>
      </BannerContainer>
    </Wrapper>
  );
};
