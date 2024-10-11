import React from "react";

import Image from "next/image";

import { Container, Title, Description, Button } from "./styles";
import { Highlighted } from "../hero-title/styles";
import { GREEN } from "@/styles/constants";
import { Separator } from "../shared/gray-separator";
import { GreenDivider } from "../shared/green-divider";

export const RGBW = () => {
  return (
    <>
      <Container disableGutters>
        <Image
          alt="game-console"
          src="/rgbw-mobile/game-console.png"
          height={480}
          width={460}
          style={{
            borderRadius: "10px",
            width: "95%",
            height: "auto",
            margin: "30px 10px",
          }}
        />
        <Title>
          Customized <Highlighted>RGBW</Highlighted> <br /> design
        </Title>
        <Description>
          In today’s technology-driven world, smart home devices have become an
          integral part of our daily lives. One such innovation that has gained
          immense popularity is the RGBW LED strip controller. With the ability
          to create vibrant and customizable lighting effects, this device has
          revolutionized home decor and lighting solutions.
        </Description>
        <Button>
          GET A <span style={{ color: GREEN, margin: "0 4px" }}>RGBW</span>{" "}
          DESIGN
        </Button>
      </Container>
      <Separator />
      <GreenDivider />
    </>
  );
};
