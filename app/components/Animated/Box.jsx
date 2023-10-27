import { motion, useInView } from "framer-motion";
import React from "react";

function Box({ _ref }) {
  const inView = useInView(_ref, { amount: 1, once: true });
  const itemVariants = {
    hidden: { x: 100, y: -50, scale: 0, opacity: 0 },
    visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 } },
  };
  return (
    <div className="w-1/2 h-44 bg-white mt-20 px-10 rounded-2xl shadow-lg flex items-center justify-center relative">
      <div className="w-full mx-auto relative">
        <div className="h-0 border border-gray-400 relative flex items-center justify-between">
          <div className="relative">
            <div className="h-4 w-4 bg-[#6240EF] rounded-full relative transform -translate-x-1/2">
              <motion.h4
                variants={itemVariants}
                animate={inView ? "visible" : "hidden"}
                className="min-w-max h-8 px-2 py-1 text-white rounded-lg bg-[#6240EF] absolute bottom-full mb-2 -translate-x-full"
              >
                <span>You</span>
              </motion.h4>
            </div>
          </div>
          <div className="relative">
            <div className="h-4 w-4 bg-[#40C3FD] rounded-full relative transform translate-x-1/2">
              <motion.h4
                variants={itemVariants}
                animate={inView ? "visible" : "hidden"}
                className="min-w-max h-8 px-2 py-1 text-white rounded-lg bg-[#40C3FD] absolute top-full mt-2"
              >
                <span>Anonymous 1</span>
              </motion.h4>
            </div>
          </div>
          <div className="relative">
            <div className="h-4 w-4 bg-[#FFB33C] rounded-full relative transform translate-x-1/2">
              <motion.h4
                variants={itemVariants}
                animate={inView ? "visible" : "hidden"}
                className="min-w-max h-8 px-2 py-1 text-white rounded-lg bg-[#FFB33C] absolute bottom-full mb-2"
              >
                <span>Anonymous 2</span>
              </motion.h4>
            </div>
          </div>
          <div className="relative">
            <div className="h-4 w-4 bg-[#59C897] rounded-full relative transform translate-x-1/2">
              <motion.h4
                variants={itemVariants}
                animate={inView ? "visible" : "hidden"}
                className="min-w-max h-8 px-2 py-1 text-white rounded-lg bg-[#59C897] absolute top-full mt-2"
              >
                <span>Anonymous 3</span>
              </motion.h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
