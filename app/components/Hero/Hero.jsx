"use client";
import { Banner } from "..";
import Left from "./Left";
import Right from "./Right";

function Hero() {
  return (
    <Banner
      id="home"
      styles="bg-[#EEEAFF] mt-4 grid gap-10 grid-col-1 lg:grid-cols-2 overflow-hidden p-10"
    >
      <Left />
      <Right />
    </Banner>
  );
}

export default Hero;
