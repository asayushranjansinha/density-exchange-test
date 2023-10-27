"use client";
import { motion } from "framer-motion";

function Right() {
  return (
    <motion.div
      initial={{ x: +100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="col-span-1 h-full flex justify-center items-center"
    >
      <div className="relative h-96 w-96 border-4 border-dashed border-white rounded-full flex items-center justify-center">
        <div className="h-10 w-10 rounded-full bg-black absolute right-0 transform translate-x-1/2 top-1/2 -translate-y-1/2"></div>
        <div className="h-10 w-10 rounded-full bg-black absolute left-0 transform -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
        <div className="h-72 w-72 bg-[#E0D9FB] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      </div>
    </motion.div>
  );
}

export default Right;
