import { motion, useInView } from "framer-motion";
import Image from "next/image";
import ghost from "@/public/redGhost.png";

function SliderHeading({ _ref }) {
  const inView = useInView(_ref, { amount: 0.5, once: true });
  const variants = {
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hidden: {
      scaleX: 0,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };
  const ghostVariants = {
    initial: { x: 500, y: 0 },
    animate: {
      x: [500, 0],
      y: [0, -50, -20],
      transition: {
        x: { duration: 1.5, ease: "easeInOut" },
        y: { duration: 1, delay: 1.5, ease: "easeInOut" },
      },
    },
  };
  return (
    <div className="flex  items-center">
      <motion.h2
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        className="text-5xl font-medium"
        style={{ display: "inline-block", transformOrigin: "left" }}
      >
        Does this sound familiar...
      </motion.h2>
      <motion.div
        variants={ghostVariants}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="h-20 w-20"
      >
        <Image src={ghost} alt="ghost" className="object-cover h-full w-full" />
      </motion.div>
    </div>
  );
}

export default SliderHeading;
