import { BASE_URL, ogImage } from "@/lib/utils";
import { Metadata } from "next";
import AchievementsContainer from "./_components/achivements-container";

export const metadata: Metadata = {
  title:
    "Monir Hossain Rabby | Achievements & Milestones as Full Stack Developer",
  description:
    "Explore the professional achievements of Monir Hossain Rabby, a Full Stack Developer and Web Development Leader. Discover his milestones, projects, and career journey in Next.js, TypeScript, Prisma, and MongoDB.",
  keywords:
    "Monir Hossain Rabby, Full Stack Developer, Web Developer Achievements, Career Milestones, Next.js, TypeScript, Prisma, MongoDB, Tech Leadership, Project Accomplishments, Frontend Developer, Backend Developer, Software Engineer Portfolio",
  authors: [{ name: "Monir Hossain Rabby" }],
  creator: "Monir Hossain Rabby",
  publisher: "Monir Hossain Rabby",
  openGraph: {
    title: "Monir Hossain Rabby | Achievements & Milestones",
    description:
      "Discover Monir Hossain Rabby's professional achievements, leadership milestones, and contributions in full stack web development using modern technologies.",
    url: `${BASE_URL}/achievements`, // replace with your actual URL
    siteName: "Monir Hossain Portfolio",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Monir Hossain Rabby Achievements & Career Milestones",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monir Hossain Rabby | Achievements & Milestones",
    description:
      "A showcase of Monir Hossain Rabby's milestones and achievements in full stack web development and tech leadership.",
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
    <section className="min-h-[calc(100vh-60px)] py-24 ">
      <div className="container px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <div className="h-[.5px] flex-grow bg-primary/40" />
          <div className="flex-1 flex justify-end">
            <div>
              <h2 className="text-[30px] font-bold tracking-tighter text-end ">
                Achievements
              </h2>
              <p className="text-white/60 font-light text-end">
                Milestones That Define My Path
              </p>
            </div>
          </div>
        </div>
        <AchievementsContainer />
      </div>
    </section>
  );
};

export default Page;
