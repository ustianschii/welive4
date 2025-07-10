import React from "react";

import Link from "next/link";

import { Button, Container, Description, Title } from "./styles";
import { Highlighted } from "../hero-title/styles";
import { GreenDivider } from "../shared/green-divider";
import { Separator } from "../shared/gray-separator";
import { ROUTES } from "@/src/app/utils/routes-constants";

export const Statistic = () => {
  return (
    <>
      <Container>
        <Title>
          DON&apos;T BECOME A<Highlighted mLeft="5px">STATISTIC</Highlighted>
        </Title>
        <Description component="h2">
          Smart technology offers many innovative designs and solutions to
          enhance your lifestyle, increase comfort, and even generate additional
          passive income for your household — not to mention making life more
          fun! You can enjoy a better living experience without overspending.
          Potential Loxone smart home advantages include whole-house audio, home
          entry control, automated lighting, video doorbells, premium
          entertainment systems, smart energy distribution, and other advanced
          features you can control with a single click on your remote,
          smartphone, or control panel. OR... do nothing — Loxone smart home
          will handle everything for you! Plus, for outdoor entertainment, a
          professional outdoor TV installation ensures a seamless setup.
        </Description>
        <Link href={ROUTES.CONSULTATION}>
          <Button>CALCULATE YOUR BUDGET</Button>
        </Link>
      </Container>
      <GreenDivider />
      <Separator />
    </>
  );
};
