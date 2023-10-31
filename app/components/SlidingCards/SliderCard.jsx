import React from "react";
import Image from "next/image";
import classNames from "classnames";

function SliderCard({ data }) {
  let style = {
    backgroundColor: "#ffc0cb", // Default background color
  };

  switch (data.id) {
    case 1:
      style.backgroundColor = "#D8F2FF";
      break;
    case 2:
      style.backgroundColor = "#EEEAFF";
      break;
    case 3:
      style.backgroundColor = "#6341EF";
      style.transform = "rotate(-12deg)";
      style.color = "#fff";
      break;
    case 4:
      style.backgroundColor = "#FEEED5";
      break;
    case 5:
      style.backgroundColor = "#FFC7EA";
      break;
    default:
      break;
  }
  return (
    <div
      className={`h-52 lg:h-48 bg-white p-6 rounded-2xl flex flex-col`}
      style={style}
    >
      <Image
        src={data.image}
        alt={data.title}
        className="h-[28px] w-[28px] mb-2"
      />
      <h3 className="text-sm font-semibold my-1">{data.title}</h3>
      <p
        className="text-xs font-[500]"
        style={{ color: data.id === 3 ? "#fff" : "#666" }}
      >
        {data.body}
      </p>
    </div>
  );
}

export default SliderCard;
