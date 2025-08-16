"use client";

import { Box, Typography, Container, Divider, Button } from "@mui/material";

import { BLACK, GREEN, WHITE } from "@/src/styles/constants";

export default function NotFound() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: BLACK,
      }}
    >
      <Box display="flex" alignItems="center">
        <Typography
          variant="h6"
          component="h1"
          sx={{
            fontWeight: 400,
            color: "white",
          }}
        >
          <Typography component="span" fontSize="20px" fontWeight="500">
            404
          </Typography>
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            backgroundColor: "white",
            mx: 2,
          }}
        />
        <Typography
          variant="h6"
          component="span"
          sx={{
            fontWeight: 500,
            color: "white",
          }}
        >
          This page could not be found.
        </Typography>
      </Box>
      <Button
        href="/"
        variant="outlined"
        disableRipple
        sx={{
          mt: 3,
          borderColor: WHITE,
        }}
      >
        <Typography
          sx={{
            textTransform: "none",
            color: WHITE,
            "&:hover": {
              color: GREEN,
            },
          }}
        >
          Go to Homepage
        </Typography>
      </Button>
    </Container>
  );
}
