import React from "react";
import { services } from "../../assets/HomeAssets";

const Services = () => {
  return (
    <div className="pb-12 md:pb-20 w-full">
      {/* heading */}
      <div className="text-center pb-20 max-w-[44rem] mx-auto relative">
        <h2 className="font-[700] text-[2rem] md:text-[2.5rem] leading-[1.3125] md:leading-[1.25] tracking-tighter mb-4 text-[#3f3f46] dark:text-[#d4d4d8]">
          Services <h3 className="text-[1.5rem] md:text-[2rem] inline">👨‍🔧</h3>
        </h2>
        <p className="text-[1.125rem] leading-[1.5] tracking-[-0.017em] text-[#71717a] dark:text-[#a1a1aa]">
          People ignore <span className="font-[600]">design</span> that ignores
          <span className="font-[600]"> people.</span>{" "}
          <em className="text-blue-500 text-sm dark:text-blue-400 italic">
            - Frank Chimero
          </em>
        </p>
      </div>
      <div className="px-4 sm:px-6 md:px-8 mx-auto w-full">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-14">
          {services.map((service, index) => {
            return (
              <div
                style={{ backgroundColor: service.color }}
                key={index}
                className="h-auto px-4 py-9 md:px-8 md:py-12 rounded-md hover:shadow cursor-pointer relative">
                <h1 className="text-2xl font-[600] text-[#3f3f46] dark:text-gray-900 mb-4">
                  {service.name}
                </h1>
                <p className="text-sm">{service.desc}</p>
                <div className="w-full flex justify-end px-[10%] items-center top-[-15%] left-0 absolute">
                  <div className="w-16 h-16 p-2 rounded-lg ring-1 ring-slate-900/10 shadow overflow-hidden bg-white">
                    <img src={service.icon} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
