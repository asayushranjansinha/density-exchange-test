import React from "react";

function Button({ styles, title }) {
  return (
    <button
      className={`bg-black text-white px-6 py-4 rounded-full shadow-lg flex items-center justify-center ${styles}`}
    >
      {title}
    </button>
  );
}

export default Button;
