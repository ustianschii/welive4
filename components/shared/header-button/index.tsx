"use client";

import React from "react";

import Link from "next/link";

import { Button } from "./styles";
import { CustomButtonProps } from "./types";
import { ROUTES } from "@/src/app/utils/routes-constants";

export const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
  return (
    <Link href={ROUTES.CONSULTATION}>
      <Button variant="outlined">{text}</Button>
    </Link>
  );
};
