import { twMerge } from "tailwind-merge";
import Image from "next/image";
import React from "react";

function SliderCard({ title, body, image, classNames }) {
  return (
    <div className={twMerge(classNames, "px-4 py-2 flex flex-col rounded-md")}>
      <Image src={image} alt={title} className="h-10 aspect-square" />
      <h3 className="text-md font-bold mt-4">{title}</h3>
      <p className="text-sm">{body}</p>
    </div>
  );
}

export default SliderCard;
