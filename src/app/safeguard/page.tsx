import { Box, Typography } from "@mui/material";

import { Meta } from "@/components/meta";
import { GrayCardsBox } from "@/components/shared/gray-cards";
import {
  safeguardData,
  safeguardDataWithAction,
  watchGuardData,
} from "@/components/shared/gray-cards/data";
import { Header } from "@/components/shared/header";
import { CustomButton } from "@/components/shared/header-button";
import { CustomAccordion } from "@/components/shared/accordion";
import { safeguardFaq } from "@/components/shared/accordion/data";
import { MAIN_SERVICES_BACKGROUND } from "@/src/styles/constants";
import { metadata } from "@/src/app/metadata";
import { Button } from "@/components/shared/gray-cards/styles";
import { ROUTES } from "@/src/app/utils/routes-constants";
import { jsonLdData } from "@/src/app/utils/json-ld-data";

export default function Watchguard() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <Meta
        title={metadata.Watchguard.title}
        description={metadata.Watchguard.description}
        keywords={metadata.Watchguard.keywords}
      />
      <Header
        layout={{
          tabletHeight: "600px",
          desktopHeight: "550px",
          mobileHeight: "500px",
        }}
        background={{
          background: `url('watchguard/phone/header-bg.jpg')`,
          tabletBackground: `url('watchguard/desktop/header-bg.jpg')`,
          desktopBackground: `url('watchguard/desktop/header-bg.jpg')`,
        }}
        content={{
          titleHighStart: "WeLive4",
          titleEnd: "Safeguard",
          subtitle: [
            "Intelligent Property Protection for Global Living",
            "Advanced Property Automated Safeguard systems designed for families who travel frequently, live between countries, or manage multiple residences.",
          ],
          button: <CustomButton text="Schedule a Safeguard Consultation" />,
          divider: true,
        }}
      />

      <Box bgcolor={MAIN_SERVICES_BACKGROUND}>
        <GrayCardsBox data={watchGuardData} imgheight={300} imgwidth={450} />
      </Box>
      <CustomAccordion data={safeguardFaq} />
      <Box bgcolor={MAIN_SERVICES_BACKGROUND}>
        <GrayCardsBox data={safeguardData} imgheight={300} imgwidth={450} />
        <GrayCardsBox
          data={safeguardDataWithAction}
          imgheight={300}
          imgwidth={450}
          button={
            <Box
              sx={{ display: "flex", width: "100%", justifyContent: "center" }}
            >
              <Button
                sx={{ width: "60%", p: "10px" }}
                href={ROUTES.CHECKLIST_SHORT}
              >
                <Typography sx={{ fontSize: { xs: "10px", md: "14px" } }}>
                  Book Your Consultation Today &#10230;
                </Typography>
              </Button>
            </Box>
          }
        />
      </Box>
    </>
  );
}
