import React from "react";

import { Divider, List } from "@mui/material";

import Link from "next/link";

import { services } from "./services";
import { ServicesBox, ListItem, Wrapper } from "./styles";
import { GREEN_DARK } from "@/styles/constants";

export const ServicesList = () => {
  return (
    <Wrapper>
      <ServicesBox>
        <List>
          {services.map((service) => (
            <Link
              key={service.label}
              href={service.link}
              style={{ textDecoration: "none" }}
            >
              <ListItem disableGutters>{service.label}</ListItem>
              <Divider
                style={{
                  background: GREEN_DARK,
                  height: "2px",
                  marginBottom: "7px",
                }}
              />
            </Link>
          ))}
        </List>
      </ServicesBox>
    </Wrapper>
  );
};
