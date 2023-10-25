"use client";
import { useRef } from "react";
import Benefits from "./Benefits";
import Heading from "./Heading";
import Manifesto from "./Manifesto";

function Work() {
  const ref = useRef(null);
  return (
    <section ref={ref} className="h-screen w-full bg-[#F3F0FE] rounded-2xl">
      <Heading />
      <div className="w-full h-[70%] grid grid-cols-3 gap-10 px-10 overflow-y-hidden">
        <Manifesto />
        <Benefits _ref={ref} />
      </div>
    </section>
  );
}

export default Work;
