import { Navbar } from "@/components/navigation/navbar";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const lexend = Lexend({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monir Hossain | Full Stack Web Developer",
  description:
    "Experienced Full Stack Developer specializing in building modern, scalable web applications with Next.js, Prisma, and MongoDB. Focused on clean code, performance, and user experience.",
  keywords:
    "Monir Hossain, Full Stack Developer, Web Developer, Next.js, React.js, Prisma, MongoDB, Node.js, Express.js, JavaScript, TypeScript, MERN Stack, Frontend Developer, Backend Developer, Software Engineer, Web Applications, REST APIs, UI/UX Design, Server-Side Rendering, Client-Side Rendering, SEO, Web Security, Code Optimization, API Integration, Open Source, DevOps, Git, Responsive Design",
  openGraph: {
    title: "Monir Hossain | Full Stack Web Developer",
    description:
      "Building fast, scalable, and modern web apps using Next.js, Prisma, and MongoDB.",
    images:
      "https://res.cloudinary.com/dzlrpspps/image/upload/v1700748344/Portfolio%20Website/monir_hossain.png",
    type: "website",
    url: "https://your-portfolio-domain.com", // replace with your domain
  },
  twitter: {
    card: "summary_large_image",
    title: "Monir Hossain | Full Stack Web Developer",
    description:
      "Creating modern, performant, and scalable web apps with Next.js, Prisma, and MongoDB.",
    images: [
      "https://res.cloudinary.com/dzlrpspps/image/upload/v1700748344/Portfolio%20Website/monir_hossain.png",
    ],
    creator: "@yourTwitterHandle", // optional
  },
  publisher: "Monir Hossain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lexend.className} antialiased min-h-screen bg-background text-foreground max-w-full overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <NextTopLoader showSpinner={false} color="#fcf8f7" />
      </body>
    </html>
  );
}
