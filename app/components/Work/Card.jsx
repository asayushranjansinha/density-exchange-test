import React from "react";

function Card({ title, body }) {
  return (
    <div className="flex flex-col justify-center h-36 w-60 bg-white mb-10 mx-auto rounded-2xl p-4">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-xs text-gray-600 font-medium opacity-90 mt-2 flex-shrink">{body}</p>
    </div>
  );
}

export default Card;
