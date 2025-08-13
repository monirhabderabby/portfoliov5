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
    github: "https://github.com/monirhabderabby/Biblioteca-Legal",
    thumbnail:
      "https://files.edgestore.dev/fo77r421j6yzhzmy/PortfolioV5/_public/14665e75-507d-43c0-801e-6d4296dc4f0e.webp",
    short_description:
      "Legal resource platform for Honduran laws and regulations.",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
  },
  {
    title: "TourHub",
    link: "https://tour-hub-frontend.vercel.app",
    github: "https://github.com/monirhabderabby/TourHub-Frontend",
    thumbnail:
      "https://files.edgestore.dev/fo77r421j6yzhzmy/PortfolioV5/_public/eb7f7350-0282-48d2-80a8-f5079ee40180.webp",
    short_description: "Explore & Book Tours with Ease",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js"],
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    short_description: "Explore & Book Tours with Ease",
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
