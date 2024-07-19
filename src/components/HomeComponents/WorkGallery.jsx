import React from "react";
import { useNavigate } from "react-router-dom";

const WorkGallery = () => {
  const images = [
    "/src/assets/Images/123.png",
    "/src/assets/Images/123.png",
    "/src/assets/Images/123.png",
    "/src/assets/Images/123.png",
  ];
  const navigate = useNavigate();
  return (
    <div className="pt-12 pb-12 md:pt-20 md:pb-20">
      {/* heading */}
      <div className="text-center max-w-[44rem] ml-auto mr-auto relative">
        <h2 className="font-[700] text-[2rem] md:text-[2.5rem] leading-[1.3125] md:leading-[1.25] tracking-tighter text-[#3f3f46] dark:text-[#d4d4d8]">
          Work - <span className="bold tracking-normal">Gallery</span>
        </h2>
      </div>
      {/* design */}
      <div className="flex overflow-hidden whitespace-nowrap relative w-full pt-12 ">
        <div className="flex w-[200%] cursor-grab wrap-l">
          <div className="scroll-content-l">
            {images.map((src, index) => (
              <img
                key={index}
                className="flex-auto w-[60vw] max-w-[350px] mr-5 rounded-2xl"
                src={src}
                alt=""
              />
            ))}
          </div>
          <div className="scroll-content-l">
            {images.map((src, index) => (
              <img
                key={index}
                className="flex-auto w-[60vw] max-w-[350px] mr-5 rounded-2xl"
                src={src}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
      {/* devlopment */}
      <div className="flex overflow-hidden whitespace-nowrap relative w-full pt-6 md:pt-7 pb-12">
        <div className="flex w-[200%] cursor-grab wrap-r">
          <div className="scroll-content-r">
            {images.map((src, index) => (
              <img
                key={index}
                className="flex-auto w-[60vw] max-w-[350px] mr-5 rounded-2xl"
                src={src}
                alt=""
              />
            ))}
          </div>
          <div className="scroll-content-r">
            {images.map((src, index) => (
              <img
                key={index}
                className="flex-auto w-[60vw] max-w-[350px] mr-5 rounded-2xl"
                src={src}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center max-w-[30rem] ml-auto mr-auto relative">
        <button
          onClick={() => navigate("/portfolio")}
          className="px-6 py-3 bg-[#27272a] hover:bg-black dark:bg-[#f4f4f5] dark:hover:bg-white text-[#e4e4e7] hover:text-white dark:text-[#18181b] dark:hover:text-black rounded-md font-[700]">
          Explore My Portfolio <span>-&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default WorkGallery;
