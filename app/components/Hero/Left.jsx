import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

import { downloadImage } from "@/app/assets";

function Left() {
  return (
    <div className="col-span-1 h-full flex items-center">
      <div className="w-full h-2/3 relative">
        <h5 className="text-2xl font-semibold mb-4">Ahead App</h5>
        <h1 className="text-5xl font-bold">
          Master your life <br /> by mastering <br /> emotions
        </h1>
        <div className="absolute bottom-0 left-0 flex items-center gap-6">
          <Image src={downloadImage} className="h-12 w-36" loading="lazy" />
          <div className="flex flex-col">
            <div className="flex gap-1 items-center text-[#FFCD2E]">
              {Array.from({ length: 5 }, (_, index) => (
                <p key={index}>
                  <AiFillStar />
                </p>
              ))}
            </div>
            <small className="text-[11px]">100+ AppStore reviews</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
