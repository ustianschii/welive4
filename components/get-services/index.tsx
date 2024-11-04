import React from "react";

import { Divider, List } from "@mui/material";

import { services } from "./services";
import { ServicesBox, ListItem } from "./styles";
import { GREEN_DARK } from "@/styles/constants";
import Link from "next/link";

export const ServicesList = () => {
  return (
    <ServicesBox>
      <List>
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.link}
            style={{ textDecoration: "none" }}
          >
            <ListItem disableGutters>{service.label}</ListItem>
            <Divider
              style={{
                background: GREEN_DARK,
                height: "3px",
                marginBottom: "7px",
              }}
            />
          </Link>
        ))}
      </List>
    </ServicesBox>
  );
};
