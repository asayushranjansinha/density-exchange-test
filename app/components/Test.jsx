"use client";

import { situations } from "@/constants";
import classNames from "classnames";
import { motion } from "framer-motion";

function test() {
  return (
    <div className="flex flex-wrap justify-center">
    {situations.map((item) => (
      <div key={item.id} className={classNames(item.class, "p-4 m-4")}>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-sm">{item.body}</p>
      </div>
    ))}
  </div>
  );
}

export default test;
