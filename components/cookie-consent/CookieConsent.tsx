"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {
  getStoredCookieConsent,
  setStoredCookieConsent,
  COOKIE_SETTINGS_OPEN_EVENT,
} from "./storage";
import { BLACK, WHITE } from "@/src/styles/constants";
import { opensans, raleway } from "@/src/app/layout";
import { ROUTES } from "@/src/app/utils/routes-constants";

export const CookieConsent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(!getStoredCookieConsent());

    const handleOpenSettings = () => {
      setIsOpen(true);
    };

    window.addEventListener(COOKIE_SETTINGS_OPEN_EVENT, handleOpenSettings);

    return () => {
      window.removeEventListener(
        COOKIE_SETTINGS_OPEN_EVENT,
        handleOpenSettings
      );
    };
  }, []);

  const handleConsent = (value: "accepted" | "rejected") => {
    setStoredCookieConsent(value);
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        inset: { xs: "auto 16px 16px 16px", sm: "auto 24px 24px 24px" },
        zIndex: 1400,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <Paper
        elevation={16}
        sx={{
          width: "100%",
          maxWidth: 720,
          backgroundColor: BLACK,
          color: WHITE,
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: "20px",
          p: { xs: 2.5, sm: 3 },
          pointerEvents: "auto",
          boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
        }}
      >
        <Stack spacing={2}>
          <Box>
            <Typography
              sx={{
                fontFamily: raleway.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: "24px", sm: "28px" },
                mb: 1,
              }}
            >
              Privacy & Cookies
            </Typography>

            <Typography
              sx={{
                fontFamily: opensans.style.fontFamily,
                fontSize: { xs: "14px", sm: "15px" },
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.86)",
              }}
            >
              We use cookies that are necessary for this website to function.
              With your permission, we also use cookies to understand how the
              site is used and to improve our services. You can accept or
              reject non-essential cookies. For more information, please review
              our{" "}
              <Link
                href={ROUTES.PRIVACY_POLICY}
                style={{
                  color: WHITE,
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                Privacy Policy
              </Link>
              .
            </Typography>
          </Box>

          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={1.5}
            justifyContent="flex-end"
          >
            <Button
              variant="outlined"
              onClick={() => handleConsent("rejected")}
              sx={{
                minHeight: 48,
                px: 2.5,
                borderRadius: "999px",
                borderColor: "rgba(255,255,255,0.4)",
                color: WHITE,
                fontFamily: opensans.style.fontFamily,
                textTransform: "none",
                "&:hover": {
                  borderColor: WHITE,
                  backgroundColor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              Reject Non-Essential
            </Button>
            <Button
              variant="contained"
              onClick={() => handleConsent("accepted")}
              sx={{
                minHeight: 48,
                px: 2.5,
                borderRadius: "999px",
                backgroundColor: WHITE,
                color: BLACK,
                fontFamily: opensans.style.fontFamily,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.9)",
                },
              }}
            >
              Accept All
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};
