import Contact from "@/components/sections/contact";
import { TracingBeamDemo } from "./_components/tracy-beam-content";

const Page = () => {
  return (
    <div className="py-[80px] px-6">
      <TracingBeamDemo />

      <Contact />
    </div>
  );
};

export default Page;
