import React from "react";

function Card({ data }) {
  return (
    <div className="col-span-1 h-44 bg-[#FFFBED] rounded-xl p-4">
      <h3 className="text-xl font-bold">{data.title}</h3>
      <ul className="list-disc list-inside text-left mt-4">
        {data.details.map((detail, index) => (
          <li key={index} className="text-sm mb-2">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
