"use client";
import { motion } from "framer-motion";

function Featured() {
  return (
    <section className="h-[30vh] max-h-[300px] w-full bg-white mt-10 rounded-3xl grid grid-cols-3 p-10 items-center">
      <div className="col-span-1 self-start">
        <h3 className="text-3xl font-semibold">EQ beates IQ</h3>
      </div>
      <div className="col-span-2 grid grid-cols-2">
        <div className="col-span-1">
          <p className="w-4/5 mx-auto text-justify">
            People with high emotional intelligence (EQ) live more fulfilled
            lives. They tend to be happier and have healthier relationships.
          </p>
        </div>
        <div className="col-span-1">
          <p className="w-4/5 mx-auto text-justify">
            They are more successful in their pursuits and make for inspiring
            leaders. According to science, they earn $29K a year.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Featured;
