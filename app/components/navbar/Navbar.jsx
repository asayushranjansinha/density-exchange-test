"use client";
import Image from "next/image";
import Link from "next/link";

import Button from "../shared/Button/Button";
import { aheadLogo } from "@/app/assets";

function Navbar() {
  return (
    <nav className="w-full sticky top-0 left-0 z-50 bg-white">
      <div className="container h-full mx-auto flex justify-between items-center lg:px-10 py-1">
        <Image
          src={aheadLogo}
          alt="ahead logo"
          className="h-8 lg:h-12 w-8 lg:w-12 aspect-square rounded-md ml-8"
        />
        <ul className="hidden h-full lg:flex gap-6 justify-center items-center text-[14px] font-normal text-gray-600">
          <li className="cursor-pointer">
            <Link href="#home">Emotions</Link>
          </li>
          <li className="cursor-pointer">
            {" "}
            <Link href="#manifesto">Manifesto</Link>
          </li>
          <li className="cursor-pointer">
            {" "}
            <Link href="#self-awareness">Self-awareness test</Link>
          </li>
          <li className="cursor-pointer">
            {" "}
            <Link href="#work">Work</Link>
          </li>
        </ul>
        <Button
          title="Download app"
          styles="font-[500] mr-8 py-2 lg:py-4 h-10 lg:h-12"
        />
      </div>
    </nav>
  );
}

export default Navbar;
