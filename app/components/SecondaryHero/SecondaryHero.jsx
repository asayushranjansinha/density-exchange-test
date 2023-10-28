"use client";
import { useRef } from "react";

import flower from "@/public/flower.png";
import Image from "next/image";
import Left from "./Left";
import Right from "./Right";

function SecondaryHero() {
  const ref = useRef(null);
  return (
    <section
      ref={ref}
      className="w-full h-[70vh] max-h-[600px] rounded-2xl bg-[#FFF6F1] grid grid-cols-2 p-10 mt-10 relative"
    >
      <Left _ref={ref} />
      <Right _ref={ref} />
      <div className="h-16 w-16 absolute top-0 right-1/3 -translate-y-1/2">
        <Image
          src={flower}
          alt="flower"
          className="h-full w-full object-contain"
        />
      </div>
    </section>
  );
}

export default SecondaryHero;
