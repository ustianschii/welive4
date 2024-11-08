import React from "react";

import Image from "next/image";

import { Container, Description, Subtitle, Title } from "./styles";

export const PartneredInstaller = () => {
  return (
    <Container disableGutters>
      <Image
        alt="loxone-logo"
        src="/loxone-commercial/loxone-big-logo.png"
        width={300}
        height={60}
      />
      <Image
        alt="welive4-logo"
        src="/header-mobile/logo.svg"
        width={300}
        height={70}
        style={{ marginTop: "20px" }}
      />
      <Title>WE LIVE 4: LOXONE Partnered Installer</Title>
      <Description>
        At WE LIVE 4, we take pride in being your trusted Loxone partnered
        installers. With years of experience and expertise, our team is
        dedicated to delivering top-notch solutions that meet your specific
        needs.
      </Description>
      <Description>
        From initial consultation to installation and beyond, we&apos;re here to
        guide you every step of the way, ensuring a seamless experience and
        maximum satisfaction.
      </Description>
      <Subtitle>Design system to every custom application</Subtitle>
      <Description>
        No two spaces are the same, which is why we specialize in tailoring
        Loxone systems to fit every custom application.
      </Description>
      <Description>
        Whether you&apos;re looking to automate your home, office, or commercial
        property, our experts will work closely with you to understand your
        requirements and design a solution that perfectly aligns with your
        vision.
      </Description>
      <Description>
        With our personalized approach, you can rest assured that your Loxone
        system will be optimized to enhance efficiency, comfort, and
        convenience.
      </Description>
      <Subtitle>Integrate with leading brands in the business</Subtitle>
      <Description>
        We believe in offering you the best of the best. That&apos;s why
        we partner with leading brands in the industry to provide you with a
        comprehensive range of options for your automation needs.
      </Description>
      <Description>
        From lighting and shading elements to security and audio-visual systems,
        we integrate top-quality products seamlessly into your Loxone setup,
        ensuring a smooth and efficient operation every step of the way.
      </Description>
    </Container>
  );
};
