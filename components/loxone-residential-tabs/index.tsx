"use client";

import React, { useState } from "react";

import { Container, Tab, Tabs, Wrapper } from "./styles";
import { TabPanelProps } from "./types";
import { TabContent } from "./tab";
import { data } from "./data";

import { Box } from "@mui/material";

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index} style={{ marginTop: "20px" }}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Wrapper>
      <Container maxWidth="lg" disableGutters>
        <Tabs variant="fullWidth" value={activeTab} onChange={handleChange}>
          {data.map((tab, index) => (
            <Tab key={index} label={tab.title} wrapped />
          ))}
        </Tabs>
        {data.map((tab, index) => (
          <TabPanel key={index} value={activeTab} index={index}>
            <TabContent
              image={tab.image}
              title={tab.title}
              descriptions={tab.descriptions}
              quote={tab.quote}
            />
          </TabPanel>
        ))}
      </Container>
    </Wrapper>
  );
};
