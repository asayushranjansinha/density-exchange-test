import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

import { downloadImage } from "@/app/assets";

function Left() {
  return (
    <div className="col-span-1 min-h-full flex items-center">
      <div className="w-full h-full lg:h-2/3">
        <h5 className="text-md lg:text-2xl font-semibold mb-4">Ahead App</h5>
        <h1 className="text-3xl lg:text-5xl font-bold mr-8 lg:mr-40">
          Master your life by mastering emotions
        </h1>
        <div className="mt-12 flex items-center gap-6">
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
