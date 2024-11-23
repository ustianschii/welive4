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
          At WE LIVE 4, your satisfaction is our priority. From start to finish,
          we focus on your needs. Our smooth design process saves you time and
          money. We are committed to optimizing your system&apos;s performance.
          Trust our expert advice for the best results. Enjoy free consultations
          with us. Let&apos;s turn your vision into reality!
        </Description>
        <Link href={ROUTES.CONSULTATION}>
          <Button>ORDER YOUR DESIGN TODAY!</Button>
        </Link>
      </Container>
      <GreenDivider />
      <Separator />
    </>
  );
};
