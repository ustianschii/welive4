import React from "react";

import { ServicesList } from "@/components/get-services";
import { BLACK } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import { Highlighted, Subtitle } from "@/components/hero-title/styles";
import { Meta } from "@/components/meta";

export default function GetServices() {
  return (
    <>
      <Meta title="Get Services" />
      <Header
        mobileheight="150px"
        tabletheight="150px"
        desktopheight="150px"
        backcolor={BLACK}
        title={
          <Subtitle sx={{ marginTop: "50px" }}>
            GET OUR<Highlighted>SERVICES</Highlighted>
          </Subtitle>
        }
      />
      <ServicesList />
    </>
  );
}
