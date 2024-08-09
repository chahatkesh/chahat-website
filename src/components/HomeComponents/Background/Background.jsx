import React from "react";
import { hero_asset } from "../../../assets/HomeAssets";

const Background = () => {
  return (
    <>
      <div className="pointer-events-none absolute transform translate-x-[-50%] top-0 left-[50%] -z-10">
        <img
          className="max-w-none"
          src={hero_asset.stripes}
          width={768}
          height={432}
          alt=""
        />
      </div>
    </>
  );
};

export default Background;
