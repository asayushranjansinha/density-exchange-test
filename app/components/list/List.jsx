"use client";
import { listItems } from "@/constants";
import { useRef } from "react";
import Heading from "./Heading";
import ListCard from "./ListCard";
import { Banner } from "..";

function List() {
  const ref = useRef(null);
  return (
    <Banner forwardedRef={ref} styles="h-[80vh] overflow-hidden">
      <Heading _ref={ref} />
      <div className="h-4/5 w-full overflow-hidden overflow-y-scroll pl-4 lg:pl-16">
        <ul className="relative pb-10">
          <div className="border-r-2 border-[#6543EA] absolute h-full inset-y-0 left-0 translate-x-1/2"></div>
          {listItems.map((item) => (
            <ListCard item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </Banner>
  );
}

export default List;
