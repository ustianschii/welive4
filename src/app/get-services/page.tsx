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
        description="Explore expert network & WiFi setup, smart home automation, home theater design, EV tech, TV mounting, and device support. Get professional consultation and seamless tech integration for your home or business. Contact us today!"
      />
      <Header
        mobileheight="150px"
        tabletheight="150px"
        desktopheight="150px"
        backcolor={BLACK}
        title={
          <Subtitle component="h1" sx={{ marginTop: "50px" }}>
            GET OUR<Highlighted>SERVICES</Highlighted>
          </Subtitle>
        }
      />
      <ServicesList />
    </>
  );
}
