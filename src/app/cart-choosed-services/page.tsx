import React from "react";

import { ChoosedServicesList } from "../../../components/choosed-services";
import { BLACK } from "@/styles/constants";

import { Header } from "../../../components/shared/header";
import { GreenDivider } from "../../../components/shared/green-divider";

import { Highlighted, Subtitle } from "../../../components/hero-title/styles";

export default function Cart() {
  return (
    <>
      <Header
        mobileheight="250px"
        tabletheight="300px"
        desktopheight="300px"
        backcolor={BLACK}
        dividerTop={<GreenDivider />}
        title={
          <Subtitle sx={{ marginTop: "100px" }}>
            <Highlighted>YOUR</Highlighted>CHOICE
          </Subtitle>
        }
      />
      <ChoosedServicesList />
    </>
  );
}
