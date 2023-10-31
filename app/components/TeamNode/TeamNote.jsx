"use client";
import { motion, useInView } from "framer-motion";
import { Great_Vibes } from "next/font/google";
import { useRef } from "react";
import Button from "../shared/Button/Button";
import { Banner } from "..";

const cursive = Great_Vibes({ weight: "400", subsets: ["latin"] });

const textAnimations = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
};
const buttonAnimation = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
function TeamNote() {
  const text = "Team Ahead";
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <Banner styles="h-screen flex items-center justify-center">
      <div className="w-full lg:w-[70%] h-1/2 text-center">
        <h2 className="text-md lg:text-xl font-semibold mb-2">
          We take privacy seriously
        </h2>
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">Before you get started</h1>
        <q className="text-lg lg:text-2xl text-center mb-6 text-gray-800">
          We won't share your answers with anyone(and won't ever tell you which
          friends said what about you)
        </q>
        <span className="sr-only">{text}</span>
        <h2 className="text-2xl lg:text-3xl">
          <span className="mr-1">with love,</span>
          <motion.span
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.1 }}
            aria-hidden
            className={`${cursive.className}`}
          >
            {text.split("").map((char, index) => (
              <motion.span
                variants={textAnimations}
                key={index}
                className="font-normal text-3xl"
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h2>
        <motion.div
          variants={buttonAnimation}
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <Button classNames={"mt-8"} title="Start a test" />
          <p className="text-gray-700 mt-4">Take only 5 minutes</p>
        </motion.div>
      </div>
    </Banner>
  );
}

export default TeamNote;
