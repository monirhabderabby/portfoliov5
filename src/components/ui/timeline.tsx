"use client";
import { getTypeColor } from "@/app/about-me/_components/get-type-color";
import { Badge } from "@/components/ui/badge";
import { JourneySteps } from "@/data/journeySteps";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  data: JourneySteps[];
}

export const Timeline = ({ data }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      // eslint-disable-next-line
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 70%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full container " ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 ">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-10 items-center top-40 self-start max-w-xs lg:max-w-sm ">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-primary/50  dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-primary/10 dark:bg-neutral-800 border border-primary/5 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block  text-xl md:pl-20 md:text-2xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.role}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <Badge className={getTypeColor(item.type)}>{item.type}</Badge>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {item.year}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> {item.company}
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="aspect-video max-w-[400px] relative mt-3 hidden md:block">
                <Image
                  src={item.image}
                  fill
                  alt={item.company}
                  title={item.role}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] 
             bg-[linear-gradient(to_bottom,transparent_30%,#004EB0_90%,transparent_100%)] 
             [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_50%,transparent_100%)]"
        >
          <motion.div
            className="absolute inset-x-0 top-0 w-[2px] rounded-full"
            // Solid primary color for the moving progress bar
            style={{
              backgroundColor: "#004EB0",
              height: heightTransform,
              opacity: opacityTransform,
            }}
          />
        </div>
      </div>
    </div>
  );
};
