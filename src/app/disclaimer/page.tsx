"use client";

import { Box } from "@mui/material";

import { BLACK, WHITE } from "@/src/styles/constants";
import { Paragraph, Container } from "@/src/styles/privacy-policy-styles";
import { Header } from "@/components/shared/header";
import { Meta } from "@/components/meta";
import { metadata } from "@/src/app/metadata";
import { Subtitle } from "@/components/hero-title/styles";
import { useScrollToTop } from "@/src/hooks/useScrollToTop";

export default function Disclaimer() {
  useScrollToTop();

  return (
    <>
      <Meta
        title={metadata.Disclaimer.title}
        description={metadata.Disclaimer.description}
        keywords={metadata.Disclaimer.keywords}
      />
      <Header
        layout={{
          mobileHeight: "100px",
          tabletHeight: "100px",
          desktopHeight: "150px",
          isHeaderTop: true,
        }}
        background={{
          backColor: BLACK,
        }}
        content={{
          titleStart: "WeLive4 General Disclaimer",
        }}
      />
      <Box bgcolor={BLACK}>
        <Container maxWidth="md">
          <Paragraph>
            WeLive4 is a brand operated by Heyo Smart Technology LLC, a Delaware
            limited liability company (“WeLive4”, “we”, “our”, or “us”).
          </Paragraph>
          <Paragraph>
            This Disclaimer applies to the use of the WeLive4 website, services,
            and all related offerings.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            General Information
          </Subtitle>
          <Paragraph>
            The information provided on this website is for general
            informational purposes only.
          </Paragraph>
          <Paragraph>
            While we strive to provide accurate and reliable information, we
            make no guarantees regarding completeness, accuracy, or suitability
            for any specific purpose.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Services Disclaimer
          </Subtitle>
          <Paragraph>
            WeLive4 provides design, consultation, configuration, and support
            services related to smart home automation, property monitoring, and
            related technologies.
          </Paragraph>
          <Paragraph>
            All recommendations, designs, and system configurations are based on
            available information and intended use cases. Actual performance may
            vary depending on property conditions, installation quality, and
            system configuration.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Third-Party Services and Installation
          </Subtitle>
          <Paragraph>
            Installation and implementation services may be performed by
            independent third-party contractors.
          </Paragraph>
          <Paragraph>WeLive4 is not responsible for:</Paragraph>
          <Paragraph>
            - workmanship of third-party installers
            <br />
            - installation errors <br />
            - code compliance or permitting <br />- physical installation
            outcomes
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Technology and System Performance
          </Subtitle>
          <Paragraph>
            All systems and technologies recommended or implemented by WeLive4
            depend on:
          </Paragraph>
          <Paragraph>
            - hardware performance <br />
            - network connectivity <br />- environmental conditions
            <br />- third-party integrations
          </Paragraph>
          <Paragraph>
            We do not guarantee uninterrupted or error-free system operation.
          </Paragraph>
          <Subtitle color={WHITE} my="20px" sx={{ textAlign: "center" }}>
            WeLive4 Safeguard Disclaimer
          </Subtitle>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Purpose of Safeguard
          </Subtitle>
          <Paragraph>
            WeLive4 Safeguard is an automation and monitoring system designed to
            assist with:
          </Paragraph>
          <Paragraph>
            - property awareness
            <br />
            - environmental monitoring <br />- activity detection <br />-
            automated response coordination <br />- communication and alert
            routing
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            No Guarantee of Protection
          </Subtitle>
          <Paragraph>WeLive4 Safeguard does not guarantee:</Paragraph>
          <Paragraph>
            - prevention of property damage <br />- prevention of intrusion or
            unauthorized access <br />- detection of all environmental or system
            events <br />- uninterrupted system operation
          </Paragraph>
          <Paragraph>
            The system is intended to assist with monitoring and response, not
            eliminate risk.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Not a Substitute for Insurance or Security
          </Subtitle>
          <Paragraph>Safeguard is not:</Paragraph>
          <Paragraph>
            - an insurance policy <br />- a security guarantee <br />- a
            replacement for physical security measures <br /> - a substitute for
            emergency services
          </Paragraph>
          <Paragraph>
            Users are responsible for maintaining appropriate insurance coverage
            and safety measures.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Notification and Communication Limitations
          </Subtitle>
          <Paragraph>
            Safeguard systems may send alerts through various communication
            methods, including phone, SMS, or messaging platforms.
          </Paragraph>
          <Paragraph>These notifications depend on:</Paragraph>
          <Paragraph>
            - internet connectivity <br />- cellular networks <br />-
            third-party services <br />- device availability
          </Paragraph>
          <Paragraph>
            Delivery, timing, and receipt of alerts cannot be guaranteed.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            User Responsibility
          </Subtitle>
          <Paragraph>Users are responsible for:</Paragraph>
          <Paragraph>
            - maintaining accurate contact information <br />- monitoring alerts
            and notifications <br />- maintaining system access and connectivity{" "}
            <br />- responding appropriately to events <br />- maintaining
            property safeguards and insurance
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Limitation of Reliance
          </Subtitle>
          <Paragraph>
            Any reliance on WeLive4 services or Safeguard systems is at your own
            risk.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Changes to This Disclaimer
          </Subtitle>
          <Paragraph>
            We may update this Disclaimer from time to time. Continued use of
            the website or services indicates acceptance of any updates.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Contact Information
          </Subtitle>
          <Paragraph>
            WeLive4 <br />
            Operated by Heyo Smart Technology LLC <br />
            300 Delaware Ave, Suite 210-515 <br />
            Wilmington, DE 19801 <br />
            Phone:{" "}
            <a style={{ color: WHITE }} href="tel:302-394-9656">
              302-394-9656
            </a>{" "}
            <br />
            Email:{" "}
            <a style={{ color: WHITE }} href="mailto:support@welive4.com">
              support@welive4.com
            </a>
          </Paragraph>
        </Container>
      </Box>
    </>
  );
}
