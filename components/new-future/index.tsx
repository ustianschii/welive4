import React from "react";

import { Container, ContentBox, Description, Title } from "./styles";

import Image from "next/image";
import { Highlighted } from "../hero-title/styles";

export const NewFuture = () => {
  return (
    <Container disableGutters>
      <ContentBox>
        <Image
          alt="smart-home-progress"
          src="/loxone-residential/new-future.png"
          width={380}
          height={230}
          style={{ borderRadius: "10px" }}
        ></Image>
        <Title>
          Why Is<Highlighted>LOXONE</Highlighted>The <br />
          <Highlighted>New Future</Highlighted>Of Smart <br />
          Automation?
        </Title>
        <Description>
          Today, we&apos;re all too familiar with the concept of smart homes
          (also known as Smart Home 2.0). We control lighting systems,
          thermostats, and more using voice-controlled assistants like Amazon
          Alexa.
        </Description>
        <Description>
          But in a world where time and convenience matter most, just using
          voice commands might not be enough for you!
        </Description>
        <Description>
          That&apos;s where Loxone home automation comes in. It&apos;s changing
          how we do things at home, making everyday tasks easier, cozier, and
          safer.
        </Description>
      </ContentBox>
    </Container>
  );
};
