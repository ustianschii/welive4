import { ReturnOnInvestments } from "@/components/return-on-investment";
import { ApplicationScenarios } from "@/components/application-scenarios";
import { GreenBanner } from "@/components/shared/green-banner";
import { data } from "@/components/shared/green-banner/data";
import { KeyFeatures } from "@/components/key-features";
import { PartneredInstaller } from "@/components/partnered-installer";
import { ActionBanner } from "@/components/shared/action-banner";
import { data as keyfeaturesdata } from "@/components/key-features/data";
import { Header } from "@/components/shared/header";

import { GreenDivider } from "@/components/shared/green-divider";
import { Meta } from "@/components/meta";
import { metadata } from "@/src/app/metadata";

export default function LoxoneCommercial() {
  return (
    <>
      <Meta
        title={metadata.LoxoneCommercial.title}
        description={metadata.LoxoneCommercial.description}
        keywords={metadata.LoxoneCommercial.keywords}
      />
      <Header
        background={{
          background: `url('/loxone-commercial/header-bg-mobile.png')`,
          tabletBackground: `url('/loxone-commercial/tablet/header-bg-tablet.png')`,
          desktopBackground: `url('/loxone-commercial/desktop/header-bg.png')`,
        }}
        content={{
          titleHighStart: "LOXONE",
          titleEnd: "FOR COMMERCIAL",
          subtitle: [
            "Loxone links everything in your building, giving you flexibility and big energy savings. It's a game-changer for investors, operators, and users.",
            "With Loxone, enjoy rapid ROI as seen in a global franchise restaurant saving 14,000 kWh monthly – paying off the investment in less than a month. Transform your space with Loxone and experience intelligent building automation like never before.",
          ],
          divider: true,
        }}
      />

      <ReturnOnInvestments />
      <GreenDivider />
      <ApplicationScenarios />
      <GreenBanner
        titlehighlightedstart="LOXONE"
        titleend="COMMERCIAL SOLUTIONS"
        first_description={data[0].first_description}
        second_description={data[0].second_description}
      />
      <KeyFeatures
        data={keyfeaturesdata}
        flex="1 1 calc(33.33% )"
        maxw="calc(32% )"
        gap="20px"
      />
      <PartneredInstaller />
      <ActionBanner />
    </>
  );
}
