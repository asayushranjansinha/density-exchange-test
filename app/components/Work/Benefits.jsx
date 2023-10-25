"use client";
import Card from "./Card";
import { workFeatures } from "@/constants";
import { motion, useInView } from "framer-motion";

function Benefits({ _ref }) {
  const inView = useInView(_ref, { amount: 0.5, once: true });
  const slideVariants = {
    hidden: { opacity: 0.5, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      variants={slideVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="h-full col-span-1 flex flex-col gap-4 overflow-y-scroll scroll-smooth py-2"
    >
      {workFeatures.map((item) => (
        <Card title={item.title} body={item.body} key={item.id} />
      ))}
    </motion.div>
  );
}

export default Benefits;
