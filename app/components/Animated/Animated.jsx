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
      styles="h-[90vh] bg-[#EDF8FE] flex flex-col items-center"
    >
      <h3 className="text-md font-medium text-center mt-10">
        Let your friends, family, and co-workers (anonymously) rate your social
        skills.
      </h3>
      <h2 className="text-[40px] font-bold text-center mt-8">
        Ever wondered what others think of you?
      </h2>
      <Line />
      <Box _ref={ref} />
    </Banner>
  );
}

export default Animated;
