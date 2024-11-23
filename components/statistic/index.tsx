import React from "react";
import { Button, Container, Description, Title } from "./styles";
import { Highlighted } from "../hero-title/styles";
import { GreenDivider } from "../shared/green-divider";
import { Separator } from "../shared/gray-separator";
import Link from "next/link";
import { ROUTES } from "../../src/app/utils/routes-constants";

export const Statistic = () => {
  return (
    <>
      <Container>
        <Title>
          DON&apos;T BECOME A<Highlighted>STATISTIC</Highlighted>
        </Title>
        <Description>
          Smart technology has many cool designs and solutions to make your life
          more comfortable and bring additional passive income to your household
          - not to mention more fun! It is possible to live better without
          breaking the bank. Potential smart technology advantages include
          whole-house audio, home entry control, turning lights on and off,
          thermostats, power sockets, doorbells, vacuum cleaners, smart energy
          distribution, and other geeky things you could do with one click on
          your remote, smartphone, control panel, OR....do nothing, LOXONE will
          do everything for you!
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
