import ghost from "@/public/ghostdull.svg";

import { motion, useInView } from "framer-motion";
import Image from "next/image";

function Left({ _ref }) {
  const inView = useInView(_ref, { amount: 0.5, once: true });
  const variants = {
    hidden: { opacity: 0, x: "-100%", scale: 0, z: -100 },
    visible: { opacity: 1, x: 0, scale: 1, z: 0 },
  };

  return (
    <div className="col-span-1 h-full flex flex-col gap-4 mt-10 relative">
      <motion.div
        variants={variants}
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-md font-semibold">Built out of frustration</h3>
        <h1 className="text-4xl font-bold">Meet the ahead app</h1>
      </motion.div>
      <div className="w-48 h-48 bg-white rounded-full translate-x-1/2 mt-8 flex items-center justify-center">
        <Image src={ghost} alt="ghost" className="h-24 w-20" />
      </div>
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-300 absolute bottom-28 right-0 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}

export default Left;
