import React from "react";
import { Box, SvgIcon, Typography } from "@mui/material";
import { Links, Network, Title, Wrapper } from "./styles";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Social = () => {
  return (
    <Wrapper>
      <Title>Social networks</Title>
      <Links>
        <Network>
          <SvgIcon>
            <YouTubeIcon />
          </SvgIcon>
          <Typography>Youtube</Typography>
        </Network>
        <Network>
          <SvgIcon>
            <FacebookIcon />
          </SvgIcon>
          <Typography>Facebook</Typography>
        </Network>
        <Network>
          <SvgIcon>
            <InstagramIcon />
          </SvgIcon>
          <Typography>Instagram</Typography>
        </Network>
      </Links>
    </Wrapper>
  );
};

export default Social;
