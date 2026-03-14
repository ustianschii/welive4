export const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://welive4.com/#website",
      url: "https://welive4.com/",
      name: "WeLive4",
      description:
        "WeLive4 The Future of Living designs and installs advanced Property Automated Safeguard systems for global families using professional automation platforms such as Loxone.",
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://welive4.com/#organization",
      name: "WeLive4",
      alternateName: "WeLive4 The Future of Living",
      url: "https://welive4.com/",
      description:
        "WeLive4 specializes in advanced Property Automated Safeguard systems tailored for families who travel frequently or live between countries. Systems integrate motion detection, environmental sensors, smart lighting response, remote alerts, and emergency escalation including international messaging.",
      foundingDate: "2024",
      sameAs: [],
      areaServed: [
        {
          "@type": "Country",
          name: "United States",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://welive4.com/safeguard#webpage",
      url: "https://welive4.com/safeguard",
      name: "WeLive4 Safeguard — Intelligent Property Protection for Global Living",
      description:
        "Property Automated Safeguard systems for global families. Proactive monitoring, environmental sensors, smart lighting response, automated escalation, emergency calls, SMS, and Telegram alerts.",
      isPartOf: {
        "@id": "https://welive4.com/#website",
      },
      about: {
        "@id": "https://welive4.com/#organization",
      },
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@type": "ImageObject",
        "@id": "https://welive4.com/safeguard#primaryimage",
        url: "https://welive4.com/assets/safeguard/hero.jpg",
        contentUrl: "https://welive4.com/assets/safeguard/hero.jpg",
        caption: "WeLive4 Safeguard property monitoring and automated response",
        inLanguage: "en-US",
      },
    },
    {
      "@type": "Service",
      "@id": "https://welive4.com/safeguard#service",
      name: "WeLive4 Safeguard — Property Automated Safeguard System",
      serviceType: [
        "Property Automated Safeguard",
        "Smart Property Monitoring System",
        "International Home Monitoring",
        "Automated Home Security and Environmental Monitoring",
      ],
      provider: {
        "@id": "https://welive4.com/#organization",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "United States",
        },
      ],
      description:
        "WeLive4 Safeguard is an intelligent property protection service for families who travel frequently or live between countries. It combines security, environmental monitoring, smart lighting response, presence simulation, and automated alert escalation with phone calls, SMS, and Telegram notifications.",
      audience: [
        {
          "@type": "Audience",
          audienceType: "Frequent travelers",
        },
        {
          "@type": "Audience",
          audienceType: "International families",
        },
        {
          "@type": "Audience",
          audienceType: "Seasonal property owners",
        },
        {
          "@type": "Audience",
          audienceType: "Luxury homeowners",
        },
      ],
      termsOfService: "https://welive4.com/terms",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
        },
        url: "https://welive4.com/safeguard",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://welive4.com/safeguard#faqpage",
      url: "https://welive4.com/safeguard",
      name: "WeLive4 Safeguard FAQs",
      inLanguage: "en-US",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a Property Automated Safeguard system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Property Automated Safeguard system is an intelligent automation framework that continuously monitors security and environmental conditions, detects unusual activity patterns, and automatically escalates alerts while coordinating protective responses such as lighting activation, shutoffs, and notifications.",
          },
        },
        {
          "@type": "Question",
          name: "How is Safeguard different from a traditional alarm system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Traditional alarms are primarily reactive and intrusion-focused. Safeguard is proactive and multi-layered, combining environmental monitoring, behavioral motion intelligence, smart lighting response, presence simulation, and automated escalation with calls, SMS, and international messaging.",
          },
        },
        {
          "@type": "Question",
          name: "Can Safeguard notify me while I am overseas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Safeguard supports multiple alert channels including direct calls, SMS, and Telegram notifications, which can be reliable for international use and time-zone differences.",
          },
        },
        {
          "@type": "Question",
          name: "Can Safeguard contact nearby family members or neighbors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Safeguard can be configured with an escalation chain to notify trusted local contacts such as family members, neighbors, or property staff before escalating to first responders.",
          },
        },
        {
          "@type": "Question",
          name: "What events can Safeguard monitor besides intrusion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Safeguard can monitor water leaks, freeze risk, temperature fluctuations, HVAC failure, smoke and carbon monoxide, humidity changes, and other environmental conditions that can cause costly property damage during long absences.",
          },
        },
        {
          "@type": "Question",
          name: "Does Safeguard work with professional automation platforms like Loxone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Safeguard can be built on professional automation platforms such as Loxone, enabling unified logic across lighting, HVAC, access control, monitoring sensors, and notification routing.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://welive4.com/safeguard#breadcrumbs",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://welive4.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Safeguard",
          item: "https://welive4.com/safeguard",
        },
      ],
    },
  ],
};
