"use client";

import React, { useState } from "react";

import { Box } from "@mui/material";

import { Container, Tab, Tabs, Wrapper } from "./styles";
import { TabContent } from "./tab";
import { data } from "./data";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    <div role="tabpanel" hidden={value !== index} style={{ marginTop: "20px" }}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export const FeaturesTabs = () => {
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
