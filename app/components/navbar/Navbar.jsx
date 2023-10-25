import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import Logo from '../../../public/logo.png'
function Navbar() {
  return (
    <nav className="w-full h-20 border-2 sticky top-0 left-0 z-50 bg-white">
      <div className="container h-full mx-auto grid grid-cols-6 items-center">
        <Image src={Logo} className="col-span-1 h-10 w-10"/>
        <ul className="h-full col-span-4 flex justify-evenly items-center">
          <li>Emotions</li>
          <li>Manifesto</li>
          <li>Self-awareness test</li>
          <li>Work With Us</li>
        </ul>
        <Button className='col-span-1'/>
      </div>
    </nav>
  );
}

export default Navbar;
