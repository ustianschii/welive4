"use client";

import React, { useState } from "react";

import { Box } from "@mui/material";

import { Container, Tab, Tabs, Wrapper } from "./styles";
import { TabPanelProps } from "./types";
import { TabContent } from "./tab";
import { data } from "./data";

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
          {data.map((tab) => (
            <Tab key={tab.title} label={tab.title} wrapped />
          ))}
        </Tabs>
        {data.map((tab, index) => (
          <TabPanel key={tab.title} value={activeTab} index={index}>
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
