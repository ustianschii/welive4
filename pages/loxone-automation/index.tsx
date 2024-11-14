import React from "react";

import AutomationLayout from "./layout";
import { ActionBanner } from "../../components/shared/action-banner";
import { ForResidential } from "../../components/for-residential";
import { ForCommercial } from "../../components/for-commercial";
import { Video } from "../../components/video";

import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Header } from "../../components/shared/header";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "../../components/hero-title/styles";
import { GreenDivider } from "../../components/shared/green-divider";
import { HeaderSubtitle } from "../../components/shared/header-subtitle";
import { Footer } from "../../components/shared/footer";
import { Meta } from "../../components/meta";

export default function LoxoneAutomation() {
  const theme = useTheme();

  return (
    <AutomationLayout>
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
    </AutomationLayout>
  );
}
