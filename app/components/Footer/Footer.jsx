import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { aheadLogo, downloadImage } from "@/app/assets";

function Footer() {
  return (
    <footer className="w-full h-[50vh] max-h-[600px] p-10 mt-10 flex flex-col items-center">
      <hr className="border-t border-gray-400 mb-8 w-full" />
      <div className="w-3/5 h-4/5 flex flex-col items-center">
        <Image
          src={aheadLogo}
          className="h-12 w-12 aspect-square rounded-md"
          alt="logo"
        />
        <h5 className="text-xl font-semibold text-[#6946F0] mt-2 text-center">
          ahead
        </h5>

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

        <Image src={downloadImage} className="h-12 w-36" loading="lazy" />
        <div className="text-center text-gray-500 text-sm py-4">
          &copy; {new Date().getFullYear()} Ayush Ranjan Sinha
        </div>
      </div>
    </footer>
  );
}

export default Footer;
