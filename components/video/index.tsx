import React from "react";

import { Container, Title, Button } from "./styles";

import { Card, CardMedia, useTheme } from "@mui/material";

export const Video = () => {
  const theme = useTheme();

  return (
    <Container>
      <Title>Explore how LOXONE works in your space!</Title>
      <Card>
        <CardMedia
          component="video"
          src="https://www.youtube.com/watch?v=aLqNILG734U&ab_channel=Loxone%E2%80%93International"
          controls
          // height="180px"
          // width="300px"
          sx={{
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
      <Button>LEARN MORE ABOUT LOXONE</Button>
    </Container>
  );
};
