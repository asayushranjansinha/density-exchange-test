"use client";
import Lottie from "lottie-react";


function LottieAnimation({ animationData, classnames, loop }) {
  return (
    <Lottie
      animationData={animationData}
      loop={loop ? true : false}
      className={`aspect-square ${classnames}`}
    />
  );
}

export default LottieAnimation;
