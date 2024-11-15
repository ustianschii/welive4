import React from "react";

import { Container, Description, Title, Button } from "../statistic/styles";
import { Highlighted } from "../hero-title/styles";
import { Separator } from "../shared/gray-separator";
import { ROUTES } from "../../src/app/utils/routes-constants";
import { GreenDivider } from "../shared/green-divider";

import Link from "next/link";

export const SystemDesign = () => {
  return (
    <>
      <Container>
        <Title>
          SYSTEM<Highlighted>DESIGN</Highlighted>
        </Title>
        <Description>
          At WE LIVE 4, we&apos;re dedicated to your satisfaction, right from
          the beginning to the end. Our seamless design process ensures that
          your unique needs are met while also saving your valuable time and
          money. <br /> <br />
          We believe in optimizing system performance to its fullest potential.
           Trust us for expert advice and enjoy free consultations — we&apos;re
          here to turn your vision into reality!
        </Description>
        <Link href={ROUTES.CONSULTATION}>
          <Button>GET A FREE QUOTE!</Button>
        </Link>
      </Container>
      <GreenDivider />
      <Separator />
    </>
  );
};
