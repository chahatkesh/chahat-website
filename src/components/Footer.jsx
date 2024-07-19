import React from "react";

const Footer = () => {
  return (
    <div className="mb-8 md:mb-12 bg-gray-50 dark:bg-[#27272a] text-[#3f3f46] dark:text-[#d4d4d8] w-full rounded-lg pl-4 pr-4 sm:pl-6 sm:pr-6">
      <div className="pt-8 pb-8 md:pt-12 md:pb-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] md:text-[12px] border-t-[0.5px] border-[#3f3f4644] dark:border-[#d4d4d844] pt-4">
          <h3>© 2024 Chahat Kesharwani - All Rights Reserved.</h3>
          <h3>Crafted with ❤️ by Chahat Kesharwani</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
