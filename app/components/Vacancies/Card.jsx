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
      className={`w-full bg-[#FFFBED] rounded-xl p-4 transition-all ${
        isHovered ? "h-60" : "h-48"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="text-xl font-bold">{data.title}</h3>
      <ul className="list-disc list-inside text-left mt-4">
        {data.details.map((detail, index) => (
          <li key={index} className="text-md font-[400] text-gray-800 mb-2 flex items-start">
            <span className="mr-2">&#8226;</span>
            <span className="flex-col">{detail}</span>
          </li>
        ))}
      </ul>
      {isHovered && (
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Button title="See details" styles="font-[500] py-2 lg:py-4 h-10 lg:h-12" />
        </motion.div>
      )}
    </div>
  );
}

export default Card;
