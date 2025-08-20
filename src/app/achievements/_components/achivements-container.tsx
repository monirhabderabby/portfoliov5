"use client";
import certificateData from "@/data/achivements";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
// Instead of importing all Tooltip animations
const Tooltip = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.Tooltip),
  { ssr: false }
);

const AchievementsContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] gap-y-[40px] lg:gap-y-[60px] mt-[50px]">
      {certificateData?.map(({ id, certificate, name }) => {
        return (
          <Tooltip
            key={id}
            content={name}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
            placement="bottom"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{ opacity: 0 }}
              className="certificate flex justify-center p-0 opacity-0 animate-fadeIn"
            >
              <span className="sr-only">{name}</span>
              {/* Image wrapper with aspect ratio */}
              <div className="relative w-4/5 aspect-[4/3]">
                <Image
                  src={certificate}
                  alt={name || "certificate"}
                  fill
                  className="object-contain hover:scale-110 duration-300 blur-[.6px] hover:blur-0 rounded-md"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
                />
              </div>
            </motion.div>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default AchievementsContainer;
