import React from "react";

const Message = () => {
  return (
    <div className="pt-12 md:pt-20 max-w-[42rem] text-center">
      <div className="inline-flex relative">
        <svg
          className="absolute -z-10 top-[-0.5rem] left-[-1.5rem] fill-[#D1D5DB] dark:fill-[#d4d4d8]"
          width="40"
          height="49"
          viewBox="0 0 40 49"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"></path>
        </svg>
        <img
          className="rounded-full"
          width={48}
          height={48}
          src="https://media.licdn.com/dms/image/D4D03AQGYfizBcQGVXA/profile-displayphoto-shrink_200_200/0/1698137364469?e=2147483647&v=beta&t=zB5e_Iw7LH8sNakp3UNXZ5rgGICoU-wFixQ8KHfvqYo"
          alt="Profile picture of Chahat Kesharwani"
        />
      </div>
      <p className="text-[#111827] dark:text-[#d4d4d8] font-semibold text-[1.5rem] leading-[1.415] tracking-[-0.037em] mt-3">
        “Turning ideas into{" "}
        <em className="text-[#6b7280] dark:text-[#d4d4d8cc] italic">
          innovative digital experiences
        </em>{" "}
        with <br /> passion and creativity.”
      </p>
      <div className="text-[#374151] dark:text-[#d4d4d8] mt-3 font-medium text-[0.875rem] leading-[1.5715]">
        <span>Chahat Kesharwani</span>
        <span className="text-[#9ca3af]"> / </span>
        <a
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
          href="#">
          Full-Stack Developer
        </a>
      </div>
    </div>
  );
};

export default Message;
