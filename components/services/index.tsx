import React from "react";
import { ServiceCard } from "../service-card";
import { Wrapper, Title } from "./styles";
import WifiIcon from "@mui/icons-material/Wifi";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SettingsIcon from "@mui/icons-material/Settings";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ShareIcon from "@mui/icons-material/Share";
import { Box } from "@mui/material";

const services = [
  {
    image: "/images/wireless.webp",
    title: "Wireless",
    description:
      "Convenience, Simplicity, Expandability, and Flexibility for new devices and appliances.",
    icon: <WifiIcon />,
  },
  {
    image: "/images/energy.webp",
    title: "Energy efficient",
    description:
      "Control of electricity consumption, heating and cooling, and more to avoid wasting energy.",
    icon: <EnergySavingsLeafIcon />,
  },
  {
    image: "/images/easy-control.webp",
    title: "Easy control",
    description:
      "Ability to get insights about your surroundings to watch and control what’s going on around the house.",
    icon: <PhoneIphoneIcon />,
  },
  {
    image: "/images/simple.webp",
    title: "Simple use",
    description:
      "A quick tap on your smartphone will get all your smart devices to deliver the information you need.",
    icon: <SettingsIcon />,
  },
  {
    image: "/images/design.webp",
    title: "Superior design",
    description:
      "We deliver creative and cost-effective smart technology that will quickly fit into your lifestyle.",
    icon: <DesignServicesIcon />,
  },
  {
    image: "/images/compatibility.webp",
    title: "Highly compatible",
    description:
      "Many interconnected smart devices will make your home even more impressive.",
    icon: <ShareIcon />,
  },
];

export const Services = () => {
  return (
    <Box>
      <Title variant="h3">Key Features</Title>
      <Wrapper disableGutters>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </Wrapper>
    </Box>
  );
};
