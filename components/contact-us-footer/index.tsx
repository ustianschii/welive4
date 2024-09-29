import React from "react";
import { Links, Title, Wrapper } from "./styles";
import { SvgIcon } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Network, Typography } from "../social-footer/styles";

const contactInfo = [
  {
    icon: <EmailIcon />,
    text: "support@welive4.com",
  },
  {
    icon: <LocalPhoneIcon />,
    text: "(844)-373-6161",
  },
];

export const ContactUs = () => {
  return (
    <Wrapper>
      <Title>Contact us</Title>
      <Links>
        {contactInfo.map((contact, index) => (
          <Network key={index}>
            <SvgIcon>{contact.icon}</SvgIcon>
            <Typography>{contact.text}</Typography>
          </Network>
        ))}
      </Links>
    </Wrapper>
  );
};
