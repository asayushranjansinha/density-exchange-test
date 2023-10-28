import Image from "next/image";
import badge1 from "@/public/badge1.svg";
import badge2 from "@/public/badge2.svg";
import badge3 from "@/public/badge3.svg";
function Line() {
  return (
    <div className="w-3/5 mx-auto relative flex items-center mt-10 text-[12px] text-gray-600 font-medium tracking-tighter text-center">
      <Image src={badge1} alt="badge" className="h-10 w-10" />
      <p className="absolute top-full -translate-x-[40%] ">
        Answer questions on your social skills.
      </p>

      <Image
        src={badge2}
        alt="badge"
        className="h-10 w-10 absolute top-0 right-1/2 translate-x-1/2"
      />
      <p className="absolute top-full right-1/2 translate-x-1/2 text-center">
        Let others anonymously answer the same <br /> questions about yout.
      </p>

      <div className="w-full mx-auto h-0 border-2 border-dashed border-[#D78E4F]" />
      <Image src={badge3} alt="badge" className="h-10 w-10" />
      <p className="absolute top-full right-0 translate-x-[40%]">
        Find out where you and others see things <br /> the same way - and where
        not!
      </p>
    </div>
  );
}

export default Line;
