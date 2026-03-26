"use client";

import { Box } from "@mui/material";

import { BLACK, WHITE } from "@/src/styles/constants";
import { Paragraph, Container } from "@/src/styles/privacy-policy-styles";
import { Header } from "@/components/shared/header";
import { Meta } from "@/components/meta";
import { metadata } from "@/src/app/metadata";
import { Subtitle } from "@/components/hero-title/styles";
import { useScrollToTop } from "@/src/hooks/useScrollToTop";
import { ROUTES } from "../utils/routes-constants";
import Link from "next/link";

export default function PrivacyPolicy() {
  useScrollToTop();

  return (
    <>
      <Meta
        title={metadata.PrivacyPolicy.title}
        description={metadata.PrivacyPolicy.description}
        keywords={metadata.PrivacyPolicy.keywords}
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
          titleStart: "WeLive4 Privacy Policy",
        }}
      />
      <Box bgcolor={BLACK}>
        <Container maxWidth="md">
          <Paragraph>
            WeLive4 is a brand operated by Heyo Smart Technology LLC, a Delaware
            limited liability company (“WeLive4”, “we”, “our”, or “us”). This
            Privacy Policy explains how we collect, use, and protect your
            information when you visit https://welive4.com or use our services.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Information We Collect
          </Subtitle>
          <Paragraph>
            We may collect personal information that you voluntarily provide,
            including:
          </Paragraph>
          <Paragraph>
            - First and last name <br />
            - Email Address <br />
            - Phone Number <br />
            - Property or service location <br />
            - Billing and payment information <br />- Communications and
            inquiries
          </Paragraph>
          <Paragraph>
            We only collect personal information when you choose to provide it.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            System and Monitoring Data
          </Subtitle>
          <Paragraph>
            If you use WeLive4 Safeguard or related automation services, we may
            process data related to:
          </Paragraph>
          <Paragraph>
            - Environmental conditions (such as temperature, humidity, or water
            detection) <br />
            - Device activity and system performance <br />
            - Motion or event-based triggers <br />
            - Alert and notification logs
            <br />
          </Paragraph>
          <Paragraph>
            This information is used solely to operate, maintain, and improve
            system functionality and service performance.
          </Paragraph>
          <Paragraph>
            We do not use this data for advertising purposes.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            How We Use Information
          </Subtitle>
          <Paragraph>We use your information to:</Paragraph>
          <Paragraph>
            - Provide requested services <br />
            - Communicate with you regarding your request or services <br />
            - Process transactions <br />- Improve service quality and system
            performance
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Sharing of Information
          </Subtitle>
          <Paragraph>
            WeLive4 does not sell, rent, or trade your personal information.
          </Paragraph>
          <Paragraph>
            We may share information with trusted third-party service providers
            only as necessary to:
          </Paragraph>
          <Paragraph>
            - process payments <br />
            - deliver services <br />- support system functionality
          </Paragraph>
          <Paragraph>
            These parties are required to maintain the confidentiality of your
            information.
          </Paragraph>
          <Paragraph>
            We may also disclose information if required by law or to protect
            our legal rights.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Cookies and Tracking Technologies
          </Subtitle>
          <Paragraph>We use cookies and similar technologies to:</Paragraph>
          <Paragraph>
            - operate and maintain the website <br />
            - improve user experience <br />- understand website usage
          </Paragraph>
          <Paragraph>
            You may accept or reject non-essential cookies through your browser
            settings or cookie preferences on our website.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Data Security
          </Subtitle>
          <Paragraph>
            We implement reasonable administrative, technical, and physical
            safeguards to protect your personal information.
          </Paragraph>
          <Paragraph>
            However, no method of transmission over the Internet or electronic
            storage can be guaranteed to be completely secure.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Third-Party Links
          </Subtitle>
          <Paragraph>
            Our website may contain links to external websites. We are not
            responsible for the privacy practices of those websites.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            California Privacy Rights (CCPA / CPRA)
          </Subtitle>
          <Paragraph>
            If you are a California resident, you have the right to:
          </Paragraph>
          <Paragraph>
            - Request access to your personal information <br />
            - Request deletion of your personal information <br />- Request that
            your personal information not be sold or shared
          </Paragraph>
          <Paragraph>
            WeLive4 does not sell or share personal information.
          </Paragraph>
          <Paragraph>
            To exercise your rights, please contact us at:{" "}
            <a style={{ color: WHITE }} href="mailto:support@welive4.com">
              support@welive4.com
            </a>
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Do Not Sell or Share My Personal Information
          </Subtitle>
          <Paragraph>
            WeLive4 does not sell or share personal information with third
            parties for marketing or advertising purposes.
          </Paragraph>
          <Subtitle color={WHITE} my="10px" sx={{ textAlign: "start" }}>
            Changes to This Privacy Policy
          </Subtitle>
          <Paragraph>
            We may update this Privacy Policy from time to time. Continued use
            of the website and services indicates your acceptance of any
            updates.
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
            Use of WeLive4 Safeguard systems is also subject to our{" "}
            <Link
              style={{ textDecoration: "underline", color: "inherit" }}
              href={ROUTES.TERMS_AND_CONDITIONS}
            >
              Terms
            </Link>{" "}
            and Disclaimer.
          </Paragraph>
        </Container>
      </Box>
    </>
  );
}
