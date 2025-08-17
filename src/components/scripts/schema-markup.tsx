import { socialData } from "@/data/data";
import { BASE_URL } from "@/lib/utils";
import Script from "next/script";

export default function SchemaMarkup() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Monir Hossain Rabby",
    jobTitle: "Full Stack Web Developer",
    url: BASE_URL,
    sameAs: socialData.map((s) => s.href),
  };

  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
