"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeIn } from "./variant";

interface Props {
  children: ReactNode;
  direction: string;
  delay: number;
}

const Animate = ({ children, direction, delay }: Props) => {
  return (
    <motion.div
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
