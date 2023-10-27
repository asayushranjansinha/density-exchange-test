"use client";
import { listItems } from "@/constants";
import { useRef } from "react";
import Heading from "./Heading";
import ListCard from "./ListCard";

function List() {
  const ref = useRef(null);
  return (
    <section
      ref={ref}
      className="w-full h-[90vh] max-h-[600px] rounded-2xl p-10 mt-10"
    >
      <Heading _ref={ref} />
      <div className="h-[80%] w-full overflow-hidden overflow-y-scroll pl-16">
        <ul className="relative">
          <div className="border-r-2 border-[#6543EA] absolute h-full inset-y-0 left-0 translate-x-1/2"></div>
          {listItems.map((item) => (
            <ListCard item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default List;
