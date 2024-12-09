import React from "react";

import { Box } from "@mui/material";

import {
  Container,
  Description,
  Subtitle,
  Title,
} from "@/components/partnered-installer/styles";
import { ARTICLE_BACKGROUND } from "@/src/styles/constants";
import { data } from "./data";

export const Personalize = () => {
  return (
    <Box sx={{ backgroundColor: ARTICLE_BACKGROUND }}>
      <Container disableGutters>
        <Title>How can WE LIVE 4 personalize your LOXONE system?</Title>
        <Description>
          WE LIVE 4 takes personalization to the next level, ensuring that your
          Loxone smart home is not only intelligent but also perfectly tailored
          to your needs and preferences.
        </Description>
        <Description>
          Here&apos;s how WE LIVE 4 adds that personal touch to your Loxone
          system:
        </Description>
        {data.map((p) => (
          <>
            <Subtitle>{p.subtitle}</Subtitle>
            {p.descriptions.map((d) => (
              <>
                <Description>{d}</Description>
              </>
            ))}
          </>
        ))}
      </Container>
    </Box>
  );
};
