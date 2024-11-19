import React from "react";

import { ChoosedServicesList } from "../../../components/choosed-services";
import { BLACK } from "@/styles/constants";

import { Header } from "../../../components/shared/header";

import { Highlighted, Subtitle } from "../../../components/hero-title/styles";
import { Meta } from "../../../components/meta";

export default function Cart() {
  return (
    <>
      <Meta title="Choosed services" />
      <Header
        mobileheight="200px"
        tabletheight="250px" //de schimbat
        desktopheight="250px"
        backcolor={BLACK}
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
