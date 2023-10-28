import React from "react";
import Image from "next/image";
import classNames from "classnames";

function SliderCard({ data }) {
  const cardClasses = classNames(
    "h-48 bg-white p-6 rounded-2xl flex flex-col",
    {"bg-violet-100":data.id === 1},
    {"bg-pink-100":data.id === 2},
    {"bg-violet-900 text-white -rotate-12":data.id === 3},
    {"bg-cyan-100":data.id === 4},
    {"bg-amber-100	":data.id === 5},
  );

  return (
    <div className={cardClasses}>
      <Image
        src={data.image}
        alt={data.title}
        className="h-[28px] w-[28px] mb-2"
      />
      <h3 className="text-sm font-semibold my-1 ">{data.title}</h3>
      <p className="text-xs">{data.body}</p>
    </div>
  );
}

export default SliderCard;
