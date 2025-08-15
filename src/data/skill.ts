import next from "@/assets/icons/FrameWorkAndLibraries/nextjs.svg";
import react from "@/assets/icons/FrameWorkAndLibraries/react.svg";
import redux from "@/assets/icons/FrameWorkAndLibraries/redux.svg";

import tailwind from "@/assets/icons/css/tailwind.svg";

// tools import
import git from "@/assets/icons/tools/git.svg";
import github from "@/assets/icons/tools/github.svg";
import vsCode from "@/assets/icons/tools/vscode.svg";

import clerk from "@/assets/icons/FrameWorkAndLibraries/clerk.svg";
import mongodb from "@/assets/icons/FrameWorkAndLibraries/MongoDB.svg";
import nextauth from "@/assets/icons/FrameWorkAndLibraries/next-auth.svg";
import nodejs from "@/assets/icons/FrameWorkAndLibraries/nodejs.svg";
import prisma from "@/assets/icons/FrameWorkAndLibraries/prisma.svg";
import typescript from "@/assets/icons/FrameWorkAndLibraries/typescript.svg";
import vercel from "@/assets/icons/FrameWorkAndLibraries/vercel.svg";
import zod from "@/assets/icons/FrameWorkAndLibraries/zod.svg";
import zustand from "@/assets/icons/FrameWorkAndLibraries/zustand.svg";
import { StaticImageData } from "next/image";

export interface skillItem {
  id: number;
  name: string;
  icon: StaticImageData;
}

export const skills: skillItem[] = [
  {
    id: 1,
    name: "React",
    icon: react,
  },
  {
    id: 2,
    name: "Next JS",
    icon: next,
  },
  {
    id: 3,
    name: "TypeScript",
    icon: typescript,
  },
  {
    id: 4,
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    id: 5,
    name: "NodeJS",
    icon: nodejs,
  },
  {
    id: 6,
    name: "MongoDB",
    icon: mongodb,
  },
  {
    id: 7,
    name: "Prisma",
    icon: prisma,
  },
  {
    id: 8,
    name: "Zustand",
    icon: zustand,
  },
  {
    id: 9,
    name: "Zod",
    icon: zod,
  },
  {
    id: 10,
    name: "Clerk",
    icon: clerk,
  },
  {
    id: 11,
    name: "Next Auth",
    icon: nextauth,
  },
  {
    id: 12,
    name: "Redux",
    icon: redux,
  },
  {
    id: 13,
    name: "Git",
    icon: git,
  },
  {
    id: 14,
    name: "Github",
    icon: github,
  },
  {
    id: 15,
    name: "Vercel",
    icon: vercel,
  },
  {
    id: 16,
    name: "VS Code",
    icon: vsCode,
  },
];
