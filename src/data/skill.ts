// languages icons import
import css from "@/assets/icons/language/css.svg";
import html from "@/assets/icons/language/html5.svg";
import javascript from "@/assets/icons/language/javascript.svg";

// Framework and library imports
import mui from "@/assets/icons/FrameWorkAndLibraries/mui.svg";
import next from "@/assets/icons/FrameWorkAndLibraries/nextjs.svg";
import node from "@/assets/icons/FrameWorkAndLibraries/nodejs.svg";
import react from "@/assets/icons/FrameWorkAndLibraries/react.svg";
import redux from "@/assets/icons/FrameWorkAndLibraries/redux.svg";

// CSS Framework
import bootstrap from "@/assets/icons/css/bootstrap.svg";
import tailwind from "@/assets/icons/css/tailwind.svg";

// tools import
import git from "@/assets/icons/tools/git.svg";
import github from "@/assets/icons/tools/github.svg";
import vsCode from "@/assets/icons/tools/vscode.svg";

// platform
import firebase from "@/assets/icons/platform/firebase.svg";

// Web Browsers
import firefox from "@/assets/icons/browsers/Firefox.png";
import edge from "@/assets/icons/browsers/Microsoft.png";
import brave from "@/assets/icons/browsers/brave.png";
import chrome from "@/assets/icons/browsers/chrome.svg";
import opera from "@/assets/icons/browsers/opera.svg";
import safari from "@/assets/icons/browsers/safari.svg";
import { StaticImageData } from "next/image";

export const skillData = [
  {
    id: 1,
    title: "LANGUAGES",
    icons: [
      {
        id: 1,
        name: "Html",
        label: "Expert",
        icon: html,
      },
      {
        id: 2,
        name: "Css",
        label: "Expert",
        icon: css,
      },
      {
        id: 3,
        name: "Javascript",
        label: "Expert",
        icon: javascript,
      },
    ],
  },
  {
    id: 2,
    title: "JAVASCRIPT UI, FRAMEWORKS & LIBRARY",
    icons: [
      {
        id: 1,
        name: "React",
        label: "Expert",
        icon: react,
      },
      {
        id: 2,
        name: "Next JS",
        label: "Junior",
        icon: next,
      },
      {
        id: 3,
        name: "Node JS",
        label: "Expert",
        icon: node,
      },
      {
        id: 4,
        name: "Material UI",
        label: "Senior",
        icon: mui,
      },
      {
        id: 5,
        name: "Redux",
        label: "Expert",
        icon: redux,
      },
    ],
  },
  {
    id: 3,
    title: "CSS FRAMEWORKS",
    icons: [
      {
        id: 1,
        name: "Tailwind",
        label: "Expert",
        icon: tailwind,
      },
      {
        id: 2,
        name: "Bootstrap",
        label: "Junior",
        icon: bootstrap,
      },
    ],
  },
  {
    id: 4,
    title: "Tools",
    icons: [
      {
        id: 1,
        name: "Git",
        label: "Expert",
        icon: git,
      },
      {
        id: 2,
        name: "Github",
        label: "Expert",
        icon: github,
      },
      {
        id: 3,
        name: "VS Code",
        label: "Expert",
        icon: vsCode,
      },
    ],
  },
  {
    id: 5,
    title: "PLATFORM",
    icons: [
      {
        id: 1,
        name: "Firebase",
        label: "Expert",
        icon: firebase,
      },
    ],
  },
  {
    id: 6,
    title: "WEB BROWSER",
    icons: [
      {
        id: 1,
        name: "Chrome",
        label: "Expert",
        icon: chrome,
      },
      {
        id: 2,
        name: "Firefox",
        label: "Expert",
        icon: firefox,
      },
      {
        id: 3,
        name: "Opera",
        label: "Expert",
        icon: opera,
      },
      {
        id: 4,
        name: "Edge",
        label: "Expert",
        icon: edge,
      },
      {
        id: 5,
        name: "Brave",
        label: "Expert",
        icon: brave,
      },
      {
        id: 6,
        name: "Safari",
        label: "Expert",
        icon: safari,
      },
    ],
  },
] as SkillData[];

export interface skillItem {
  id: number;
  name: string;
  label: string;
  icon: StaticImageData;
}

export interface SkillData {
  id: number;
  title: string;
  icons: skillItem[];
}
