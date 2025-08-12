import AchievementsContainer from "./_components/achivements-container";

const Page = () => {
  return (
    <section className="min-h-[calc(100vh-60px)] py-24 flex justify-center items-center">
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
        <AchievementsContainer />
      </div>
    </section>
  );
};

export default Page;
