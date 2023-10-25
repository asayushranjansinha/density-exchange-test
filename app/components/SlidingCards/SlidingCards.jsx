"use client";

import { useRef } from "react";
import Slider from "./Slider";
import SliderHeading from "./SliderHeading";

function SlidingCards() {
  const ref = useRef(null);
  return (
    <div ref={ref} className="w-full h-[45vh] my-10 px-10 py-4 gap-10">
      <SliderHeading  _ref={ref} />
      <Slider />
    </div>
  );
}

export default SlidingCards;
