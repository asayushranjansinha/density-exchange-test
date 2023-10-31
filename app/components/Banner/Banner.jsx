import classNames from "classnames";
import React from "react";

function Banner({ styles, children, forwardedRef, ...props }) {
  return (
    <div
      ref={forwardedRef}
      className={`${styles} w-full min-h-fit lg:max-h-[600px] rounded-2xl mt-10`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Banner;
