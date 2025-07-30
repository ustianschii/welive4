"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import { GREEN, BLACK } from "@/src/styles/constants";

export default function ClientPostBox({ iframeUrl }: { iframeUrl: string }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box bgcolor={BLACK}>
      <Box
        height="100vh"
        m="0 auto"
        pb="3rem"
        position="relative"
        overflow="hidden"
        sx={{
          width: "100%",
          "@media (min-width: 1200px)": {
            width: "50%",
          },
        }}
      >
        <iframe
          src={iframeUrl}
          width="100%"
          height="100%"
          style={{
            border: isDesktop ? `1px solid ${GREEN}` : "none",
            borderRadius: isDesktop ? "10px" : "0",
          }}
        />
      </Box>
    </Box>
  );
}
