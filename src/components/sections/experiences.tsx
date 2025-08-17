import { experiencesData } from "@/data/experiences";
import { Briefcase, Building2, Calendar } from "lucide-react";
import { useMemo } from "react";

export default function Experiences() {
  const data = useMemo(() => experiencesData, []);
  return (
    <section className="w-full py-12 text-white flex justify-center items-center bg-black">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-[30px] font-bold tracking-tighter">
            Experiences
          </h2>
          <p className="text-gray-300 font-light">
            My Journey Through Professional Growth
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-lg shadow-md"
            >
              <div className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-gray-800">
                      <Briefcase className="h-7 w-7 lg:h-5 lg:w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-semibold text-white">
                        {experience.title}
                      </h3>
                      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-4 text-[12px] lg:text-sm text-gray-300 mt-1">
                        <div className="flex items-center gap-1">
                          <Building2 className="lg:h-4 h-3 w-3 lg:w-4 text-gray-400" />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="lg:h-4 h-3 w-3 lg:w-4 text-gray-400" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-[13px] lg:text-[14px] leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
