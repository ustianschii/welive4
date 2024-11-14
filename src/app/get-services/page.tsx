import React from "react";

import { ServicesList } from "../../../components/get-services";
import { BLACK } from "@/styles/constants";
import { Header } from "../../../components/shared/header";
import { GreenDivider } from "../../../components/shared/green-divider";
import { Highlighted, Subtitle } from "../../../components/hero-title/styles";

export default function GetServices() {
  return (
    <>
      <Header
        mobileheight="250px"
        tabletheight="300px"
        desktopheight="300px"
        backcolor={BLACK}
        dividerTop={<GreenDivider />}
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
