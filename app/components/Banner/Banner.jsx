import classNames from "classnames";
import React from "react";

function Banner({ styles, children, forwardedRef, ...props }) {
  const bannerClasses = classNames(
    "w-full max-h-[600px] rounded-2xl p-10 mt-10",
    styles
  );
  return (
    <div ref={forwardedRef} className={bannerClasses} {...props}>
      {children}
    </div>
  );
}

export default Banner;
