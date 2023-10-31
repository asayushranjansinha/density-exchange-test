import { blueGhost } from "@/app/assets";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function Left({ _ref }) {
  const inView = useInView(_ref, { amount: 0.5, once: true });
  const variant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };
  return (
    <div className="h-full col-span-1 lg:col-span-2 flex flex-col flex-grow-0">
      <motion.h1
        variants={variant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-3xl lg:text-6xl font-medium my-2 lg:my-8"
      >
        Work with us
      </motion.h1>
      <div className="bg-white h-fit w-full lg:w-3/5 rounded-2xl drop-shadow-2xl">
        <Image src={blueGhost} alt="blueGhost" className={"h-8 w-8 m-4"} />
        <div className="px-4 py-2 ">
          <h3 className="text-md lg:text-xl font-medium mb-2">About</h3>
          <p className="text-gray-700 text-sm lg:text-xl leading-6 lg:leading-8">
            At ahead our goal is to make self-improvement fun and lasting. We
            know there's a way how to make it work. And that's what aHead is all
            about!
          </p>
        </div>
        <div className="mt-8 rounded-2xl bg-[#FFF7F0] px-4 py-2">
          <h3 className="text-md lg:text-xl font-medium mb-2">Product</h3>
          <p className="text-gray-700 text-sm lg:text-xl leading-6 lg:leading-8">
            Sure, you could spend ages reading books or sitting on how to become
            a better spouse, parent, or manager - like we did...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Left;
