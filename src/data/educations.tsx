export type Education = {
  id: number;
  degree: string;
  school: string;
  timeline: string;
};

export const educationData: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Business Administration",
    school: "National University of Bangladesh",
    timeline: "2018-2023",
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate",
    school: "Uttara United College",
    timeline: "2016-2018",
  },
  {
    id: 3,
    degree: "Secondary School Certificate",
    school: "Noyagaon M.A Mazid Mia High School",
    timeline: "2012-2016",
  },
];
