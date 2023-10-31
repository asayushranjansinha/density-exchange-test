"use client";
import { useRef } from "react";
import Slider from "./Slider";
import SliderHeading from "./SliderHeading";
import { Banner } from "..";

function SlidingCards() {
  const ref = useRef(null);
  return (
    <Banner
      forwardedRef={ref}
      styles="select-none mt-20 o"
    >
      <SliderHeading _ref={ref} />
      <Slider />
    </Banner>
  );
}

export default SlidingCards;
