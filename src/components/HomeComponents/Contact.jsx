import React from "react";

const LocationIcon = () => (
  <svg
    className="w-3 mr-2 fill-[#3f3f46] dark:fill-[#d4d4d8]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512">
    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    className="w-3 mr-2 fill-[#3f3f46] dark:fill-[#d4d4d8]"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
  </svg>
);

const Contact = () => {
  return (
    <div className="py-12 md:py-20 md:pl-12 grid grid-cols-1 gap-y-12 md:grid-cols-2 w-full">
      <div className="text-center md:text-left relative">
        <h2 className="font-[700] text-[2rem] md:text-[2.5rem] leading-[1.3125] md:leading-[1.25] tracking-tighter mb-4 text-[#3f3f46] dark:text-[#d4d4d8]">
          Get in <span className="bold tracking-normal">Touch</span>
        </h2>
        <p className="text-lg leading-snug tracking-tight text-gray-800 dark:text-gray-400 max-w-[80%] mb-6 hidden md:block">
          If you&apos;re a <span className="font-semibold">startup</span>{" "}
          looking for a designer with a broad skill set from concept and
          strategy to design, get in touch.
        </p>
        <div className="flex justify-center md:justify-start items-center text-lg leading-snug tracking-tight text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 cursor-pointer mb-2 hover:text-gray-800">
          <LocationIcon />
          <h3>Remotely from India</h3>
        </div>
        <div className="flex justify-center md:justify-start items-center text-lg leading-snug tracking-tight text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 cursor-pointer hover:text-gray-800">
          <EmailIcon />
          <h3>chahat.create@gmail.com</h3>
        </div>
      </div>
      <div className="relative">
        <iframe
          className="w-full bg-gray-50 dark:bg-[#27272a] h-[60vh] md:h-[550px] rounded-lg relative"
          src="https://links.collect.chat/669a8ad83e99425e992de591"
        />
        <script
          async
          type="text/javascript"
          src="https://collectcdn.com/embed.js"></script>
        <div className="absolute bottom-[-1px] left-0 w-full h-8 bg-gray-50 dark:bg-[#27272a] rounded-md"></div>
      </div>
    </div>
  );
};

export default Contact;
