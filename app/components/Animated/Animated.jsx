"use client";
import Line from "./Line";
import Box from "./Box";
import { useRef } from "react";
import { Banner } from "..";

function Animated() {
  const ref = useRef(null);

  return (
    <Banner
      forwardedRef={ref}
      styles="bg-[#EDF8FE] flex flex-col items-center py-10"
      id="self-awareness"
    >
      <h3 className="textsm lg:text-md font-medium text-center mt-10">
        Let your friends, family, and co-workers (anonymously) rate your social
        skills.
      </h3>
      <h2 className="text-md lg:text-[40px] font-bold text-center mt-8">
        Ever wondered what others think of you?
      </h2>
      <Line />
      <div className="w-full px-10 flex items-center justify-center">
        <Box _ref={ref} />
      </div>
    </Banner>
  );
}

export default Animated;
