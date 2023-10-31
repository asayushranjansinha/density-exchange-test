import { motion, useInView } from "framer-motion";
import Image from "next/image";

import { badgeOne, blueGhostHero } from "@/app/assets";

function Left({ _ref }) {
  const inView = useInView(_ref, { amount: 0.5, once: true });
  const variants = {
    hidden: { opacity: 0, x: "-100%", scale: 0, z: -100 },
    visible: { opacity: 1, x: 0, scale: 1, z: 0 },
  };

  return (
    <div className="col-span-1 h-full flex flex-col gap-4 relative p-10 overflow-hidden rounded-2xl">
      <motion.div
        variants={variants}
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-md font-semibold">Built out of frustration</h3>
        <h1 className="text-4xl font-bold">Meet the ahead app</h1>
      </motion.div>
      <div className="w-48 h-48 bg-white rounded-full transform -translate-x-4 lg:translate-x-1/2 mt-8 flex items-center justify-center relative z-40">
        <Image src={blueGhostHero} alt="blueGhost" className="h-24 w-20" />
        <Image
          src={badgeOne}
          alt="badgeOne"
          className="h-8 w-8 absolute top-0 -translate-y-1/2"
        />
      </div>
      <div className="h-60 w-60 bg-[#FBE8DD] rounded-full absolute left-0 top-1/2 -translate-x-8  translate-y-8 z-30"></div>
    </div>
  );
}

export default Left;
