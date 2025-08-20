import { Navbar } from "@/components/navigation/navbar";
import SchemaMarkup from "@/components/scripts/schema-markup";
import { BASE_URL, ogImage } from "@/lib/utils";
import SmoothScrolling from "@/providers/smooth-scroll";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Head from "next/head";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import "./globals.css";

const lexend = Lexend({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monir Hossain Rabby | Full Stack Web Developer & Tech Leader",
  description:
    "Monir Hossain Rabby is an experienced Full Stack Developer specializing in Next.js, Prisma, and MongoDB. Passionate about building modern, scalable, and high-performance web applications with clean code and excellent user experience.",
  keywords:
    "Monir Hossain Rabby, Full Stack Developer, Web Developer, Next.js, React.js, Prisma, MongoDB, Node.js, Express.js, TypeScript, JavaScript, MERN Stack, Frontend Developer, Backend Developer, Software Engineer, Web Applications, REST APIs, UI/UX Design, SSR, CSR, SEO, Web Security, Code Optimization, API Integration, Open Source, DevOps, Git, Responsive Design, Portfolio",
  openGraph: {
    title: "Monir Hossain Rabby | Full Stack Developer & Tech Leader",
    description:
      "Explore the portfolio of Monir Hossain Rabby, a skilled Full Stack Developer building fast, scalable, and modern web applications using Next.js, Prisma, and MongoDB.",
    images: ogImage,
    type: "website",
    url: BASE_URL, // replace with your domain
  },
  twitter: {
    card: "summary_large_image",
    title: "Monir Hossain Rabby | Full Stack Developer & Tech Leader",
    description:
      "Creating modern, high-performance web apps with Next.js, Prisma, and MongoDB. Explore the journey and projects of Monir Hossain Rabby.",
    images: [ogImage],
    creator: "@monirhabderabby", // optional
  },
  publisher: "Monir Hossain Rabby",
  authors: [{ name: "Monir Hossain Rabby" }],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <SchemaMarkup />
      </Head>
      <body
        className={`${lexend.className} antialiased min-h-screen bg-background text-foreground max-w-full overflow-x-hidden`}
      >
        <SmoothScrolling>
          <Navbar />
          {children}
        </SmoothScrolling>
        <NextTopLoader showSpinner={false} color="#fcf8f7" />
        <Toaster />
        <GoogleAnalytics gaId={process.env.GA_ID!} />
        <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID!} />
      </body>
    </html>
  );
}
