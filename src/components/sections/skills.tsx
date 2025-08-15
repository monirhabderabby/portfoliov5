import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { skills } from "@/data/skill";
import Image from "next/image";
import SkillCard from "../cards/skill-card";

const Skills = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="flex justify-center flex-col items-center relative">
          <Image
            src="/images/steel-flower.webp"
            alt="steel-flower"
            width={200}
            height={200}
            className="absolute bottom-3 opacity-20 mix-blend-normal"
          />
          {/* <h2 className="text-xs text-white font-light text-center z-50 tracking-widest mb-3 bg-primary">
            My Skills
          </h2> */}

          <h1 className="text-[30px] font-bold tracking-tighter ">
            My Secret{" "}
            <PointerHighlight
              rectangleClassName="bg-primary/30  border-blue-300  "
              pointerClassName="text-blue-500 h-3 w-3"
              containerClassName="inline-block mr-1"
            >
              <span>Sauce</span>
            </PointerHighlight>
          </h1>
        </div>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-5 max-w-[800px] mx-auto">
          {skills.map((item, i) => (
            <SkillCard key={item.id} data={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
