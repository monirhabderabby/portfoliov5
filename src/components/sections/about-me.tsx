"use client";
// Packages
import { fadeIn } from "@/components/animation/variant";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Local imports
import CVDownloadButton from "../ui/CVDownloadButton";
import { ContainerScroll } from "../ui/container-scroll-animation";

const AboutMe = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  return (
    <ContainerScroll titleComponent={<></>}>
      <section ref={ref} id="about" className=" relative  overflow-hidden">
        <div className=" mx-auto relative bg-background">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
            {/* img */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={`aboutContainer h-[640px] mix-blend-lighten flex-1`}
            ></motion.div>
            {/* text */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1"
            >
              <h1 className="sr-only">About Me</h1>
              <h2 className="h2 text-white bg-primary w-fit">About me.</h2>
              <h3 className="h3 mb-4 font-aldrich text-white mt-1">
                I&apos;m Front end developer with 2+ years of Experinces
              </h3>
              <p className="mb-6 font-rajdhani text-white/90">
                Front End Web Developer with background knowledge of MERN stacks
                with redux, along with a knack of building applications with
                utmost efficiency.
              </p>
              {/* states */}
              <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                <div>
                  <div className="text-[25px] lg:text-[40px] font-aldrich text-gradient mb-2">
                    {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                    +
                  </div>
                  <div className="font-orbitron text-sm tracking-[2px] text-white/90">
                    Years of <br />
                    Experinces
                  </div>
                </div>
                <div>
                  <div className="text-[25px] lg:text-[40px] font-aldrich text-gradient mb-2">
                    {inView ? <CountUp start={0} end={0} duration={3} /> : null}
                  </div>
                  <div className="font-orbitron text-sm text-white/90 tracking-[2px]">
                    Projects <br />
                    Complete
                  </div>
                </div>
                <div>
                  <div className=" text-[25px] lg:text-[40px] font-aldrich text-gradient mb-2">
                    {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                    +
                  </div>
                  <div className="font-orbitron text-sm text-white/90 tracking-[2px]">
                    Satisfied <br />
                    Clients
                  </div>
                </div>
              </div>
              <div className="flex max-w-max gap-x-6 justify-start items-center lg:mx-0">
                <div>
                  <CVDownloadButton aria-label="Download CV" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </ContainerScroll>
  );
};

export default AboutMe;
