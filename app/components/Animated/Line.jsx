import LottieAnimation from "../shared/LottieAnimation";
import animationData from "@/public/circle-wavy.json";

function Line() {
  return (
    <div className="w-3/5 mx-auto relative flex items-center mt-10 text-[12px] text-gray-600 font-medium tracking-tighter text-center">
      <LottieAnimation
        animationData={animationData}
        classnames={"h-10 w-10"}
        loop
      />
      <p className="absolute top-full -translate-x-[40%] ">
        Answer questions on your social skills.
      </p>

      <div className="w-full mx-auto h-0 border-2 border-dashed border-[#D78E4F]" />
      <LottieAnimation
        animationData={animationData}
        classnames={"h-10 w-10"}
        loop
      />
      <p className="absolute top-full right-0 translate-x-[40%]">
        Find out where you and others see things <br /> the same way - and where
        not!
      </p>
      <LottieAnimation
        animationData={animationData}
        classnames={"h-10 w-10 absolute top-0 right-1/2 translate-x-1/2"}
        loop
      />
      <p className="absolute top-full right-1/2 translate-x-1/2 text-center">
        Let others anonymously answer the same <br /> questions about yout.
      </p>
    </div>
  );
}

export default Line;
