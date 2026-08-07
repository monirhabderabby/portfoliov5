import TrustCheckCaseStudy from "./trust-check-case-study";
import type { Metadata } from "next";

const title = "TrustCheck BD Founder Case Study | Monir Hossain Rabby";
const description =
  "How Monir Hossain Rabby identified an online-scam problem, founded TrustCheck BD, and built a community-powered trust platform for Bangladesh.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "TrustCheck BD",
    "founder case study",
    "Bangladesh scam checker",
    "product builder",
    "full stack engineer",
    "Monir Hossain Rabby",
  ],
  alternates: { canonical: "https://monirhrabby.com/case-study/trust-check-bd" },
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://monirhrabby.com/case-study/trust-check-bd",
    images: [
      {
        url: "https://monirhrabby.com/images/trust-check-bd-homepage.png",
        width: 1404,
        height: 881,
        alt: "TrustCheck BD scam and fraud checker homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://monirhrabby.com/images/trust-check-bd-homepage.png"],
  },
};

export default function TrustCheckBDCaseStudyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Building TrustCheck BD: A Founder Case Study",
    description,
    author: {
      "@type": "Person",
      name: "Monir Hossain Rabby",
      url: "https://monirhrabby.com",
    },
    about: {
      "@type": "SoftwareApplication",
      name: "TrustCheck BD",
      applicationCategory: "SecurityApplication",
      operatingSystem: "Web",
      url: "https://trustcheckbd.com/en",
    },
    datePublished: "2026",
    image: "https://monirhrabby.com/images/trust-check-bd-homepage.png",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TrustCheckCaseStudy />
    </>
  );
}
