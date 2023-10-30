"use client";
import { useRef } from "react";
import Right from "./Right";
import Left from "./Left";
function Work() {
  const ref = useRef(null);
  return (
    <section
      ref={ref}
      className="h-[90vh] min-h-fit w-full bg-[#F3F0FE] rounded-2xl grid grid-cols-3 gap-10 p-10"
    >
      <Left _ref={ref} />
      <Right _ref={ref} />
    </section>
  );
}

export default Work;
