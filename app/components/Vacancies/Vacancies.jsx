"use client";

import { vacancies } from "@/constants";
import React, { useRef } from "react";
import Card from "./Card";
import { useInView, motion } from "framer-motion";

function Vacancies() {
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
  return (
    <section ref={ref} className="w-full h-[60vh] my-10 p-10">
      <motion.h1
        variants={Leftvariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-6xl font-medium"
      >
        Open Vacancies
      </motion.h1>
      <div className="w-full h-fit grid grid-cols-3 gap-20 mt-10">
        {vacancies.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}

export default Vacancies;
