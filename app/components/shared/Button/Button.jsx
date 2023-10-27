import React from "react";

function Button({ classNames, title }) {
  return (
    <button
      className={`bg-black text-white px-6 py-4 rounded-full shadow-lg ${classNames} flex items-center justify-center`}
    >
      {title}
    </button>
  );
}

export default Button;
