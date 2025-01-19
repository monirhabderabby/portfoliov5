import { Icons } from "@/components/ui/icons";
import { OrbitingCircles } from "../ui/orbiting-circles";

export function OrbitingSkills() {
  return (
    <section className="section relative">
      <div className="relative flex min-h-[600px] w-full flex-col items-center justify-center overflow-hidden   rounded-lg  ">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-current to-gray-500 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
          Skills
        </span>

        {/* Inner Circles */}
        <OrbitingCircles
          className="size-[20px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={80}
        >
          <Icons.figma />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[20px] border-none bg-transparent"
          duration={20}
          delay={15}
          radius={80}
        >
          <Icons.openai />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[20px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={80}
        >
          <Icons.javascript />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[20px] border-none bg-transparent"
          duration={20}
          delay={5}
          radius={80}
        >
          <Icons.mongodb />
        </OrbitingCircles>

        {/* middle Circles (reverse) */}
        <OrbitingCircles
          className="size-[22px] border-none bg-transparent"
          radius={170}
          duration={25}
          delay={25}
          reverse
        >
          <Icons.firebase />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[22px] border-none bg-transparent"
          radius={170}
          duration={25}
          delay={19}
          reverse
        >
          <Icons.gitHub />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[25px] border-none bg-transparent"
          radius={170}
          duration={25}
          delay={13}
          reverse
        >
          <Icons.typescript />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[22px] border-none bg-transparent"
          radius={170}
          duration={25}
          delay={6}
          reverse
        >
          <Icons.vuejs />
        </OrbitingCircles>

        {/* middle Circles */}
        <OrbitingCircles
          className="size-[28px] border-none bg-transparent"
          radius={250}
          duration={30}
          delay={30}
        >
          <Icons.tailwind />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[28px] border-none bg-transparent"
          radius={250}
          duration={30}
          delay={23}
        >
          <Icons.nextjs />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[28px] border-none bg-transparent"
          radius={250}
          duration={30}
          delay={15}
        >
          <Icons.react />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[28px] border-none bg-transparent"
          radius={250}
          duration={30}
          delay={7}
        >
          <Icons.prisma />
        </OrbitingCircles>
      </div>
    </section>
  );
}
