import React from "react";

function Card({ title, body }) {
  return (
    <div className="w-72 h-36 bg-white rounded-2xl px-8 py-4">
      <h3 className="text-md font-semibold">{title}</h3>
      <p className="text-xs text-gray-700 mt-2">{body}</p>
    </div>
  );
}

export default Card;
