import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WorkGallery = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller-inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  const images = [
    "/WorkGallery/webmark.png",
    "/WorkGallery/spotify.png",
    "/WorkGallery/food-del-2.png",
    "/WorkGallery/d4u.png",
    "/WorkGallery/blog-app.png",
    "/WorkGallery/food-del.png",
    "/WorkGallery/gw.png",
  ];
  const navigate = useNavigate();
  return (
    <div className="py-12 md:py-20">
      {/* heading */}
      <div className="text-center max-w-[44rem] ml-auto mr-auto relative">
        <h2 className="font-[700] text-[2rem] md:text-[2.5rem] leading-[1.3125] md:leading-[1.25] tracking-tighter text-[#3f3f46] dark:text-[#d4d4d8]">
          Work - <span className="bold tracking-normal">Gallery</span>
        </h2>
      </div>
      {/* works */}
      <div className="flex cursor-grab pt-12 md:pt-20 pb-16 md:pb-24 scroller w-full">
        <div className="scroller-inner flex">
          {images.map((src, index) => (
            <img
              key={index}
              className="flex-auto w-[60vw] max-w-[440px] mr-5 md:mr-8 rounded-2xl"
              src={src}
              alt=""
            />
          ))}
        </div>
      </div>
      {/* button */}
      <div className="text-center max-w-[30rem] mx-auto relative">
        <button
          onClick={() => navigate("/portfolio")}
          className="px-6 py-3 bg-[#27272a] hover:bg-black dark:bg-[#f4f4f5] dark:hover:bg-white text-[#e4e4e7] hover:text-white dark:text-[#18181b] dark:hover:text-black rounded-md font-[700]">
          Explore Recent Projects <span>-&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default WorkGallery;
