import React from "react";

function Container({ children, className = "", noPaddingY = false, noBackground = false }) {
  return (
    <div
      className={`mx-auto px-3 max-w-full sm:max-w-[540px] md:max-w-[820px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]
        ${noBackground ? "bg-none" : "bg-white"} 
        ${noPaddingY ? "py-0" : "py-4"} 
        rounded-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
