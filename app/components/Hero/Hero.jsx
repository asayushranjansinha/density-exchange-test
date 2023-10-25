import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

import downloadIcon from "@/public/download.png";

function Hero() {
  return (
    <section className="h-[90vh] w-full bg-[#EEEAFF] my-10 rounded-3xl grid grid-cols-2 p-10">
      <div className="col-span-1 flex flex-col justify-end gap-16">
        <div>
          <h5 className="text-2xl font-semibold mb-8">Ahead App</h5>
          <h1 className="text-7xl font-bold">
            Master your life by mastering emotions
          </h1>
        </div>
        <div className="flex gap-8">
          <Image src={downloadIcon} className="h-12 w-36" loading="lazy" />
          <div className="flex flex-col">
            <div className="flex gap-2 items-center text-[#FFCD2E]">
              {Array.from({ length: 5 }, (_, index) => (
                <p key={index}>
                  <AiFillStar />
                </p>
              ))}
            </div>
            <small className="text-sm">100+ AppStore reviews</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
