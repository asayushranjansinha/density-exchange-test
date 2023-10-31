"use client";

import { vacancies } from "@/constants";
import React, { useRef } from "react";
import Card from "./Card";
import { useInView, motion } from "framer-motion";
import { Banner } from "..";

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
    <Banner
      forwardedRef={ref}
      styles="lg:h-[60vh] p-10 overflow-hidden"
    >
      <motion.h1
        variants={Leftvariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-3xl lg:text-6xl font-medium mb-8"
      >
        Open Vacancies
      </motion.h1>
      <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto">
        {vacancies.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </Banner>
  );
}

export default Vacancies;
