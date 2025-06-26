import React from "react";

import { ServicesList } from "@/components/get-services";
import { BLACK } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import { Highlighted, Subtitle } from "@/components/hero-title/styles";
import { Meta } from "@/components/meta";

export default function GetServices() {
  return (
    <>
      <Meta
        title="Comprehensive Tech Services – Smart Home, WiFi, Home Theater, EV & More"
        description="Expert network & WiFi setup, smart automation, home theater, EV tech, TV mounting & device support. Get pro consultation & seamless integration today!"
      />
      <Header
        layout={{
          mobileHeight: "150px",
          tabletHeight: "150px",
          desktopHeight: "150px",
        }}
        background={{
          backColor: BLACK,
        }}
        content={{
          title: (
            <Subtitle component="h1" sx={{ marginTop: "50px" }}>
              GET OUR <Highlighted>SERVICES</Highlighted>
            </Subtitle>
          ),
        }}
      />

      <ServicesList />
    </>
  );
}
