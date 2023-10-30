"use client";
import { useRef } from "react";
import Slider from "./Slider";
import SliderHeading from "./SliderHeading";

function SlidingCards() {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="h-[70vh] max-h-[600px] w-full bg-white mt-10 rounded-3xl p-10 select-none"
    >
      <SliderHeading _ref={ref} />
      <Slider />
    </div>
  );
}

export default SlidingCards;
