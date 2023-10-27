import { motion, useInView } from "framer-motion";
import React from "react";

function Right({ _ref }) {
  const inView = useInView(_ref, { amount: 0.5, once: true });
  const variants = {
    hidden: { opacity: 0, x: "-100%", scale: 0, z: -100 },
    visible: { opacity: 1, x: 0, scale: 1, z: 0 },
  };
  return (
    <motion.div
      variants={variants}
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      className="col-span-1 h-full flex flex-col items-center justify-center gap-4 text-gray-700 font-medium opacity-80"
    >
      <h2 className="w-2/3 mx-auto">
        A personalized pocket coach that provides bite- sized, science-driven
        tools to boost emotional intelligence.
      </h2>
      <h2 className="w-2/3 mx-auto">
        Think of it as a pocket cheerleader towards a better, more fulfilling.
      </h2>
    </motion.div>
  );
}

export default Right;
