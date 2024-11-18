import React from "react";

import { ServicesList } from "../../../components/get-services";
import { BLACK } from "@/styles/constants";
import { Header } from "../../../components/shared/header";
import { GreenDivider } from "../../../components/shared/green-divider";
import { Highlighted, Subtitle } from "../../../components/hero-title/styles";
import { Meta } from "../../../components/meta";

export default function GetServices() {
  return (
    <>
      <Meta title="Get Services" />
      <Header
        mobileheight="150px"
        tabletheight="150px"
        desktopheight="150px"
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
