import React from "react";
import "./logo.module.css";

const Logo = () => {
  const brand = "./images/bb-small.png";
  return (
    <div className="h-[64px] flex flex-col justify-center items-center overflow-hidden">
      {brand.length === 0 && (
        <h1 className="text-md text-white lg:text-lg font-extrabold">
          Blooming Brands
        </h1>
      )}
      {brand.length > 0 && (
        <img className="w-[250px] h-[60px] py-1" src={brand} alt="brand logo" />
      )}
    </div>
  );
};

export default Logo;
