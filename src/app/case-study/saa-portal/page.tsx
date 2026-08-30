import { ogImage } from "@/lib/utils";
import type { Metadata } from "next";
import SaaPortalCaseStudy from "./saa-portal-case-study";

const title =
  "SAA Portal — Internal Operations Portal Case Study | Monir Hossain Rabby";
const description =
  "How Monir Hossain Rabby designed and built SAA Portal, the internal operations platform used by 300+ people at ScaleUp Ads Agency to connect Sales, Operations, and Business Development around one structured workflow.";

export const metadata: Metadata = {
  title,
  description,

  keywords: [
    "SAA Portal",
    "ScaleUp Ads Agency",
    "internal operations portal",
    "internal tooling case study",
    "workflow management system",
    "sales operations software",
    "role-based dashboards",
    "product-minded developer",
    "full-stack developer case study",
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
    canonical: "https://monirhrabby.com/case-study/saa-portal",
  },

  openGraph: {
    title,
    description,
    type: "article",
    url: "https://monirhrabby.com/case-study/saa-portal",
    siteName: "Monir Hossain Rabby",
    publishedTime: "2026-08-30",
    authors: ["Monir Hossain Rabby"],
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "SAA Portal — internal operations portal for ScaleUp Ads Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function SaaPortalCaseStudyPage() {
  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Person",
        "@id": "https://monirhrabby.com/#person",
        name: "Monir Hossain Rabby",
        url: "https://monirhrabby.com",
        jobTitle: "Software Developer",
        worksFor: {
          "@id": "https://monirhrabby.com/#scaleup-ads-agency",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://monirhrabby.com/#scaleup-ads-agency",
        name: "ScaleUp Ads Agency",
        description:
          "A digital agency delivering websites, mobile apps, SEO, Google Ads, Meta Ads, and other digital marketing services.",
      },

      {
        "@type": "SoftwareApplication",
        "@id": "https://monirhrabby.com/#saa-portal",
        name: "SAA Portal",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An internal operations portal used by 300+ people at ScaleUp Ads Agency. It connects Sales, Operations, and Business Development through issues, updates, a routing queue, a live station board, admin management, and role-based dashboards.",
        creator: {
          "@id": "https://monirhrabby.com/#person",
        },
        publisher: {
          "@id": "https://monirhrabby.com/#scaleup-ads-agency",
        },
      },

      {
        "@type": "Article",
        "@id": "https://monirhrabby.com/case-study/saa-portal#article",

        url: "https://monirhrabby.com/case-study/saa-portal",

        headline:
          "Building SAA Portal: An Internal Operations Platform for a 300-Person Agency",

        alternativeHeadline:
          "How Monir Hossain Rabby designed and built the internal operations portal that connects Sales, Operations, and Business Development at ScaleUp Ads Agency",

        description,

        image: {
          "@type": "ImageObject",
          url: ogImage,
          width: 1200,
          height: 630,
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

        datePublished: "2026-08-30",
        dateModified: "2026-08-30",

        mainEntity: {
          "@id": "https://monirhrabby.com/#saa-portal",
        },

        about: [
          {
            "@id": "https://monirhrabby.com/#saa-portal",
          },
          {
            "@id": "https://monirhrabby.com/#scaleup-ads-agency",
          },
          {
            "@id": "https://monirhrabby.com/#person",
          },
        ],

        keywords: [
          "SAA Portal",
          "ScaleUp Ads Agency",
          "internal operations portal",
          "internal tooling case study",
          "role-based dashboards",
          "Monir Hossain Rabby",
        ],

        isPartOf: {
          "@type": "WebPage",
          "@id": "https://monirhrabby.com/case-study/saa-portal",
          url: "https://monirhrabby.com/case-study/saa-portal",
          name: title,
        },

        mentions: [
          {
            "@id": "https://monirhrabby.com/#saa-portal",
          },
          {
            "@id": "https://monirhrabby.com/#scaleup-ads-agency",
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

      <SaaPortalCaseStudy />
    </>
  );
}
