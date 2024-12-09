import React from "react";

import { Box, Card, CardMedia, useTheme } from "@mui/material";

import { Container, Title, Button } from "./styles";
import { SEPARATOR_BACKGROUND } from "@/src/styles/constants";
import { ROUTES } from "@/src/app/utils/routes-constants";

export const Video = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: SEPARATOR_BACKGROUND }}>
      <Container>
        <Title>Explore how LOXONE works in your space!</Title>
        <Card>
          <CardMedia
            component="video"
            src="https://www.youtube.com/watch?v=aLqNILG734U&ab_channel=Loxone%E2%80%93International"
            controls
            sx={{
              [theme.breakpoints.up("md")]: {
                height: "300px",
                width: "600px",
              },
              [theme.breakpoints.down("md")]: {
                height: "300px",
                width: "500px",
              },
              [theme.breakpoints.down("sm")]: {
                height: "200px",
                width: "350px",
              },
            }}
          />
        </Card>
        <Button href={ROUTES.LOXONE_PRESENTATION_REQUEST}>
          LEARN MORE ABOUT LOXONE
        </Button>
      </Container>
    </Box>
  );
};
