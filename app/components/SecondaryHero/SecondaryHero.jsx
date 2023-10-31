"use client";
import { useRef } from "react";

import Image from "next/image";
import Left from "./Left";
import Right from "./Right";
import { flowerImage } from "@/app/assets";
import { Banner } from "..";

function SecondaryHero() {
  const ref = useRef(null);
  return (
    <Banner
      id="manifesto"
      styles="bg-[#FFF6F1] grid grid-cols-1 lg:grid-cols-2 relative p-0"
      forwardedRef={ref}
    >
      <Left _ref={ref} />
      <Right _ref={ref} />
      <div className="h-16 w-16 absolute top-0 right-1/3 -translate-y-1/2">
        <Image
          src={flowerImage}
          alt="flowerImage"
          className="h-full w-full object-contain"
        />
      </div>
    </Banner>
  );
}

export default SecondaryHero;
