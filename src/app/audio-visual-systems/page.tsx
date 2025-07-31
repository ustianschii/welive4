import { Box } from "@mui/material";

import { AvSolutions } from "@/components/av-solutions";
import { ContentSeparator } from "@/components/shared/content-separator";
import { GrayCardsBox } from "@/components/shared/gray-cards";
import {
  GCAudioVisualSystems,
  grayCardsAudioVisualSystemsLatest,
} from "@/components/shared/gray-cards/data";
import { Button } from "@/components/shared/gray-cards/styles";
import { MAIN_SERVICES_BACKGROUND } from "@/src/styles/constants";
import { Header } from "@/components/shared/header";
import { Meta } from "@/components/meta";
import { metadata } from "@/src/app/metadata";
import { ROUTES } from "../utils/routes-constants";

export default function AudioVisualSystems() {
  return (
    <>
      <Meta
        title={metadata.AudioVisualSystems.title}
        description={metadata.AudioVisualSystems.description}
        keywords={metadata.AudioVisualSystems.keywords}
      />
      <Header
        layout={{
          mobileHeight: "600px",
          tabletHeight: "600px",
          desktopHeight: "600px",
        }}
        background={{
          background: `url('/audio-visual-systems/header-bg.png')`,
          tabletBackground: `url('/audio-visual-systems/tablet/header-bg.png')`,
          desktopBackground: `url('/audio-visual-systems/desktop/header-bg.png')`,
        }}
        content={{
          titleStart: "PREMIUM",
          titleHighStart: "ENTERTAINMENT SPACES",
          titleEnd: "DESIGN AND INSTALLATION",
          subtitle: [
            "Where every occasion becomes a cherished memory",
            "Your entertainment space should reflect the joy of shared moments and successful milestones. We believe in creating an environment where families come together to celebrate, businesses thrive during achievements, and customers feel valued.",
            "Every event, whether personal or professional, deserves an unmatched experience",
          ],
          divider: true,
        }}
      />
      <AvSolutions />
      <ContentSeparator
        bg="/audio-visual-systems/cs-room.png"
        tabletbg="/audio-visual-systems/desktop/cs-room.png"
        titlehighlightedstart="HOME ENTERTAINMENT"
        titleend="SYSTEMS"
        titlepadding="50px 0 0 0"
        containerpadding="30px 0"
      />
      <Box bgcolor={MAIN_SERVICES_BACKGROUND}>
        {GCAudioVisualSystems.map((item, index) => (
          <GrayCardsBox
            key={index + 1}
            data={item}
            imgheight={400}
            imgwidth={388}
            button={<Button href={item[0].link}>LEARN MORE &#10230;</Button>}
          />
        ))}
      </Box>

      <ContentSeparator
        bg="/audio-visual-systems/cs-office.png"
        tabletbg="/audio-visual-systems/desktop/cs-office.png"
        titlehighlightedstart="COMMERCIAL AV"
        titleend="SYSTEMS"
        titlepadding="50px 0 0 0"
        containerpadding="30px 0"
      />
      <Box sx={{ backgroundColor: MAIN_SERVICES_BACKGROUND }}>
        <GrayCardsBox
          data={grayCardsAudioVisualSystemsLatest}
          button={
            <Button href={ROUTES.CHECKLIST_SHORT}>
              GET YOUR BOOST &#10230;
            </Button>
          }
        />
      </Box>
    </>
  );
}
