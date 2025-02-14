import React from "react";

import { Divider } from "@mui/material";
import { GREEN } from "@/src/styles/constants";

export const GreenDivider = () => {
  return <Divider flexItem sx={{ background: GREEN, height: "2px" }} />;
};
