import Image from "next/image";
import React from "react";
import Button from "../shared/Button/Button";
import Logo from "../../../public/logo.png";
function Navbar() {
  return (
    <nav className="w-full sticky top-0 left-0 z-50 bg-white">
      <div className="container h-full mx-auto grid grid-cols-6 items-center px-8 py-1">
        <Image src={Logo} className="col-span-1 h-10 w-10" alt="logo" />
        <ul className="h-full col-span-4 flex gap-6 justify-center items-center text-[14px] font-semibold">
          <li className="cursor-pointer">Emotions</li>
          <li className="cursor-pointer">Manifesto</li>
          <li className="cursor-pointer">Self-awareness test</li>
          <li className="cursor-pointer">Work With Us</li>
        </ul>
        <Button title="Download app" />
      </div>
    </nav>
  );
}

export default Navbar;
