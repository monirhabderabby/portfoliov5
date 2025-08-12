import ProjectsContainer from "@/components/sections/projects/projects-container";

const Page = () => {
  return (
    <section className="w-full py-24   text-white flex justify-center items-center">
      <div className="container">
        <div className="mb-8">
          <h2 className="text-[30px] font-bold tracking-tighter  ">Projects</h2>
          <p className="text-white/60 font-light">
            Showcasing My Creativity and Technical Expertise
          </p>
        </div>
        <ProjectsContainer isSliced={false} />
      </div>
    </section>
  );
};

export default Page;
