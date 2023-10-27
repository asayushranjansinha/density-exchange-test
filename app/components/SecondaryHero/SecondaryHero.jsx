"use client";
import animationData from "@/public/flower.json";
import LottieAnimation from "../shared/LottieAnimation";

import Left from "./Left";
import Right from "./Right";
import { useRef } from "react";

function SecondaryHero() {
  const ref = useRef(null);
  return (
    <section
      ref={ref}
      className="w-full h-[70vh] max-h-[600px] rounded-2xl bg-[#FFF6F1] grid grid-cols-2 p-10 mt-10 relative"
    >
      <Left _ref={ref} />
      <Right _ref={ref} />
      <div className="h-28 w-28 absolute top-0 right-1/4 -translate-y-1/2">
        <LottieAnimation
          animationData={animationData}
          loop={true}
          classnames={"h-full w-full"}
        />
      </div>
    </section>
  );
}

export default SecondaryHero;
