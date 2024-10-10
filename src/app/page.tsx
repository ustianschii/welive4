"use client";
import { Header } from "../../components/shared/header";
import { HeroTitle } from "../../components/hero-title";
import { CustomButton } from "../../components/shared/header-button/index";
import { MainServices } from "../../components/main-services/index";

import { Divider } from "@mui/material";

import { GREEN } from "@/styles/constants";
import { OurBrands } from "../../components/our-brands";
import { Statistic } from "../../components/statistic";

export default function Home() {
  return (
    <>
      <Header
        title={<HeroTitle />}
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
        background={`url('/header-mobile/hero-top.png')`}
      />
      <Divider sx={{ background: GREEN, height: "3px" }} />
      <MainServices />
      <OurBrands />
      <Divider sx={{ background: GREEN, height: "3px" }} />
      <Statistic />
      <Divider sx={{ background: GREEN, height: "3px" }} />
    </>
  );
}
