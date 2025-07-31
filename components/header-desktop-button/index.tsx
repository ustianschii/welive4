import { motion } from "motion/react";
import { Button } from "@mui/material";

import { LinkLabel } from "./styles";

interface HeaderDesktopButtonProps {
  label: string;
  href: string;
}

export const HeaderDesktopButton = ({
  label,
  href,
}: HeaderDesktopButtonProps) => {
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
