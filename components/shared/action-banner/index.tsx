"use client";

import Link from "next/link";
import { Box } from "@mui/material";

import { Button, ButtonsWrapper, Container, Title } from "./styles";
import { Highlighted } from "@/components/hero-title/styles";
import { GreenDivider } from "@/components/shared/green-divider";
import { ROUTES } from "@/src/app/utils/routes-constants";

export const ActionBanner = () => {
  return (
    <>
      <GreenDivider />
      <Box
        sx={{
          backgroundImage: `url(${"/action-banner/action-banner-bg.png"})`,
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Title>
            DISCOVER HOW
            <Highlighted mRight="5px" mLeft="5px">
              LOXONE
            </Highlighted>
            TRANSFORM YOUR SPACE!
          </Title>
          <ButtonsWrapper>
            <Box display="flex" gap="10px" mb="10px">
              <Button href={ROUTES.CHECKLIST_SHORT}>SMART CHECK LIST</Button>
              <Link
                href="https://www.loxone.com/enus/about-us/contact/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: "100%" }}
              >
                <Button>CONTACT LOXONE</Button>
              </Link>
            </Box>
            <Button href={ROUTES.CONSULTATION}>REMOTE CONSULTATION</Button>
          </ButtonsWrapper>
        </Container>
      </Box>
    </>
  );
};
