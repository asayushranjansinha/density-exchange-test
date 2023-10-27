"use client";
import { motion, useInView } from "framer-motion";
import ghost from "@/public/blue-ghost.png";
import Image from "next/image";

function Heading({ _ref }) {
  const inView = useInView(_ref, { amount: 0.5, once: true });
  const ghostVariants = {
    initial: { x: 500, y: 0 },
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
    <header className="w-full flex gap-10">
      <div>
        <h3 className="text-md font-medium mt-8">
          Wrong with self-improvement & how we're fixing it.
        </h3>
        <h2 className="text-[40px] font-bold mt-2">Self-improvement. Ugh.</h2>
      </div>
      <motion.div
        variants={ghostVariants}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="h-20 w-20 mt-14"
      >
        <Image src={ghost} alt="ghost" className="object-cover h-full w-full" />
      </motion.div>
    </header>
  );
}

export default Heading;
