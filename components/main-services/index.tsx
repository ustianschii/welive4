import React from "react";
import { Container } from "./styles";
import { Card } from "./main-services-card";
import { servicesData } from "./main-services-card/data";

export const MainServices = () => {
  return (
    <Container>
      {servicesData.map((service) => (
        <Card
          key={service.text}
          link={service.link}
          img={service.img}
          imgdesktop={service.imgdesktop}
          text={service.text}
        />
      ))}
    </Container>
  );
};
