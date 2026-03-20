export const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://welive4.com/#website",
      url: "https://welive4.com/",
      name: "WeLive4",
      alternateName: "WeLive4 The Future of Living",
      inLanguage: "en-US",
      publisher: {
        "@id": "https://welive4.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://welive4.com/#organization",
      name: "WeLive4",
      alternateName: "WeLive4 The Future of Living",
      url: "https://welive4.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://welive4.com/favicon.ico",
      },
      description:
        "WeLive4 provides Property Automated Safeguard and home automation solutions for frequent travelers, international families, and multi-residence homeowners.",
      areaServed: {
        "@type": "Place",
        name: "North America",
      },
      knowsAbout: [
        "Property Automated Safeguard",
        "smart home automation",
        "home monitoring while traveling",
        "environmental monitoring",
        "occupancy simulation",
        "emergency alert routing",
        "Loxone automation",
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://welive4.com/safeguard#webpage",
      url: "https://welive4.com/safeguard",
      name: "WeLive4 Safeguard",
      headline: "Intelligent Property Protection for Global Living",
      description:
        "Advanced Property Automated Safeguard system for global families with environmental monitoring, motion intelligence, smart presence simulation, emergency alerts, and Telegram notifications.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://welive4.com/#website",
      },
      about: {
        "@id": "https://welive4.com/safeguard#service",
      },
      mainEntity: {
        "@id": "https://welive4.com/safeguard#service",
      },
      breadcrumb: {
        "@id": "https://welive4.com/safeguard#breadcrumb",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://welive4.com/images/safeguard-hero.jpg",
      },
    },
    {
      "@type": "Service",
      "@id": "https://welive4.com/safeguard#service",
      name: "WeLive4 Safeguard",
      alternateName: "Property Automated Safeguard",
      serviceType: [
        "Property Automated Safeguard",
        "smart property monitoring",
        "automated property protection",
        "international home monitoring",
        "vacant home monitoring",
        "home automation security response",
      ],
      provider: {
        "@id": "https://welive4.com/#organization",
      },
      url: "https://welive4.com/safeguard",
      description:
        "WeLive4 Safeguard is an advanced Property Automated Safeguard system designed for homes that remain unoccupied for extended periods, including properties owned by frequent travelers, international families, and multi-residence homeowners. The system monitors environmental conditions, motion activity, and infrastructure performance while coordinating automated responses and multi-channel alerts when unusual conditions are detected.",
      audience: [
        {
          "@type": "Audience",
          audienceType: "frequent travelers",
        },
        {
          "@type": "Audience",
          audienceType: "international families",
        },
        {
          "@type": "Audience",
          audienceType: "multi-residence homeowners",
        },
        {
          "@type": "Audience",
          audienceType: "seasonal property owners",
        },
      ],
      areaServed: {
        "@type": "Place",
        name: "North America",
      },
      availableChannel: [
        {
          "@type": "ServiceChannel",
          serviceUrl: "https://welive4.com/safeguard",
          availableLanguage: ["en-US"],
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Safeguard Capabilities",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Continuous environmental monitoring",
              description:
                "Monitoring for water leaks, frozen pipes, HVAC failure, smoke, carbon monoxide, humidity changes, and infrastructure anomalies.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Behavioral motion intelligence",
              description:
                "Occupancy-aware motion monitoring that distinguishes expected activity from unusual movement and triggers layered responses.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Smart presence simulation",
              description:
                "Occupancy simulation using lighting, shades, audio, and zoned automation scenes to make the property appear naturally occupied.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Emergency escalation and global alerts",
              description:
                "Multi-channel alert routing through calls, SMS, Telegram, trusted contacts, and configurable escalation paths.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Integrated home automation response",
              description:
                "Coordinated actions across lighting, HVAC, access control, garage doors, energy monitoring, irrigation, and surveillance infrastructure.",
            },
          },
        ],
      },
      keywords: [
        "Property Automated Safeguard",
        "smart property monitoring system",
        "home monitoring while traveling",
        "international home monitoring",
        "vacant home protection",
        "smart presence simulation",
        "Telegram home alerts",
        "water leak monitoring",
        "frozen pipe monitoring",
        "environmental monitoring for homes",
        "Loxone home automation",
      ],
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://welive4.com/safeguard#definedterm",
      name: "Property Automated Safeguard",
      description:
        "An intelligent property protection framework that continuously monitors environmental conditions, motion activity, and infrastructure performance while coordinating automated responses and multi-channel emergency alerts.",
      inDefinedTermSet: "https://welive4.com/safeguard",
    },
    {
      "@type": "FAQPage",
      "@id": "https://welive4.com/safeguard#faq",
      url: "https://welive4.com/safeguard",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a Property Automated Safeguard system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Property Automated Safeguard system is an intelligent automation framework that continuously monitors environmental conditions, motion activity, and system performance while automatically escalating alerts and coordinating protective responses across the property.",
          },
        },
        {
          "@type": "Question",
          name: "Can Safeguard notify me while I am overseas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Safeguard supports multiple alert channels including SMS, direct phone calls, and secure notifications through Telegram, allowing reliable communication even when traveling internationally.",
          },
        },
        {
          "@type": "Question",
          name: "Can it notify nearby family or neighbors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Safeguard can be configured with an escalation chain that notifies trusted local contacts such as family members, neighbors, or property managers before escalating to emergency services.",
          },
        },
        {
          "@type": "Question",
          name: "Can Safeguard work with an existing smart home system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Safeguard integrates directly with properties built on the Loxone platform. For homes using other technologies, Safeguard may still be deployed as a dedicated protection system focused on monitoring, automated responses, and emergency alerts.",
          },
        },
        {
          "@type": "Question",
          name: "Is Safeguard only for luxury estates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Safeguard can scale from smaller homes to large estates. A minimal system may include an automation controller, motion detection, water leak sensors, temperature monitoring, smart lighting response, and emergency notifications.",
          },
        },
        {
          "@type": "Question",
          name: "Why do frequent travelers need automated property protection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Homes that remain unoccupied for long periods are more vulnerable to environmental damage and unnoticed system failures. A Property Automated Safeguard system continuously monitors conditions such as water leaks, temperature changes, and unusual activity while automatically sending alerts and triggering protective responses when needed.",
          },
        },
        {
          "@type": "Question",
          name: "What risks can Safeguard detect besides intrusion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Safeguard can monitor water leaks, pipe freeze conditions, HVAC system failure, temperature anomalies, smoke and carbon monoxide, unusual motion activity, and extended door or window openings. These conditions can trigger automated responses and alerts before damage becomes severe.",
          },
        },
        {
          "@type": "Question",
          name: "How is Safeguard designed for each property?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every property has different infrastructure, risk factors, and occupancy patterns. Safeguard systems are designed individually for each property, taking into account layout, environmental exposure, automation requirements, and the communication needs of the homeowner. Configuration may include environmental monitoring, motion intelligence, presence simulation, and customized escalation paths depending on how the property is used.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://welive4.com/safeguard#breadcrumb",
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
