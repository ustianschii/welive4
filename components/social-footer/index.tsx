import React from "react";
import { SvgIcon } from "@mui/material";
import { Links, Network, Title, Wrapper, Typography } from "./styles";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const socialNetworks = [
  { icon: <YouTubeIcon />, label: "YouTube" },
  { icon: <FacebookIcon />, label: "Facebook" },
  { icon: <InstagramIcon />, label: "Instagram" },
];

const Social = () => {
  return (
    <Wrapper>
      <Title>Social networks</Title>
      <Links>
        {socialNetworks.map((network, index) => (
          <Network key={index}>
            <SvgIcon>{network.icon}</SvgIcon>
            <Typography>{network.label}</Typography>
          </Network>
        ))}
      </Links>
    </Wrapper>
  );
};

export default Social;
