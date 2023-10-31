import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function ListCard({ item }) {
  const ref = useRef(null);

  const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  return (
    <li className="relative my-10 pr-10" ref={ref}>
      <motion.div
        initial={{ opacity: 0.9 }}
        animate={inView ? { opacity: 1 } : { opacity: 0.5 }}
        className="w-4 h-4 rounded-full bg-[#6543EA] absolute inset-y-0 left-0 -translate-x-[6px]"
      ></motion.div>
      <div className="w-full lg:w-3/5 ml-8 px-8">
        <motion.div
          initial={{ scale: 1 }}
          animate={inView ? { scale: 1.02 } : { scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <h4 className="text-md lg:text-xl font-medium mb-2">
            {item.heading}
          </h4>
          <p className="text-sm lg:text-lg font-[400] text-justify text-gray-800">{item.body}</p>
        </motion.div>
      </div>
    </li>
  );
}

export default ListCard;
