import { motion, useInView } from "framer-motion";

import { myObjects } from "@/constants";
import Card from "./Card";

function Right({ _ref }) {
  const inView = useInView(_ref, { amount: 0.5, once: true });

  const variant = {
    hidden: { x: +100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };
  const slideVariant = {
    hidden: { opacity: 0, y: 500 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="col-span-1 h-full overflow-hidden relative">
      <motion.h1
        variants={variant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-5xl font-semibold text-[#6946F0] my-8 text-right"
      >
        ahead
      </motion.h1>
      <motion.div
        variants={slideVariant}
        animate={inView ? "visible" : "hidden"}
        className="h-[80%] w-full overflow-y-scroll absolute bottom-0 right-0"
      >
        {myObjects.map((item) => (
          <Card key={item.id} title={item.heading} body={item.body} />
        ))}
      </motion.div>
    </div>
  );
}

export default Right;
