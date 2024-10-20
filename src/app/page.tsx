"use client";
import { MainServices } from "../../components/main-services/index";
import { OurBrands } from "../../components/our-brands";
import { Statistic } from "../../components/statistic";
import { Rgbw } from "../../components/rgbw";
import { SystemDesign } from "../../components/system-design";
import { SmartControl } from "../../components/smart-control";
import { Everyone } from "../../components/everyone";
import { HowWeWork } from "../../components/how-we-work";
import { WhyChoose } from "../../components/why-choose";
import { Reviews } from "../../components/reviews";

export default function Home() {
  return (
    <>
      <MainServices />
      <OurBrands />
      <Statistic />
      <Rgbw />
      <SystemDesign />
      <SmartControl />
      <Everyone />
      <HowWeWork />
      <WhyChoose />
      <Reviews />
    </>
  );
}
