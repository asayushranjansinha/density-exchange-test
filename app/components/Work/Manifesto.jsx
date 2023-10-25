import animationData from "@/public/owl.json";

import About from "./About";
import Product from "./Product";
import LottieAnimation from "./LottieAnimation";
function Manifesto() {
  return (
    <div className="col-span-2 w-[60%] bg-white rounded-2xl mb-20">
      <LottieAnimation classnames={"h-14 mx-4"} animationData={animationData} />
      <About />
      <Product />
    </div>
  );
}

export default Manifesto;
