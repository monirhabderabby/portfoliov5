import GitHubActivity from "@/components/sections/github-activity";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import { journeySteps } from "@/data/journeySteps";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Monir Hossain - From Accounting Student to Tech Leader",
  description:
    "Discover Monir Hossain's inspiring journey from accounting student to Head of Web Development. A story of dedication, perseverance, and continuous learning in the tech industry.",
  keywords:
    "Monir Hossain About, Career Journey, Accounting to Tech, Web Developer Story, Programming Journey, Tech Leader, Career Transformation, Self-taught Developer",
  authors: [{ name: "Monir Hossain" }],
  creator: "Monir Hossain",
  publisher: "Monir Hossain",
  openGraph: {
    title: "About Monir Hossain - From Accounting Student to Tech Leader",
    description:
      "An inspiring transformation story: From struggling accounting student to successful Head of Web Development. Learn about dedication, hard work, and commitment to excellence.",
    url: "https://monirhossain.dev/about",
    siteName: "Monir Hossain Portfolio",
    images: [
      {
        url: "/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Monir Hossain Career Journey - From Accounting to Tech Leadership",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Monir Hossain - From Accounting Student to Tech Leader",
    description:
      "An inspiring transformation story: From struggling accounting student to successful Head of Web Development.",
    images: ["/about-og-image.jpg"],
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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[30px] font-bold tracking-tighter text-foreground mb-6">
            From Accounting Student to{" "}
            <span className="bg-primary text-white">Tech Leader</span>
          </h1>
          <p className="text-white/60 font-light  max-w-3xl mx-auto leading-relaxed">
            A journey of transformation, dedication, and unwavering commitment
            to excellence. Discover how perseverance and continuous learning
            shaped my path from struggling student to successful web development
            leader.
          </p>
        </div>
      </section>

      <div className="mb-20 space-y-10">
        <Timeline data={journeySteps} />
        <GitHubActivity />
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-[14px] text-muted-foreground mb-8 max-w-2xl mx-auto">
            My journey proves that with dedication and hard work, any challenge
            can be overcome. Let&apos;s bring that same commitment to your next
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="sm" variant="default" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
