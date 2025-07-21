import { Navbar } from "@/components/navigation/navbar";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monir Hossain",
  description: "Full Stack Web Developer",
  keywords:
    "Full Stack Developer, Web Development, Next.js, React.js, Node.js, Express.js, MongoDB, JavaScript, Frontend Development, Backend Development, software engineer, responsive design, web applications. database management, UI/UX Design, Server-Side Rendering, Client-Side Rendering, Single Page applications.Cross platform development, restful apis, devops, version control, code optimization, TypeScript, Frontend Frameworks , Backend Frameworks, MERN Stack, MEAN Stack,  SEO Best Practices, Open Source Contribution, Web Security, API Integration, Error Handling, Code Versioning, monirrabby",
  openGraph: {
    images:
      "https://res.cloudinary.com/dzlrpspps/image/upload/v1700748344/Portfolio%20Website/monir_hossain.png",
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
      </body>
    </html>
  );
}
