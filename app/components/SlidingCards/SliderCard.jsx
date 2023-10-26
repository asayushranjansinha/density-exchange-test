import Image from "next/image";
import React from "react";

function SliderCard({ data }) {
  return (
    <div
      className={`h-44 p-6 flex flex-col rounded-2xl ${data.class} ${
        data.id === 2 ? "transform -rotate-12" : ""
      }`}
    >
      <Image
        src={data.image}
        alt={data.title}
        className="h-[28px] w-[28px] mb-2"
      />
      <h3 className="text-sm font-semibold my-2">{data.title}</h3>
      <p className="text-xs">{data.body}</p>
    </div>
  );
}

export default SliderCard;
