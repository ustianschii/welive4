import React from "react";

import { Divider, List } from "@mui/material";

import { services } from "./services";
import { ServicesBox, ListItem } from "./styles";
import { GREEN_DARK } from "@/styles/constants";

export const ServicesList = () => {
  return (
    <ServicesBox>
      <List>
        {services.map((service, index) => (
          <>
            <ListItem key={index} disableGutters>
              {service}
            </ListItem>
            <Divider
              style={{
                background: GREEN_DARK,
                height: "2px",
                marginBottom: "7px",
              }}
            />
          </>
        ))}
      </List>
    </ServicesBox>
  );
};
