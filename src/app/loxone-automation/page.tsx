"use client";

import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { ActionBanner } from "@/components/shared/action-banner";
import { ForResidential } from "@/components/for-residential";
import { ForCommercial } from "@/components/for-commercial";
import { Video } from "@/components/video";
import { Header } from "@/components/shared/header";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "@/components/hero-title/styles";
import { Meta } from "@/components/meta";
import { metadata } from "@/src/app/metadata";

export default function LoxoneAutomation() {
  const theme = useTheme();

  return (
    <>
      <Meta
        title={metadata.LoxoneAutomation.title}
        description={metadata.LoxoneAutomation.description}
        keywords={metadata.LoxoneAutomation.keywords}
      />
      <Header
        layout={{
          mobileHeight: "750px",
          tabletHeight: "750px",
          desktopHeight: "750px",
        }}
        background={{
          background: `url('loxone-automation/header-bg.png')`,
          tabletBackground: `url('loxone-automation/tablet/header-bg.png')`,
          desktopBackground: `url('loxone-automation/desktop/header-bg.png')`,
        }}
        content={{
          title: (
            <HeaderTextBox>
              <Subtitle component="h1">
                Loxone Automation:{" "}
                <Highlighted>The Future-proof Of Smart Automation</Highlighted>
              </Subtitle>
            </HeaderTextBox>
          ),
          subtitle: [
            "Imagine walking into your home, office, warehouse, restaurant or whatever place that brings you good memories that intuitively knows your needs, enhancing comfort and convenience at every turn.",
            "With LOXONE’s cutting-edge smart automation solutions, that vision becomes a reality. Founded in Austria in 2009 and backed by its successful implementation of over 200,000 projects globally, WeLive4 as part of LOXONE committed to transforming how people interact with their spaces. Our technology adapts to your lifestyle, ensuring your environment is not just smart, but intelligently responsive. LOXONE makes a mark in North America since 2019, Loxone US is swiftly becoming known as an industry leader in delivering exceptional smart automation experiences. Picture your properties—whether residential or commercial—being equipped with state-of-the-art automation that elevates the living and working environment, improves energy efficiency, and enhances security.",
            "We would love the opportunity to discuss how LOXONE can revolutionize your properties and provide a scenario tailored to your specific needs. Learn more and schedule a call with us today. Looking forward to connecting!",
          ],
          divider: true,
        }}
      />

      <Box
        sx={{
          background: "linear-gradient(to right, #787878 50%, #373840 50%)",
        }}
      >
        <Container
          maxWidth="lg"
          disableGutters
          sx={{
            display: "flex",
            [theme.breakpoints.up("md")]: {
              flexDirection: "row",
            },
            [theme.breakpoints.down("md")]: {},
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          }}
        >
          <ForResidential />
          <ForCommercial />
        </Container>
      </Box>
      <Video />
      <ActionBanner />
    </>
  );
}
