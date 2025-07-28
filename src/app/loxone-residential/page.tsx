import { NewFuture } from "@/components/new-future";
import { FeaturesTabs } from "@/components/loxone-residential-tabs";
import { GreenBanner } from "@/components/shared/green-banner";
import { data } from "@/components/shared/green-banner/data";
import { KeyFeatures } from "@/components/key-features";
import { dataLoxoneCommercial } from "@/components/key-features/data";
import { Personalize } from "@/components/personalize-loxone";
import { ActionBanner } from "@/components/shared/action-banner";
import { Header } from "@/components/shared/header";
import { Meta } from "@/components/meta";
import { metadata } from "@/src/app/metadata";

export default function LoxoneResidential() {
  return (
    <>
      <Meta
        title={metadata.LoxoneResidential.title}
        description={metadata.LoxoneResidential.description}
        keywords={metadata.LoxoneResidential.keywords}
      />
      <Header
        background={{
          background: `url('/loxone-residential/header-bg.png')`,
          tabletBackground: `url('/loxone-residential/tablet/header-bg.png')`,
          desktopBackground: `url('/loxone-residential/desktop/header-bg.png')`,
        }}
        content={{
          titleHighStart: "LOXONE",
          titleEnd: "FOR RESIDENTIAL",
          subtitle: [
            "Make your house a stylish and comfortable retreat. Everything can be controlled with a single touch or voice command, including the lights, music, and temperature",
            "Experience the stars like never before with safe outdoor TV mounts. With automated security, you can relax and always feel at ease.",
            "With Loxone, luxury living is redefined, enabling you to create the ideal atmosphere at all times.",
          ],
          divider: true,
        }}
      />

      <NewFuture />
      <FeaturesTabs />
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
