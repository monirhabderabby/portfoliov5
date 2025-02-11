"use client";

import { Briefcase, Building2, Calendar } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description:
      "Led development of multiple React-based web applications, implementing modern frontend architectures and optimizing performance.",
  },
  {
    title: "Frontend Developer",
    company: "Digital Innovations",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications using React and Next.js, collaborating with cross-functional teams to deliver high-quality solutions.",
  },
  {
    title: "Junior Developer",
    company: "Web Creators",
    period: "2019 - 2020",
    description:
      "Started career in web development, focusing on HTML, CSS, and JavaScript fundamentals while learning React.",
  },
];

export default function Experiences() {
  return (
    <section className="w-full py-12 bg-black/95 min-h-screen text-white flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-[30px] font-bold tracking-tighter  mb-8">
          Experiences
        </h2>
        <div className="grid gap-6">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-gray-900/50 border-gray-800">
              <div className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-gray-800">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-semibold text-white/90">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400/90 mt-1">
                        <div className="flex items-center gap-1 text-[14px]">
                          <Building2 className="h-4 w-4" />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400/70">{experience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
