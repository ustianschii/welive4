import Image from "next/image";

import { CardBox, CardTitle } from "./styles";
import { CardTypes } from "./types";

export const Card: React.FC<CardTypes> = ({ icon, text }) => {
  return (
    <CardBox>
      <Image alt="feature-logo" src={icon} height={45} width={45} />
      <CardTitle>{text}</CardTitle>
    </CardBox>
  );
};
