export const journeySteps = [
  {
    year: "2018",
    title: "Academic Foundation",
    role: "BBA Accounting Student",
    company: "National University",
    description:
      "Started my academic journey in accounting, building analytical and problem-solving skills that would later prove invaluable in programming.",
    image: "/university-campus-studying.png",
    achievements: [
      "Completed 2nd year successfully",
      "Developed analytical thinking",
      "Built foundation for logical reasoning",
    ],
    type: "education",
  },
  {
    year: "2020",
    title: "The Turning Point",
    role: "Uber Rider & Self-Discovery",
    company: "Personal Journey",
    description:
      "During COVID-19, faced financial challenges and worked as an Uber rider. A pivotal moment under Dhaka Kuril flyover led me to discover my true passion for technology.",
    image: "/important-life-decision.png",
    achievements: [
      "Overcame financial hardships",
      "Discovered passion for technology",
      "Made life-changing decision",
    ],
    type: "transition",
  },
  {
    year: "2021",
    title: "Learning Journey Begins",
    role: "Programming Student",
    company: "Programming Hero & Learn with Sumit",
    description:
      "Invested 5500 Taka from my father to join Programming Hero. Faced initial struggles with JavaScript but persevered and fell in love with React.js.",
    image: "/programming-learner.png",
    achievements: [
      "Completed Programming Hero Batch 5",
      "Mastered React.js fundamentals",
      "Overcame JavaScript challenges",
    ],
    type: "learning",
  },
  {
    year: "2022",
    title: "First Professional Experience",
    role: "React.js Developer",
    company: "ITCO BD",
    description:
      "Landed my first job but faced challenges due to lack of senior guidance. This failure became a valuable learning experience about software development lifecycle.",
    image: "/startup-developers-working.png",
    achievements: [
      "First professional role",
      "Learned from failure",
      "Understood importance of mentorship",
    ],
    type: "experience",
  },
  {
    year: "2022-2023",
    title: "Skill Enhancement",
    role: "Continuous Learner",
    company: "Learn with Sumit Platform",
    description:
      "Returned to learning with renewed focus. Completed 'Think In a Redux Way' and 'Reactive Accelerator' courses. Collaborated with fellow developers on practice projects.",
    image: "/developer-learning-advanced-web.png",
    achievements: [
      "Mastered Redux patterns",
      "Learned Next.js & TypeScript",
      "Built collaborative projects",
    ],
    type: "learning",
  },
  {
    year: "2023",
    title: "Career Breakthrough",
    role: "Frontend Developer → Team Leader",
    company: "ScaleUp Ads Agency",
    description:
      "Joined as frontend developer and quickly progressed to unofficial team leadership within 3 months, demonstrating natural leadership abilities.",
    image: "/professional-team-meeting.png",
    achievements: [
      "Rapid promotion to team lead",
      "Led frontend development team",
      "Demonstrated leadership skills",
    ],
    type: "leadership",
  },
  {
    year: "2023",
    title: "Project Leadership",
    role: "Project Leader",
    company: "ScaleUp Ads Agency",
    description:
      "Promoted to handle end-to-end project management with a 12-member team including frontend, backend developers, and UI/UX designers.",
    image: "/placeholder-dv3it.png",
    achievements: [
      "Managed 12-member team",
      "End-to-end project delivery",
      "Cross-functional leadership",
    ],
    type: "leadership",
  },
  {
    year: "2023",
    title: "Extended Leadership Recognition",
    role: "Extended Leadership Forum Member",
    company: "ScaleUp Ads Agency",
    description:
      "Selected for the Extended Leadership Forum, recognizing my contribution to the company's growth and my leadership potential.",
    image: "/recognition-ceremony.png",
    achievements: [
      "Leadership forum selection",
      "Company-wide recognition",
      "Strategic decision involvement",
    ],
    type: "recognition",
  },
  {
    year: "2023",
    title: "Head of Web Development",
    role: "Head of Web Development",
    company: "ScaleUp Ads Agency",
    description:
      "Promoted to Head of Web Development, overseeing both day and night shift operations. Leading the entire web development division with strategic oversight.",
    image: "/executive-web-development-team.png",
    achievements: [
      "Head of department role",
      "24/7 operations oversight",
      "Strategic leadership position",
    ],
    type: "executive",
  },
];

export interface JourneySteps {
  year: string;
  title: string;
  role: string;
  company: string;
  description: string;
  image: string;
  achievements: string[];
  type: string;
}
