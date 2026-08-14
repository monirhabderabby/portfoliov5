export interface Project {
  title: string;
  link: string;
  thumbnail: string;
  short_description: string;
  technologies: string[];
}

// thumbnail recomended size: 640 × 480
// short_description: within 48 characters
const projectReferralQuery =
  "ref=monirhrabby.com&utm_source=monirhrabby.com&utm_medium=referral&utm_campaign=portfolio_projects";

export const projects = [
  {
    title: "Biblioteca Legal",
    link: `https://bibliotecalegalhn.com?${projectReferralQuery}`,
    github: "https://github.com/monirhabderabby/Biblioteca-Legal",
    thumbnail:
      "https://files.edgestore.dev/fo77r421j6yzhzmy/PortfolioV5/_public/14665e75-507d-43c0-801e-6d4296dc4f0e.webp",
    short_description:
      "Legal resource platform for Honduran laws and regulations.",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
  },
  {
    title: "The Freelance PM",
    link: `https://thefreelancepmclub.com?${projectReferralQuery}`,
    github: "https://github.com/monirhabderabby/the-freelancepm-club",
    thumbnail:
      "https://files.edgestore.dev/fo77r421j6yzhzmy/PortfolioV5/_public/the%20freelance%20pm.webp",
    short_description: "Your hub for freelance project success",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
  },
  {
    title: "TourHub",
    link: `https://tour-hub-frontend.vercel.app?${projectReferralQuery}`,
    github: "https://github.com/monirhabderabby/TourHub-Frontend",
    thumbnail:
      "https://files.edgestore.dev/fo77r421j6yzhzmy/PortfolioV5/_public/eb7f7350-0282-48d2-80a8-f5079ee40180.webp",
    short_description: "Explore & Book Tours with Ease",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js"],
  },
  {
    title: "Budget Tracker",
    link: `https://budget-tracker-v1.vercel.app?${projectReferralQuery}`,
    thumbnail:
      "https://files.edgestore.dev/fo77r421j6yzhzmy/PortfolioV5/_public/Budget%20Tracker%20(1).webp",
    short_description: "Track, analyze & manage your finances easily",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "Typescript"],
    github: "https://github.com/monirhabderabby/budget-tracker",
  },
  {
    title: "Joy Beach Villas",
    link: `https://joybeachvillas.com?${projectReferralQuery}`,
    thumbnail:
      "https://da8h6r7q9t.ufs.sh/f/qDFYtzIILml3O66e4v5LXtJ8HhQj5G6N4OFigZTflASoeDkx",
    short_description: "Hotel Booking Platform",
    technologies: ["Next.js", "Tailwind CSS", "Express.js", "Typescript"],
    github: "https://github.com/monirhabderabby/armaitoly-website",
  },
  {
    title: "Edumentor",
    link: `https://edu-mentor-lms.vercel.app?${projectReferralQuery}`,
    thumbnail:
      "https://files.edgestore.dev/fo77r421j6yzhzmy/PortfolioV5/_public/lms%20(1).webp",
    short_description: "A complete platform for teaching and learning",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "Javascript"],
    github: "https://github.com/monirhabderabby/EduMentor",
  },
];
