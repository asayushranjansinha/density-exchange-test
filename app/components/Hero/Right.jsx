"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import blueGhost from "@/public/heroblueghost.png";
import neutral from "@/public/heroneutralghost.png";
import red from "@/public/heroredghost.png";
import Mobile from "@/public/heromobile.png";
function Right() {
  return (
    <motion.div
      initial={{ x: +100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="col-span-1 h-full flex justify-center items-center"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        className="relative h-96 w-96 border-4 border-dashed border-white rounded-full flex items-center justify-center"
      >
        <motion.div
          initial={{ x: +100, opacity: 0 }}
          animate={{ x: +25, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-10 w-10 rounded-full absolute right-0 transform translate-x-1/2 top-1/2 -translate-y-1/2"
        >
          <Image
            src={neutral}
            alt="ghost"
            className="h-full w-full object-contain z-50"
          />
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: -25, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-10 w-10 rounded-full absolute top-0 transform -translate-y-1/2"
        >
          <Image
            src={red}
            alt="ghost"
            className="h-full w-full object-contain z-50"
          />
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: -25, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-10 w-10 rounded-full absolute left-0 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
        >
          <Image
            src={blueGhost}
            alt="ghost"
            className="h-full w-full object-contain z-50"
          />
        </motion.div>
        <div className="h-72 w-72 bg-[#E0D9FB] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center">
          <Image src={Mobile} alt="Mobile" className="h-72 w-48" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Right;
