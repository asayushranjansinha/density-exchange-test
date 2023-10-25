"use client";
import { motion, useInView } from "framer-motion";

import React, { useRef } from "react";

function Heading() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const Leftvariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };
  const Rightvariants = {
    hidden: { x: +100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      className="w-full h-[20%] flex justify-between px-10 py-4"
    >
      <motion.h1
        variants={Leftvariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-6xl font-medium"
      >
        Work with us
      </motion.h1>
      <motion.h1
        variants={Rightvariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-5xl font-semibold text-[#6946F0]"
      >
        ahead
      </motion.h1>
    </motion.div>
  );
}

export default Heading;
