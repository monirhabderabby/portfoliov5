"use client";
import certificateData from "@/data/achivements";
import { Tooltip } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Image from "next/image";

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
              className="certificate"
            >
              <Image
                width={0}
                height={0}
                style={{
                  width: "80%",
                  height: "80%",
                }}
                src={certificate}
                alt="certificate"
                className="hover:scale-110 duration-300 blur-[.6px] hover:blur-0 rounded-md"
                loading="lazy"
              />
            </motion.div>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default AchievementsContainer;
