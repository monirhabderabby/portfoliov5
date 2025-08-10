import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { educationData } from "@/data/educations";
import { GraduationCap } from "lucide-react";

const Educations = () => {
  return (
    <section className="w-full py-12 bg-black/95  text-white flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-[30px] font-bold tracking-tighter  ">
            Educations
          </h2>
          <p className="text-white/60 font-light">
            My Journey Through Education
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {educationData.map(({ id, degree, school, timeline }) => (
            <Card className="border-white/10" key={id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <GraduationCap className="text-primary w-10 h-10" />
                  <span className="text-[14px]">{timeline}</span>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-center">{degree}</h3>
                <p className="text-[13px] text-white/30 text-center font-light">
                  {school}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educations;
