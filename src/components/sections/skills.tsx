import { SkillData, skillData } from "@/data/skill";
import SkillCard from "../cards/skill-card";

const Skills = () => {
  return (
    <section className="min-h-screen py-[100px]">
      <div className="container mx-auto">
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-[25px] text-white bg-primary text-center">
            Technologies
          </h2>
        </div>
        <div className="pt-3">
          {skillData?.map((item: SkillData) => {
            return (
              <div key={item.id} className="my-[30px]">
                <h1 className="text-[16px]">{item.title}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-2">
                  {item.icons?.map((item) => {
                    return <SkillCard key={item.id} data={item} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
