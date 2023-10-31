"use client";
import { useRef } from "react";
import Right from "./Right";
import Left from "./Left";
import { Banner } from "..";
function Work() {
  const ref = useRef(null);
  return (
    <Banner
      id="work"
      forwardedRef={ref}
      styles="bg-[#F3F0FE] rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-10 p-10"
    >
      <Left _ref={ref} />
      <Right _ref={ref} />
    </Banner>
  );
}

export default Work;
