"use client";
import { motion, useInView } from "framer-motion";
function SliderHeading({ _ref }) {
  const inView = useInView(_ref, { amount: 0.5, once: true });
  const variants = {
    visible: {
      scaleX: 0.8,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 30,
        duration: 0.8,
      },
    },
    hidden: { scaleX: 0.2, opacity: 0 },
  };
  return (
    <motion.h2
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="text-6xl font-medium"
      style={{ display: "inline-block", transformOrigin: "left" }}
    >
      Does this sound familiar...
    </motion.h2>
  );
}

export default SliderHeading;
