"use client";

import Link from "next/link";

import { Button } from "./styles";
import { ROUTES } from "@/src/app/utils/routes-constants";

interface CustomButtonProps {
  text: string;
}

export const CustomButton = ({ text }: CustomButtonProps) => {
  return (
    <Link href={ROUTES.CONSULTATION}>
      <Button variant="outlined">{text}</Button>
    </Link>
  );
};
