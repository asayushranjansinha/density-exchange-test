"use client";
import { Banner } from "..";
import Left from "./Left";
import Right from "./Right";

function Hero() {
  return (
    <Banner styles="h-[80vh] bg-[#EEEAFF] mt-2 grid grid-cols-2 p-10">
      <Left />
      <Right />
    </Banner>
  );
}

export default Hero;
