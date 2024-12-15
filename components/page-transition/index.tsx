"use client";

import { AnimatePresence, motion } from "motion/react";
import { PageTransitionProps } from "./types";

export default function PageTransition({
  children,
  pathname,
}: Readonly<PageTransitionProps>) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        // initial={{ opacity: 0, filter: "blur(10px)" }}
        // animate={{ opacity: 1, filter: "blur(0px)" }}
        // exit={{ opacity: 0, filter: "blur(10px)" }}
        // transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
