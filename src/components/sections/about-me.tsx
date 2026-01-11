"use client";
// Packages
import { fadeIn } from "@/components/animation/variant";
import { motion } from "framer-motion";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Local imports
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProfileCard from "../cards/about-section-profile-card";
import CVDownloadButton from "../ui/CVDownloadButton";
import { Button } from "../ui/button";

const AboutMe = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden container md:min-h-screen py-[100px] md:py-0"
    >
      <div className="mx-auto relative bg-background">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* img */}
          {/* <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="aboutContainer h-[640px] mix-blend-lighten flex-1 hidden md:block"
          ></motion.div> */}

          <ProfileCard />

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h1 className="sr-only">About Me</h1>
            <h2 className="h2 text-white bg-primary w-fit">About Me.</h2>

            <h3 className={cn("h3 mb-4 font-aldrich text-white mt-1")}>
              Full-Stack Developer | Turning Ideas Into High-Performing
              Applications
            </h3>

            <p className={cn("mb-6 text-white/95")}>
              I’m a results-oriented Full-Stack Developer with{" "}
              <strong>2+ years of hands-on experience</strong> building fast,
              scalable, and user-friendly applications using{" "}
              <strong>Next.js, Prisma, MongoDB</strong>, and modern UI
              frameworks.
              <br /> <br />I specialize in crafting solutions that not only look
              great but also drive measurable results — helping businesses
              launch faster, scale smoothly, and deliver exceptional user
              experiences.
            </p>

            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[25px] lg:text-[40px] font-aldrich text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}+
                </div>
                <div className="text-sm tracking-[2px] text-white/90">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[25px] lg:text-[40px] font-aldrich text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                </div>
                <div className="font-orbitron text-sm text-white/90 tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[25px] lg:text-[40px] font-aldrich text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}+
                </div>
                <div className="font-orbitron text-sm text-white/90 tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex max-w-max gap-x-6 justify-start items-start lg:mx-0 flex-col gap-y-10">
              <p className="text-white/80 font-light text-sm mr-4">
                Let’s build something amazing together — grab my CV and let’s
                talk.
              </p>
              <div className="flex items-center gap-x-5">
                <CVDownloadButton aria-label="Download CV" />
                <Button variant="link" asChild className="text-white">
                  <Link href="/about-me">
                    My Story <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
