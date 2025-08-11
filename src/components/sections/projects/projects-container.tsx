"use client";
import ProjectCard from "@/components/cards/project-card";
import { projects } from "@/data/projects";
import { fadeIn } from "@/lib/variant";
import { motion } from "framer-motion";

const animateDirectionDecisionMaker = (index: number) => {
  const col = index % 3; // Determine column in a 3-column grid
  if (col === 0) return "left";
  if (col === 1) return "up";
  return "right";
};

const ProjectsContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.slice(0, 6).map((p, index) => (
        <motion.div
          variants={fadeIn(animateDirectionDecisionMaker(index), 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          key={p.title}
        >
          <ProjectCard
            height="h-[234px] md:h-[230px] lg:h-[313px]"
            project={p}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsContainer;
