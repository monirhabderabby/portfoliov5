import type { Metadata } from "next";
import TrustCheckCaseStudy from "./trust-check-case-study";

const title = "Trust Check BD Founder Case Study | Monir Hossain Rabby";
const description =
  "A founder case study on how Monir Hossain Rabby identified an online scam problem in Bangladesh and built Trust Check BD, a community-powered scam reporting and verification platform.";

export const metadata: Metadata = {
  title,
  description,

  keywords: [
    "Trust Check BD",
    "TrustCheck BD",
    "Trust Check BD founder",
    "Trust Check BD case study",
    "Trust Check BD founder case study",
    "Bangladesh scam checker",
    "scam checker Bangladesh",
    "scam reporting platform Bangladesh",
    "online scam checker Bangladesh",
    "Monir Hossain Rabby",
  ],

  authors: [
    {
      name: "Monir Hossain Rabby",
      url: "https://monirhrabby.com",
    },
  ],

  creator: "Monir Hossain Rabby",
  publisher: "Monir Hossain Rabby",

  alternates: {
    canonical: "https://monirhrabby.com/case-study/trust-check-bd",
  },

  openGraph: {
    title,
    description,
    type: "article",
    url: "https://monirhrabby.com/case-study/trust-check-bd",
    siteName: "Monir Hossain Rabby",
    publishedTime: "2026-07-01",
    authors: ["Monir Hossain Rabby"],
    images: [
      {
        url: "https://monirhrabby.com/images/founder post.png",
        width: 1404,
        height: 881,
        alt: "Trust Check BD scam reporting and verification platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://monirhrabby.com/images/founder post.png"],
  },
};

export default function TrustCheckBDCaseStudyPage() {
  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Person",
        "@id": "https://monirhrabby.com/#person",
        name: "Monir Hossain Rabby",
        url: "https://monirhrabby.com",
        jobTitle: "Founder of Trust Check BD",
        sameAs: ["https://trustcheckbd.com/en"],
      },

      {
        "@type": "Organization",
        "@id": "https://trustcheckbd.com/#organization",
        name: "Trust Check BD",
        url: "https://trustcheckbd.com/en",
        description:
          "Trust Check BD is a community-powered scam reporting and trust verification platform for Bangladesh.",
      },

      {
        "@type": "SoftwareApplication",
        "@id": "https://trustcheckbd.com/#software",
        name: "Trust Check BD",
        url: "https://trustcheckbd.com/en",
        applicationCategory: "SecurityApplication",
        operatingSystem: "Web",
        description:
          "A community-powered scam reporting and trust verification platform that helps people check suspicious phone numbers, payment accounts, websites, and Facebook pages before sending money.",
        creator: {
          "@id": "https://monirhrabby.com/#person",
        },
        publisher: {
          "@id": "https://trustcheckbd.com/#organization",
        },
      },

      {
        "@type": "Article",
        "@id": "https://monirhrabby.com/case-study/trust-check-bd#article",

        url: "https://monirhrabby.com/case-study/trust-check-bd",

        headline: "Building Trust Check BD: A Founder Case Study",

        alternativeHeadline:
          "How Monir Hossain Rabby Built Trust Check BD to Help People Check Online Scams in Bangladesh",

        description,

        image: {
          "@type": "ImageObject",
          url: "https://monirhrabby.com/images/trust-check-bd-homepage.png",
          width: 1404,
          height: 881,
        },

        author: {
          "@id": "https://monirhrabby.com/#person",
        },

        creator: {
          "@id": "https://monirhrabby.com/#person",
        },

        publisher: {
          "@id": "https://monirhrabby.com/#person",
        },

        datePublished: "2026-07-01",
        dateModified: "2026-08-14",

        mainEntity: {
          "@id": "https://trustcheckbd.com/#organization",
        },

        about: [
          {
            "@id": "https://trustcheckbd.com/#organization",
          },
          {
            "@id": "https://trustcheckbd.com/#software",
          },
          {
            "@id": "https://monirhrabby.com/#person",
          },
        ],

        keywords: [
          "Trust Check BD",
          "TrustCheck BD",
          "Trust Check BD founder",
          "Trust Check BD case study",
          "Bangladesh scam checker",
          "scam reporting platform Bangladesh",
          "online scam checker Bangladesh",
          "Monir Hossain Rabby",
        ],

        isPartOf: {
          "@type": "WebPage",
          "@id": "https://monirhrabby.com/case-study/trust-check-bd",
          url: "https://monirhrabby.com/case-study/trust-check-bd",
          name: title,
        },

        mentions: [
          {
            "@id": "https://trustcheckbd.com/#organization",
          },
          {
            "@id": "https://trustcheckbd.com/#software",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <TrustCheckCaseStudy />
    </>
  );
}
