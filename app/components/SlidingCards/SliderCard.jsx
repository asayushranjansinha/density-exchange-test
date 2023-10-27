import React from "react";
import Image from "next/image";
import classNames from "classnames";

function SliderCard({ data }) {
  const cardClasses = classNames(
    data.class,
    "h-48",
    "w-72",
    "p-6",
    "flex",
    "flex-col",
    "rounded-2xl",
    { "-rotate-12": data.id === 3 }
  );

  return (
    <div className={cardClasses}>
      <Image src={data.image} alt={data.title} className="h-[28px] w-[28px] mb-2" />
      <h3 className="text-sm font-semibold my-2">{data.title}</h3>
      <p className="text-xs">{data.body}</p>
    </div>
  );
}

export default SliderCard;
