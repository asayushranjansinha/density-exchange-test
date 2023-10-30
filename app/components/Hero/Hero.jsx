"use client";
import Left from "./Left";
import Right from "./Right";
function Hero() {
  return (
    <section className="h-[80vh] max-h-[600px] w-full bg-[#EEEAFF] mt-2 rounded-3xl grid grid-cols-2 p-10">
      <Left />
      <Right />
    </section>
  );
}

export default Hero;
