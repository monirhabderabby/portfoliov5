"use client";

import { skillItem } from "@/data/skill";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  data: skillItem;
  index: number;
}

const SkillCard = ({ data, index }: Props) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // allow replay when re-entering
    threshold: 0.2, // 20% visible before animation triggers
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.2, // stagger delay
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      custom={index}
    >
      <div className="border-[1px] border-white/20 hover:border-white/30 group transition-all duration-500 py-2 px-4 rounded-lg w-full cursor-pointer hover:bg-white/5">
        <div className="flex items-center gap-2 z-20 font-light">
          <Image
            alt="icon"
            src={data.icon}
            width={20}
            height={20}
            className="w-auto h-5 text-white group-hover:scale-110 transition-all duration-500"
          />
          <h2 className="text-xs">{data.name}</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
