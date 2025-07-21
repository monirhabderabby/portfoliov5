"use client";
// Packages
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

// Local imports
import { socialData } from "@/data/data";
import { cn } from "@/lib/utils";
import profileImage from "../../../public/images/profile.jpg";
import AnimatedGradientText from "../ui/animated-gradient-text";
import CVDownloadButton from "../ui/CVDownloadButton";

const Hero = () => {
  const fadeInStragger = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 * index, duration: 0.4 },
    }),
  };
  return (
    <header className="min-h-[100vh]  w-full flex justify-center flex-col items-center relative px-4 md:px-0">
      <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />
      <Image
        src="/images/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[130px]"
        priority
      />
      <section className="flex flex-col items-center z-20">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profileImage}
              alt="Monir"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              placeholder="blur"
            />
            <motion.span
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
              className="absolute bottom-0 right-0 text-4xl"
            >
              👋
            </motion.span>
          </motion.div>
        </div>
        <motion.button
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.5,
            },
          }}
          className="group relative grid overflow-hidden rounded-full shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 bg-gradient-to-tr from-primary/40 mt-[20px] md:mt-[40px] "
        >
          <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40" />
          <AnimatedGradientText className="bg-neutral-950">
            ✨ <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#FFAA40] via-[#9C40FF] to-[#FFAA40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Introducing Me
            </span>
            <ChevronRight className="ml-2 w-4 h-4" />
          </AnimatedGradientText>
        </motion.button>

        <div className="max-w-[700px] my-7 md:my-10">
          <motion.h1
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "tween",
              duration: 1.2,
              delay: 0.1,
              ease: [0.25, 0.25, 0.25, 0.75],
            }}
            className={`${
              true
                ? `text-[24px] md:text-[30px] lg:textxl md:!leading-snug font-medium text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent`
                : `text-base md:text-lg text-foreground/80 mt-6 text-center`
            }`}
          >
            Hi, I’m Monir — a full-stack developer with 2 years of experience
            building modern, scalable apps with Next.js, Prisma & MongoDB. Let’s
            bring your idea to life!
          </motion.h1>
        </div>

        <div>
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              type: "tween",
              duration: 1.2,
              delay: 0.5,
              ease: [0.25, 0.25, 0.25, 0.75],
            }}
            className="flex items-center gap-x-4"
          >
            <CVDownloadButton />
          </motion.div>
          <div className="mt-10 flex justify-center">
            <div className="flex gap-x-6 max-w-max mx-auto lg:mx-0">
              {socialData.map(({ href, icon: Icon, id, target }) => (
                <motion.a
                  key={id}
                  href={href}
                  variants={fadeInStragger}
                  initial="initial"
                  animate="animate"
                  aria-label={`Link to ${id}`}
                  target={`_blank_${target}`}
                >
                  <Icon className="hover:text-white text-gray-500 text-xl hover:scale-110  transition-all duration-500" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
