import React, { useState } from "react";

import { Container, Tab, Tabs } from "./styles";
import { TabPanelProps } from "./types";
import { TabContent } from "./tab";
import { data } from "./data";

import { Box } from "@mui/material";

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
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
    <Container disableGutters>
      <Tabs variant="fullWidth" value={activeTab} onChange={handleChange}>
        <Tab label="Personalization" wrapped />
        <Tab label="Zero-energy home" wrapped />
        <Tab label="Data privacy" wrapped />
      </Tabs>

      <TabPanel value={activeTab} index={0}>
        <TabContent
          image={data[0].image}
          title={data[0].title}
          firstdesc={data[0].firstdesc}
          seconddesc={data[0].seconddesc}
          quote={data[0].quote}
        />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <TabContent
          image={data[1].image}
          title={data[1].title}
          firstdesc={data[1].firstdesc}
          seconddesc={data[1].seconddesc}
          quote={data[1].quote}
        />
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        <TabContent
          image={data[2].image}
          title={data[2].title}
          firstdesc={data[2].firstdesc}
          seconddesc={data[2].seconddesc}
          thirddesc={data[2].thirddesc}
          quote={data[2].quote}
        />
      </TabPanel>
    </Container>
  );
};
