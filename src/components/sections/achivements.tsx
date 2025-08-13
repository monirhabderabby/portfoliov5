"use client";
import certificateData from "@/data/achivements";
import { Tooltip } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  isSliced?: boolean;
}

const Achievements = ({ isSliced }: Props) => {
  const visibleCertificates = isSliced
    ? certificateData.slice(0, 6)
    : certificateData;
  return (
    <section className="w-full py-12 bg-black/95  text-white flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <div className="h-[.5px] flex-grow bg-primary/40" />
          <div className="flex-1 flex justify-end">
            <div>
              <h2 className="text-[30px] font-bold tracking-tighter text-end ">
                Achievements
              </h2>
              <p className="text-white/60 font-light text-end">
                Milestones That Define My Path
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] gap-y-[40px] lg:gap-y-[60px] mt-[50px]">
          {visibleCertificates?.map(({ id, certificate, name }) => {
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

        <div className="w-full mt-10 flex items-center justify-center">
          <Button variant="ghost" asChild>
            <Link href="/achievements">See More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
