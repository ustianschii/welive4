"use client";
import { Header } from "../../components/shared/header";
import { HeroTitle } from "../../components/hero-title";
import { CustomButton } from "../../components/shared/header-button/index";
import { MainServices } from "../../components/main-services/index";

import { OurBrands } from "../../components/our-brands";
import { Statistic } from "../../components/statistic";
import { RGBW } from "../../components/rgbw";
import { SystemDesign } from "../../components/system-design";
import { SmartControl } from "../../components/smart-control";
import { Everyone } from "../../components/everyone";
import { HowWeWorks } from "../../components/how-we-works";

export default function Home() {
  return (
    <>
      <Header
        title={<HeroTitle />}
        button={<CustomButton text={"GET A FREE QUOTE!"} />}
        background={`url('/header-mobile/hero-top.png')`}
      />
      <MainServices />
      <OurBrands />
      <Statistic />
      <RGBW />
      <SystemDesign />
      <SmartControl />
      <Everyone />
      <HowWeWorks />
    </>
  );
}
