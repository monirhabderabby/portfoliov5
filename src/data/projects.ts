export interface Project {
  title: string;
  link: string;
  thumbnail: string;
  short_description: string;
  technologies: string[];
}

export const projects = [
  {
    title: "Biblioteca Legal",
    link: "https://bibliotecalegalhn.com",
    thumbnail:
      "https://files.edgestore.dev/ln9m9j3kr2yibrue/promotional/_public/collections%20page_p.webp",
    short_description:
      "Legal resource platform for Honduran laws and regulations.",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB", "Vercel"],
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    short_description:
      "AI-powered code editor for faster, smarter development.",
    technologies: ["Electron", "React", "TypeScript", "Node.js", "OpenAI API"],
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    short_description:
      "Privacy-first browser with built-in ad and tracker blocking.",
    technologies: ["JavaScript", "HTML5", "CSS3", "WebAssembly", "Node.js"],
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    short_description:
      "Collaborative writing platform for editors and authors.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "TypeScript",
      "Vercel",
    ],
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    short_description:
      "AI tool for editing and improving your written content.",
    technologies: ["React", "Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    short_description:
      "Game to test and improve your pixel-perfect design skills.",
    technologies: ["React", "Canvas API", "JavaScript", "CSS3", "Vercel"],
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    short_description: "Platform to practice coding interviews and algorithms.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Prisma", "Vercel"],
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    short_description:
      "Modern UI components library for sleek, responsive designs.",
    technologies: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Vercel",
    ],
  },
];
