import React from "react";
import { Links, Title, Wrapper } from "./styles";
import { SvgIcon } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Network, Typography } from "../social-footer/styles";

export const ContactUs = () => {
  return (
    <Wrapper>
      <Title>Contact us</Title>
      <Links>
        <Network>
          <SvgIcon>
            <EmailIcon />
          </SvgIcon>
          <Typography>support@welive4.com</Typography>
        </Network>
        <Network>
          <SvgIcon>
            <LocalPhoneIcon />
          </SvgIcon>
          <Typography>(844)-373-6161</Typography>
        </Network>
      </Links>
    </Wrapper>
  );
};
