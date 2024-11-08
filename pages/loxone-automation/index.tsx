import React from "react";

import AutomationLayout from "./layout";
import { ActionBanner } from "../../components/shared/action-banner";
import { ForResidential } from "../../components/for-residential";
import { ForCommercial } from "../../components/for-commercial";
import { Video } from "../../components/video";

import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function LoxoneAutomation() {
  const theme = useTheme();

  return (
    <AutomationLayout>
      <Box
        sx={{
          display: "flex",
          [theme.breakpoints.down("md")]: {
            flexDirection: "row",
          },
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
      >
        <ForResidential />
        <ForCommercial />
      </Box>
      <Video />
      <ActionBanner />
    </AutomationLayout>
  );
}
