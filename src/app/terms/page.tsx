"use client";

import { Box } from "@mui/material";

import { BLACK, WHITE } from "@/src/styles/constants";
import { Paragraph, Container } from "@/src/styles/privacy-policy-styles";
import { Header } from "@/components/shared/header";
import { Meta } from "@/components/meta";
import { metadata } from "@/src/app/metadata";
import { Subtitle } from "@/components/hero-title/styles";
import { useScrollToTop } from "@/src/hooks/useScrollToTop";
import Link from "next/link";
import { ROUTES } from "../utils/routes-constants";

export default function TermsAndConditions() {
  useScrollToTop();

  return (
    <>
      <Meta
        title={metadata.TermsAndConditions.title}
        description={metadata.TermsAndConditions.description}
        keywords={metadata.TermsAndConditions.keywords}
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
          titleStart: "WeLive4 Terms and Conditions",
        }}
      />
      <Box bgcolor={BLACK}>
        <Container maxWidth="md">
          <Paragraph>
            These Terms and Conditions (“Terms”) govern your use of the website
            https://welive4.com and any services provided by WeLive4, a brand
            operated by Heyo Smart Technology LLC, a Delaware limited liability
            company (“WeLive4”, “we”, “our”, or “us”).
          </Paragraph>
          <Paragraph>
            By using our website or services, you agree to these Terms.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Services
          </Subtitle>
          <Paragraph>
            WeLive4 provides design, consultation, configuration, and support
            services related to smart home automation and Property Automated
            Safeguard systems.
          </Paragraph>
          <Paragraph>
            Installation services may be performed by independent third-party
            contractors unless otherwise specified.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            System Functionality and Limitations
          </Subtitle>
          <Paragraph>
            WeLive4 Safeguard systems are designed to assist with property
            monitoring, automation, and notification.
          </Paragraph>
          <Paragraph>
            The system may include environmental monitoring, motion detection,
            presence simulation, and alert routing.
          </Paragraph>
          <Paragraph>However, the system:</Paragraph>
          <Paragraph>
            - Does not guarantee prevention of property damage, intrusion, or
            loss <br />
            - Does not replace insurance, physical security measures, or
            emergency services <br />- May not detect all events or conditions
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            No Emergency Guarantee
          </Subtitle>
          <Paragraph>
            WeLive4 does not guarantee that alerts, notifications, or
            communications will be:
          </Paragraph>
          <Paragraph>
            - Delivered <br />
            - Recieved <br />
            - Acknowledged <br />- Acted upon in real time
          </Paragraph>
          <Paragraph>
            Users are responsible for maintaining appropriate emergency response
            procedures and contact availability.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Connectivity and Third-Party Dependencies
          </Subtitle>
          <Paragraph>
            System performance depends on factors outside our control,
            including:
          </Paragraph>
          <Paragraph>
            - Internet connectivity <br />
            - Electrical power availability <br />- Third-party platforms and
            services <br />- Device compatibility
          </Paragraph>
          <Paragraph>
            Interruptions or failures in these dependencies may affect system
            performance.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            User Responsibilities
          </Subtitle>
          <Paragraph>You agree to:</Paragraph>
          <Paragraph>
            - Provide accurate and up-to-date contact information
            <br />
            - Maintain access to communication channels used for alerts <br />-
            Maintain your property, systems, and insurance coverage <br />- Use
            the system in accordance with applicable laws
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Third-Party Services and Equipment
          </Subtitle>
          <Paragraph>
            WeLive4 may integrate or rely on third-party services, platforms, or
            hardware.
          </Paragraph>
          <Paragraph>
            WeLive4 is not responsible for the performance, availability, or
            reliability of third-party systems.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Limitation of Liability
          </Subtitle>
          <Paragraph>
            To the fullest extent permitted by law, WeLive4 shall not be liable
            for:
          </Paragraph>
          <Paragraph>
            - Indirect, incidental, or consequential damages <br />- Property
            damage or loss <br />- System interruptions or failures <br />
            Failure of alerts or notifications
          </Paragraph>
          <Paragraph>Use of the system is at your own risk.</Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Website Use
          </Subtitle>
          <Paragraph>
            You agree not to use the website for any unlawful or prohibited
            purpose.
          </Paragraph>
          <Paragraph>
            We reserve the right to restrict or terminate access if misuse is
            detected.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Intellectual Property
          </Subtitle>
          <Paragraph>
            All content on this website, including text, design, and materials,
            is the property of WeLive4 or its licensors and may not be used
            without permission.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Changes to Terms
          </Subtitle>
          <Paragraph>
            We may update these Terms at any time. Continued use of the website
            or services indicates acceptance of the updated Terms.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Governing Law
          </Subtitle>
          <Paragraph>
            These Terms shall be governed by the laws of the State of Delaware,
            without regard to conflict of law principles.
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
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Additional Notice
          </Subtitle>
          <Paragraph>
            For additional information regarding system limitations, please
            refer to our Safeguard{" "}
            <Link
              href={ROUTES.DISCLAIMER}
              style={{ textDecoration: "underline", color: "inherit" }}
            >
              Disclaimer
            </Link>
            .
          </Paragraph>
        </Container>
      </Box>
    </>
  );
}
