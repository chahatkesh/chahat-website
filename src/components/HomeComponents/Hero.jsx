import React from "react";
import { hero_asset } from "../../assets/HomeAssets";
import Background from "./Background/Background";
import Circle1 from "./Background/Circle1";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="pb-8 md:pb-16 w-full">
      <section className="relative">
        <Background />
        <Circle1 />
      </section>
      <div className="mb-6 mt-20 md:mt-28 border-in-header">
        <div className="flex justify-center ml-[-2px] mr-[-2px]">
          <img
            className="border-2 border-opacity-0 border-[#f9fafb] dark:border-[#18181b] rounded-full box-content"
            width={32}
            src={hero_asset.icon01}
            alt=""
          />
          <img
            className="border-2 border-opacity-1 border-[#f9fafb] dark:border-[#18181b] rounded-full box-content space-x-reverse ml-[-12px]"
            width={32}
            src={hero_asset.icon02}
            alt=""
          />
          <img
            className="border-2 border-opacity-1 border-[#f9fafb] dark:border-[#18181b] rounded-full box-content space-x-reverse ml-[-12px] "
            width={32}
            src={hero_asset.icon03}
            alt=""
          />
          <img
            className="border-2 border-opacity-1 border-[#f9fafb] dark:border-[#18181b] rounded-full box-content space-x-reverse ml-[-12px] "
            width={32}
            src={hero_asset.icon04}
            alt=""
          />
          <img
            className="border-2 border-opacity-1 border-[#f9fafb] dark:border-[#18181b] rounded-full box-content space-x-reverse ml-[-12px] "
            width={32}
            src={hero_asset.icon05}
            alt=""
          />
          <img
            className="border-2 border-opacity-1 border-[#f9fafb] dark:border-[#18181b] rounded-full box-content space-x-reverse ml-[-12px]"
            width={32}
            src={hero_asset.icon06}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-y-8">
        <div className="w-[90%] md:w-[50%] text-justify md:text-left">
          <h1 className="font-[700] text-[2.75rem] md:text-[4rem] leading-[1.1] tracking-tighter mb-8 text-[#3f3f46] dark:text-[#d4d4d8]">
            Crafting Digital Experiences with{" "}
            <span className="bold tracking-normal">Design</span> and{" "}
            <span className="bold tracking-normal">Code.</span>
          </h1>
          <h3 className="md:max-w-[75%] text-[1.125rem] leading-[1.5] tracking-[-0.017em] text-[#3f3f46cc] dark:text-[#a1a1aa] text-justify">
            Hi, I&apos;m <span className="font-bold">Chahat!</span> With more
            than 2 years of experience, I&apos;m ready to be a part of your
            wonderful project!
          </h3>
          <div className="pt-4 pb-12 flex gap-4">
            <a
              href="https://wa.me/9170602005?text=Hi%20Chahat"
              className="px-6 py-3 bg-[#27272a] hover:bg-black dark:bg-[#f4f4f5] dark:hover:bg-white text-[#e4e4e7] hover:text-white dark:text-[#18181b] dark:hover:text-black rounded-md font-[700]">
              Text me
            </a>
            <button
              onClick={() => navigate("/portfolio")}
              className="px-6 py-3 dark:bg-[#27272a] dark:hover:bg-black bg-[#f4f4f5] hover:shadow hover:bg-white dark:text-[#e4e4e7] dark:hover:text-white text-[#18181b] hover:text-black rounded-md font-[700]">
              <p className="inline-flex pr-2">My Works</p>{" "}
              <svg
                className="inline-flex fill-black w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-12 w-full justify-center items-center max-w-fit">
            <div className="flex-col text-center">
              <h1 className="font-[700] text-[1.75rem] md:text-[2.5rem] leading-[1.1] md:leading-[1.25] tracking-tighter text-[#3f3f46] dark:text-[#d4d4d8]">
                40+
              </h1>
              <p className="text-sm leading-[1.5] tracking-[-0.017em] text-[#71717a] dark:text-[#a1a1aa]">
                Projects Done
              </p>
            </div>
            <div className="flex-col text-center">
              <h1 className="font-[700] text-[1.75rem] md:text-[2.5rem] leading-[1.1] md:leading-[1.25] tracking-tighter text-[#3f3f46] dark:text-[#d4d4d8]">
                100%
              </h1>
              <p className="text-sm leading-[1.5] tracking-[-0.017em] text-[#71717a] dark:text-[#a1a1aa]">
                Happy Client
              </p>
            </div>
            <div className="flex-col text-center">
              <h1 className="font-[700] text-[1.75rem] md:text-[2.5rem] leading-[1.1] md:leading-[1.25] tracking-tighter text-[#3f3f46] dark:text-[#d4d4d8]">
                12+
              </h1>
              <p className="text-sm leading-[1.5] tracking-[-0.017em] text-[#71717a] dark:text-[#a1a1aa]">
                Certifications
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-[90%] md:w-[35vw]"
            src={hero_asset.hero_img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
