"use client";

import { Box } from "@mui/material";

import { Meta } from "@/components/meta";

interface ClientPostBoxProps {
  iframeUrl: string;
  title: string;
  description: string;
}

export default function ClientPostBox({
  iframeUrl,
  title,
  description,
}: ClientPostBoxProps) {
  return (
    <Box height="110vh" m="0 auto" overflow="hidden" width="100%" pt="50px">
      <Meta title={title} description={description} />
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
