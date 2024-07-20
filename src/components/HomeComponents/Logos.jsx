import React from "react";

const Logos = () => {
  const images = [
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
    "/src/assets/Images/121.png",
  ];
  return (
    <div>
      <div className="flex overflow-hidden whitespace-nowrap relative w-full">
        <div className="flex w-[200%] cursor-grab wrap-l">
          <div className="scroll-content-l">
            {images.map((src, index) => (
              <img
                key={index}
                className="h-16 md:h-32 mr-5 rounded max-w-none"
                src={src}
                alt=""
              />
            ))}
          </div>
          <div className="scroll-content-l">
            {images.map((src, index) => (
              <img
                key={index}
                className="h-16 md:h-32 mr-5 rounded max-w-none"
                src={src}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
