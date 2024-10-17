import { CardBox, CardTitle } from "./styles";

import { CardTypes } from "./types";

import Image from "next/image";

export const Card: React.FC<CardTypes> = ({ icon, text }) => {
  return (
    <CardBox>
      <Image alt="feature-logo" src={icon} height={50} width={50} />
      <CardTitle noWrap={false}>{text}</CardTitle>
    </CardBox>
  );
};
