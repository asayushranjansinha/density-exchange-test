"use client";
import { motion } from "framer-motion";

function Motion({ children }) {
  return (
    <motion.section
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }}
    >
      {children}
    </motion.section>
  );
}

export default Motion;
