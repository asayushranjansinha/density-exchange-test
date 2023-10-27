"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../shared/Button/Button";

function Card({ data }) {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className={`w-72 bg-[#FFFBED] rounded-xl p-4 transition-all ${
        isHovered ? "h-60" : "h-48"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="text-xl font-bold">{data.title}</h3>
      <ul className="list-disc list-inside text-left mt-4">
        {data.details.map((detail, index) => (
          <li key={index} className="text-sm mb-2">
            {detail}
          </li>
        ))}
      </ul>
      {isHovered && (
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Button title="See details" classNames={"h-10 mt-8"} />
        </motion.div>
      )}
    </div>
  );
}

export default Card;
