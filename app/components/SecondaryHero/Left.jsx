import animationData from "@/public/owl2.json";
import LottieAnimation from "../shared/LottieAnimation";
import { motion, useInView } from "framer-motion";

function Left({ _ref }) {
  const inView = useInView(_ref, { amount: 0.5, once: true });
  const variants = {
    hidden: { opacity: 0, x: "-100%", scale: 0, z: -100 },
    visible: { opacity: 1, x: 0, scale: 1, z: 0 },
  };

  return (
    <div className="col-span-1 h-full flex flex-col gap-4 mt-10">
      <motion.div
        variants={variants}
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-md font-semibold">Built out of frustration</h3>
        <h1 className="text-4xl font-bold">Meet the ahead app</h1>
      </motion.div>
      <LottieAnimation animationData={animationData} classnames={"h-36"} />
    </div>
  );
}

export default Left;
