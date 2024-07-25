import React, { useEffect } from "react";
import { logos } from "../../assets/HomeAssets";

const Logos = () => {
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
  return (
    <div className="flex cursor-grab scroller w-full">
      <div className="scroller-inner flex">
        {logos.map((logo, index) => (
          <img
            key={index}
            className="h-16 md:h-32 m-3 rounded max-w-none"
            src={logo.img}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Logos;
