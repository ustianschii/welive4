"use client";

import { Box } from "@mui/material";

export default function ClientPostBox({ iframeUrl }: { iframeUrl: string }) {
  return (
    <Box height="110vh" m="0 auto" overflow="hidden" width="100%" pt="50px">
      <iframe
        src={iframeUrl}
        width="100%"
        height="100%"
        style={{
          marginTop: "-100px",
          border: "none",
        }}
      />
    </Box>
  );
}
