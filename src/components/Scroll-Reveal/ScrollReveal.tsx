import { motion } from "motion/react";

import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
};

const ScrollReveal = ({ children }: ScrollRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
