import React from "react";
import {
  Address,
  BannerContainer,
  Container,
  Feature,
  FeaturesBox,
  FeatureText,
  Subtitle,
  Title,
  WorkingHours,
} from "./styles";
import { Box } from "@mui/material";

export const CustomerCare = () => {
  const features = [
    "ON-SITE ASSESSMENT",
    "EXPERT ADVICE",
    "REMOTE CONSULTATION",
    "ALL-FREE QUOTING",
  ];

  return (
    <Container>
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
        <Title>Locations</Title>
        <Box display="flex" flexDirection="row" gap="30px">
          <Address>
            WE LIVE 4 HQ <br />
            300 Delaware Ave <br />
            Suite 210-515 <br />
            Wilmington, DE 19801
          </Address>
          <Address>
            WE LIVE 4 Bethlehem <br />
            1 E Broad St <br />
            Ste 130-1115 <br />
            Bethlehem, PA 18018
          </Address>
          <Address>
            WE LIVE 4 Somerset <br />
            900 Easton Ave <br />
            Ste 26 PMB 1036 <br />
            Somerset, NJ 08873
          </Address>
        </Box>
        <Title>Working hours</Title>
        <WorkingHours>
          Monday - Friday: 8 am - 6 pm <br />
          Saturday: 9 am - 3 pm
        </WorkingHours>
      </BannerContainer>
    </Container>
  );
};
