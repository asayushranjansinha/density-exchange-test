"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

import { blueGhost } from "@/app/assets";

function Heading({ _ref }) {
  const inView = useInView(_ref, { amount: 0.5, once: true });
  const ghostVariants = {
    initial: { x: 0, y: 0 },
    animate: {
      x: [500, 0],
      y: [0, -50, -20],
      transition: {
        x: { duration: 1.5, ease: "easeInOut" },
        y: { duration: 1, delay: 1.5, ease: "easeInOut" },
      },
    },
  };
  return (
    <div className="px-10 py-4">
      <h3 className="text-md font-medium mt-8">
        Wrong with self-improvement & how we're fixing it.
      </h3>
      <div className="flex h-full">
        <h2 className="text-xl lg:text-[40px] font-bold mt-2">Self-improvement. Ugh.</h2>

        <motion.div
          variants={ghostVariants}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <Image src={blueGhost} alt="blueGhost" className="h-12 w-12" />
        </motion.div>
      </div>
    </div>
  );
}

export default Heading;
