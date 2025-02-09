import Animate from "@/components/animation/Animate";
import { skillItem } from "@/data/skill";
import Image from "next/image";

interface Props {
  data: skillItem;
}

const SkillCard = ({ data }: Props) => {
  return (
    <Animate direction="up" delay={0.3}>
      <div className="border-[1px] border-white/30 hover:border-white/50 group transition-all duration-500 py-2 px-4 rounded-lg  w-full">
        <div className="flex items-center gap-2 z-20">
          <Image
            alt="icon"
            src={data.icon}
            className="w-auto h-5 text-white group-hover:scale-110 transition-all duration-500"
          />
          <h2>{data.name}</h2>
          <p>( {data.label} )</p>
        </div>
      </div>
    </Animate>
  );
};

export default SkillCard;
