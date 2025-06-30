import React from "react";

import { ServicesList } from "@/components/get-services";
import { BLACK } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import { Highlighted, Subtitle } from "@/components/hero-title/styles";
import { Meta } from "@/components/meta";
import { metadata } from "@/src/app/metadata";

export default function GetServices() {
  return (
    <>
      <Meta
        title={metadata.GetServices.title}
        description={metadata.GetServices.description}
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
