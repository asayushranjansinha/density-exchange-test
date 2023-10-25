"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Great_Vibes } from "next/font/google";

const cursive = Great_Vibes({ weight: "400", subsets: ["latin"] });

const textAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};
const buttonAnimation = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 10 },
  },
};
function TeamNote() {
  const text = "Team Ahead";
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <section className={"h-[70vh] w-full my-10 rounded-3xl p-10 "}>
      <div className="w-4/5 mx-auto flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-2">
          We take privacy seriously
        </h2>
        <h1 className="text-4xl font-bold mb-4">Before you get started</h1>
        <q className="text-2xl text-center mb-6 text-gray-800">
          We won't share your answers with anyone(and won't ever tell you which
          friends said what about you)
        </q>
        <span className="sr-only">{text}</span>
        <h2 className="text-2xl">
          <span className="mr-1">with love,</span>{" "}
          <motion.span
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.1 }}
            aria-hidden
            className={`${cursive.className}`}
          >
            {text.split("").map((char) => (
              <motion.span variants={textAnimations} key={char} className="font-normal text-3xl">
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h2>
        <motion.button
          variants={buttonAnimation}
          initial="hidden"
          animate="visible"
          className="bg-black w-40 h-14 rounded-full text-white text-center"
        >
          Start a test
        </motion.button>
        <p>Take only 5 minutes</p>
      </div>
    </section>
  );
}

export default TeamNote;
