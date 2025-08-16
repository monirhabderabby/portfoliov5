import ProjectsContainer from "@/components/sections/projects/projects-container";
import { BASE_URL, ogImage } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monir Hossain Rabby | Projects Portfolio - Full Stack Developer",
  description:
    "Explore the projects of Monir Hossain Rabby, a Full Stack Developer. Showcasing modern web applications, creative solutions, and technical expertise in Next.js, TypeScript, Prisma, and MongoDB.",
  keywords:
    "Monir Hossain Rabby, Full Stack Developer Projects, Web Development Portfolio, Next.js Projects, React.js, TypeScript, Prisma, MongoDB, Node.js, Express.js, Frontend Developer, Backend Developer, Software Engineer Portfolio, Web Applications, Code Showcase, Project Examples",
  authors: [{ name: "Monir Hossain Rabby" }],
  creator: "Monir Hossain Rabby",
  publisher: "Monir Hossain Rabby",
  openGraph: {
    title: "Monir Hossain Rabby | Projects Portfolio",
    description:
      "Discover Monir Hossain Rabby's portfolio projects. See examples of modern, scalable, and high-performance web applications built with Next.js, TypeScript, Prisma, and MongoDB.",
    url: `${BASE_URL}/projects`, // replace with actual URL
    siteName: "Monir Hossain Portfolio",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Monir Hossain Rabby Projects Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monir Hossain Rabby | Projects Portfolio",
    description:
      "Explore Monir Hossain Rabby's projects showcasing technical expertise in full stack web development using Next.js, TypeScript, Prisma, and MongoDB.",
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
    <section className="w-full py-24   text-white flex justify-center items-center">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-[30px] font-bold tracking-tighter  ">Projects</h1>
          <p className="text-white/60 font-light">
            Showcasing My Creativity and Technical Expertise
          </p>
        </div>
        <ProjectsContainer isSliced={false} />
      </div>
    </section>
  );
};

export default Page;
