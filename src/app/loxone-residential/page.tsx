import React from "react";

import { NewFuture } from "@/components/new-future";
import { CustomTabs } from "@/components/loxone-residential-tabs";
import { GreenBanner } from "@/components/shared/green-banner";
import { data } from "@/components/shared/green-banner/data";
import { KeyFeatures } from "@/components/key-features";
import { dataLoxoneCommercial } from "@/components/key-features/data";
import { Personalize } from "@/components/personalize-loxone";
import { ActionBanner } from "@/components/shared/action-banner";
import { Header } from "@/components/shared/header";
import {
  HeaderTextBox,
  Highlighted,
  Subtitle,
} from "@/components/hero-title/styles";
import { GreenDivider } from "@/components/shared/green-divider";
import { HeaderSubtitle } from "@/components/shared/header-subtitle";
import { Meta } from "@/components/meta";

export default function LoxoneResidential() {
  return (
    <>
      <Meta
        title="Loxone Residential Solutions: Redefining Luxury Living"
        description="Transform your home with Loxone. Enjoy personalized automation for lighting, climate, security, and entertainment for a smarter, cozier lifestyle."
        keywords={[
          "loxone",
          "smart home",
          "automation",
          "access control",
          "lighting control",
          "climate control",
          "security",
          "energy management",
          "ambient assisted living",
          "zero-energy home",
        ]}
      />
      <Header
        title={
          <HeaderTextBox>
            <Subtitle component="h1">
              <Highlighted>LOXONE</Highlighted>
              FOR RESIDENTIAL
            </Subtitle>
          </HeaderTextBox>
        }
        background={`url('/loxone-residential/header-bg.png')`}
        tabletbackground={`url('/loxone-residential/tablet/header-bg.png')`}
        desktopbackground={`url('/loxone-residential/desktop/header-bg.png')`}
        divider={<GreenDivider />}
        subtitle={
          <HeaderSubtitle
            first="Make your house a stylish and comfortable retreat. Everything can be controlled with a single touch or voice command, including the lights, music, and temperature"
            second="Experience the stars like never before with safe outdoor TV mounts. With automated security, you can relax and always feel at ease."
            third="With Loxone,  luxury living is redefined, enabling you to create the ideal atmosphere at all times. "
          />
        }
      />
      <NewFuture />
      <CustomTabs />
      <GreenBanner
        title={data[1].title}
        first_description={data[1].first_description}
      />
      <KeyFeatures
        data={dataLoxoneCommercial}
        flex="1 1 calc(25% )"
        gap="10px"
        maxw="calc(24% )"
      />
      <Personalize />
      <ActionBanner />
    </>
  );
}
