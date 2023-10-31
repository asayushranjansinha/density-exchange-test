import { motion } from "framer-motion";
import Image from "next/image";

import { MobileImage, blueGhostHero, grayGhost, redGhost } from "@/app/assets";

function Right() {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="col-span-1 order-first lg:order-last h-full flex justify-center items-center"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        className="relative h-48 lg:h-96 w-48 lg:w-96 border-4 border-dashed border-white rounded-full flex items-center justify-center"
      >
        {/* right ghost */}
        <motion.div
          initial={{ x: "100%",y: "-50%", opacity: 0 }}
          animate={{ x: "50%",y: "-50%", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-10 w-10 absolute right-0 transform top-1/2 -translate-y-1/2 translate-x-1/2"
        >
          <Image
            src={grayGhost}
            alt="grayGhost"
            className="h-full w-full object-contain z-50"
          />
        </motion.div>
        {/* top ghost */}
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "-50%", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-10 w-10 absolute top-0 transform -translate-y-1/2"
        >
          <Image
            src={redGhost}
            alt="redGhost"
            className="h-full w-full object-contain z-50"
          />
        </motion.div>

        {/* left ghost */}
        <motion.div
          initial={{ x: "-100%", y: "-50%", opacity: 0 }}
          animate={{ x: "-50%", y: "-50%", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-10 w-10 absolute left-0 transform top-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          <Image
            src={blueGhostHero}
            alt="grayGhost"
            className="h-full w-full object-contain z-50"
          />
        </motion.div>

        <div className="h-36 lg:h-72 w-36 lg:w-72 bg-[#E0D9FB] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center">
          <Image
            src={MobileImage}
            alt="MobileImage"
            className="h-32 lg:h-72 w-20 lg:w-48"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Right;
