import { motion, useInView } from "framer-motion";
import React from "react";

function Box({ _ref }) {
  const inView = useInView(_ref, { amount: 0.5, once: true });
  const itemVariants = {
    hidden: { x: "100%", y: "-50%", scale: 0, opacity: 0 },
    visible: {
      x: "0%",
      y: "0%",
      scale: 1,
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <div className="w-full lg:w-1/2 h-44 bg-white mt-20 px-8 lg:px-20 rounded-2xl shadow-lg flex items-center justify-center">
      <div className="relative w-full h-0 border border-gray-400 flex items-center justify-between">
        <div className="h-4 w-4 rounded-full bg-[#6240EF] absolute -translate-x-1/2 top-0 left-0 -translate-y-1/2"></div>

        <motion.h4
          initial={{ x: "100%", y: "50%", opacity: 0, scale: 0 }}
          animate={
            inView
              ? { x: "-100%", y: "0%", opacity: 1, scale: 1 }
              : { x: "100%", y: "50%", opacity: 0, scale: 0 }
          }
          transition={{ duration: 1 }}
          className="min-w-max h-8 px-2 py-1 text-white rounded-lg bg-[#6240EF] absolute bottom-4 -translate-x-full"
        >
          <span>You</span>
        </motion.h4>

        <div className="h-4 w-4 rounded-full bg-[#40C3FD] absolute top-0 left-1/4 -translate-y-1/2"></div>
        <motion.h4
          initial={{ x: "100%", y: "50%", opacity: 0, scale: 0 }}
          animate={
            inView
              ? { x: "0%", y: "0%", opacity: 1, scale: 1 }
              : { x: "100%", y: "50%", opacity: 0, scale: 0 }
          }
          transition={{ duration: 1 }}
          className="min-w-max h-8 px-4 py-1 text-white rounded-lg bg-[#40C3FD] absolute top-4 left-1/4 flex lg:hidden"
        >
          <span>1</span>
        </motion.h4>
        <motion.h4
          initial={{ x: "100%", y: "50%", opacity: 0, scale: 0 }}
          animate={
            inView
              ? { x: "0%", y: "0%", opacity: 1, scale: 1 }
              : { x: "100%", y: "50%", opacity: 0, scale: 0 }
          }
          transition={{ duration: 1 }}
          className="min-w-max h-8 px-2 py-1 text-white rounded-lg bg-[#40C3FD] absolute top-4 left-1/4 hidden lg:flex"
        >
          <span>Anonymous 1</span>
        </motion.h4>

        <div className="h-4 w-4 rounded-full bg-[#FFB33C] absolute top-0 right-1/4 -translate-y-1/2"></div>
        <motion.h4
          initial={{ x: "100%", y: "50%", opacity: 0, scale: 0 }}
          animate={
            inView
              ? { x: "+90%", y: "0%", opacity: 1, scale: 1 }
              : { x: "100%", y: "50%", opacity: 0, scale: 0 }
          }
          transition={{ duration: 1 }}
          className="min-w-max h-8 px-4 py-1 text-white rounded-lg bg-[#FFB33C] absolute bottom-4 right-1/4 transform translate-x-[90%] flex lg:hidden"
        >
          <span>2</span>
        </motion.h4>
        <motion.h4
          initial={{ x: "100%", y: "50%", opacity: 0, scale: 0 }}
          animate={
            inView
              ? { x: "+90%", y: "0%", opacity: 1, scale: 1 }
              : { x: "100%", y: "50%", opacity: 0, scale: 0 }
          }
          transition={{ duration: 1 }}
          className="min-w-max h-8 px-2 py-1 text-white rounded-lg bg-[#FFB33C] absolute bottom-4 right-1/4 translate-x-[90%] hidden lg:flex"
        >
          <span>Anonymous 2</span>
        </motion.h4>

        <div className="h-4 w-4 rounded-full bg-[#59C897] absolute translate-x-1/2 top-0 right-0 -translate-y-1/2"></div>
        <motion.h4
          initial={{ x: "100%", y: "50%", opacity: 0, scale: 0 }}
          animate={
            inView
              ? { x: "+100%", y: "0%", opacity: 1, scale: 1 }
              : { x: "100%", y: "50%", opacity: 0, scale: 0 }
          }
          transition={{ duration: 1 }}
          className="min-w-max h-8 px-4 py-1 text-white rounded-lg bg-[#59C897] absolute top-4 right-0 translate-x-full flex lg:hidden"
        >
          <span>3</span>
        </motion.h4>
        <motion.h4
          initial={{ x: "100%", y: "50%", opacity: 0, scale: 0 }}
          animate={
            inView
              ? { x: "+100%", y: "0%", opacity: 1, scale: 1 }
              : { x: "100%", y: "50%", opacity: 0, scale: 0 }
          }
          transition={{ duration: 1 }}
          className="min-w-max h-8 px-2 py-1 text-white rounded-lg bg-[#59C897] absolute top-4 right-0 translate-x-full hidden lg:flex"
        >
          <span>Anonymous 3</span>
        </motion.h4>
      </div>
    </div>
  );
}

export default Box;
