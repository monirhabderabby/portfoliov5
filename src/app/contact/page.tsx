import AdsenseAd from "@/components/ads/adsenseAd";
import Contact from "@/components/sections/contact";
import { BASE_URL, ogImage } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Monir Hossain Rabby | Full Stack Developer & Tech Leader",
  description:
    "Connect with Monir Hossain Rabby, a Full Stack Developer specializing in Next.js, TypeScript, Prisma, and MongoDB. Reach out for collaborations, freelance projects, or career opportunities.",
  keywords:
    "Monir Hossain Rabby, Full Stack Developer Contact, Hire Web Developer, Next.js Developer Contact, TypeScript Developer, Prisma, MongoDB, Freelance Web Developer, Software Engineer, Collaboration, Career Opportunity",
  authors: [{ name: "Monir Hossain Rabby" }],
  creator: "Monir Hossain Rabby",
  publisher: "Monir Hossain Rabby",
  openGraph: {
    title: "Contact Monir Hossain Rabby | Full Stack Developer & Tech Leader",
    description:
      "Reach out to Monir Hossain Rabby for professional opportunities, collaborations, or freelance projects in modern web development. Let's build something amazing together!",
    url: `${BASE_URL}/contact`, // replace with your actual URL
    siteName: "Monir Hossain Portfolio",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Contact Monir Hossain Rabby - Full Stack Developer & Tech Leader",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Monir Hossain Rabby | Full Stack Developer & Tech Leader",
    description:
      "Get in touch with Monir Hossain Rabby for collaborations, freelance projects, or career opportunities in full stack web development using Next.js, Prisma, and MongoDB.",
    images: [ogImage],
    creator: "@monirhabderabby",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const Page = () => {
  return (
    <section className="min-h-[calc(100vh-60px)] py-24 flex justify-center items-center">
      <Contact />

      <AdsenseAd />
    </section>
  );
};

export default Page;
