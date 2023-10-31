import Image from "next/image";

import { badgeOne, badgeThree, badgeTwo } from "@/app/assets";
function Line() {
  return (
    <div className="w-full h-[30vh] lg:w-3/5 mx-auto px-10 relative flex text-[12px] text-gray-600 font-medium tracking-tighter text-center">
      <div className="relative w-full mx-auto h-0 border-2 border-dashed border-[#D78E4F] mt-16">
        <Image
          src={badgeOne}
          alt="badge"
          className="h-10 w-10 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
        />

        <Image
          src={badgeTwo}
          alt="badge"
          className="h-10 w-10 absolute top-0 right-1/2 -translate-y-1/2 translate-x-1/2"
        />

        <Image
          src={badgeThree}
          alt="badge"
          className="h-10 w-10 absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"
        />
        <div className="w-full min-h-fit h-20 mt-8 grid grid-cols-3">
          <p className="col-span-1 h-full -translate-x-1/2 px-2">
            Answer questions on your social skills.
          </p>
          <p className="col-span-1 h-full px-2">
            Let others anonymously answer the same questions about you.
          </p>
          <p className="col-span-1 h-full translate-x-1/2 px-2 text-center">
            Find out where you and others see things the same way - and
            where not!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Line;
