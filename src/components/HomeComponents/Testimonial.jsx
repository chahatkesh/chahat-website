import React from "react";
import { testimonials } from "../../assets/HomeAssets";

const Testimonial = () => {
  return (
    <div className="bg-violet-50 dark:bg-violet-950 w-full py-12 md:py-20 rounded-md">
      <div className="text-center max-w-[80%] ml-auto mr-auto relative ">
        <h2 className="font-[700] mb-4 text-[2rem] md:text-[2.5rem] leading-[1.3125] md:leading-[1.25] tracking-tighter text-[#3f3f46] dark:text-[#d4d4d8]">
          Testimonials{" "}
          <h3 className="text-[1.5rem] md:text-[2rem] inline">😍</h3>
        </h2>
        <p className="text-[1.125rem] leading-[1.5] tracking-[-0.017em] text-[#71717a] dark:text-[#cdcdd0]">
          Creating designs so impressive, they get{" "}
          <span className="font-[600]">praise</span> from everyone.
        </p>
      </div>
      <div className="pt-6 md:pt-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 px-3 md:px-20 gap-y-4 gap-x-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-4 md:p-6 bg-white dark:invert hover:shadow rounded-xl">
              <img
                className="h-9 mb-4 grayscale opacity-95"
                src={testimonial.logo}
                alt=""
              />
              <p className="mb-6 text-[#37463f] text-justify w-[90%] text-[14px]">
                {testimonial.desc}
              </p>
              <hr className="my-3 border-[#3f3f46cc] opacity-50" />
              <div className="flex items-center">
                <img
                  className="h-12 mr-3 rounded-full"
                  src={testimonial.img}
                  alt=""
                />
                <div className="text-[15px]">
                  <h3 className="font-[600]">{testimonial.name}</h3>
                  <p className="text-[#807d7d]">
                    {testimonial.designation}{" "}
                    <span className="font-bold">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
