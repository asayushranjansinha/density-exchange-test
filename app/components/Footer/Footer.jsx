import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import Logo from "../../../public/ahead.svg";
import downloadIcon from "@/public/download.png";

import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full h-[50vh] max-h-[600px] p-10 mt-10 flex flex-col items-center">
      <hr className="border-t border-gray-400 mb-8 w-full" />
      <div className="w-3/5 h-4/5 flex flex-col items-center">
        <Image src={Logo} className="col-span-1 h-10 w-10" alt="logo" />
        <h5 className="text-xl font-semibold text-[#6946F0] mt-2 text-center">ahead</h5>

        <div className="flex gap-4 my-8">
          <div className="flex gap-2 items-center">
            <i className="w-8 h-8 p-2 bg-[#9EEFD6] rounded-full flex items-center justify-center">
              <IoMdMail size={20} />
            </i>
            <address className="text-[12px] text-gray-600">
              AugustraBe 27,10110 Berlin
            </address>
          </div>
          <div className="flex gap-2 items-center">
            <i className="w-8 h-8 p-2 bg-[#9EEFD6] rounded-full flex items-center justify-center">
              <MdLocationPin size={20} />
            </i>
            <p className="text-[12px] text-gray-600">hi@ahead-app.com</p>
          </div>
        </div>

        <Image src={downloadIcon} className="h-12 w-36" loading="lazy" />
        <div className="text-center text-gray-500 text-sm py-4">
          &copy; {new Date().getFullYear()} ahead
        </div>
      </div>
    </footer>
  );
}

export default Footer;
