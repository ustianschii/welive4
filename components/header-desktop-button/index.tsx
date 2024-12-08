import React, { FC } from "react";

import { motion } from "motion/react";

import { Button } from "@mui/material";

import { LinkLabel } from "./styles";

import { HeaderDesktopButtonProps } from "./types";

export const HeaderDesktopButton: FC<HeaderDesktopButtonProps> = ({
  label,
  href,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 1.1, transition: { duration: 0.1 } }}
    >
      <Button href={href}>
        <LinkLabel>{label}</LinkLabel>
      </Button>
    </motion.div>
  );
};
