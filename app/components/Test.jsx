"use client";

import { motion } from "framer-motion";

function test() {
  return (
    <div className="w-full h-screen flex gap-2 relative">
      <motion.div
        initial={{ x: "100%" }} // Set the initial position outside the screen on the right
      animate={{ x: "0%" }} // Animate the position to 0
      transition={{ duration: 1 }} // Set the animation duration
        className="w-40 h-40 bg-blue-800 absolute top-1/2 right-1"
      ></motion.div>
    </div>
  );
}

export default test;
