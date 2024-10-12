import React from "react";
import { Button } from "./styles";
import { CustomButtonProps } from "./types";

export const CustomButton: React.FC<CustomButtonProps> = ({ text }) => {
  return <Button variant="outlined">{text}</Button>;
};
