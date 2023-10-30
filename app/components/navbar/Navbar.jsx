import Image from "next/image";

import Button from "../shared/Button/Button";
import { aheadLogo } from "@/app/assets";

function Navbar() {
  return (
    <nav className="w-full sticky top-0 left-0 z-50 bg-white">
      <div className="container h-full mx-auto flex justify-between items-center px-10 py-1">
        <Image
          src={aheadLogo}
          alt="ahead logo"
          className="h-12 w-12 aspect-square rounded-md ml-8"
        />
        <ul className="h-full flex gap-6 justify-center items-center text-[14px] font-normal">
          <li className="cursor-pointer">Emotions</li>
          <li className="cursor-pointer">Manifesto</li>
          <li className="cursor-pointer">Self-awareness test</li>
          <li className="cursor-pointer">Work With Us</li>
        </ul>
        <Button title="Download app" classNames="font-semibold mr-8" />
      </div>
    </nav>
  );
}

export default Navbar;
