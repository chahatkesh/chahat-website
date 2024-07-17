import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [menu, setMenu] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setMenu("home");
    } else if (path.startsWith("/portfolio")) {
      setMenu("portfolio");
    } else if (path.startsWith("/blog")) {
      setMenu("blog");
    } else if (path.startsWith("/booknotes")) {
      setMenu("booknotes");
    } else if (path.startsWith("/resources")) {
      setMenu("resources");
    } else if (path.startsWith("/about")) {
      setMenu("about");
    } else if (path.startsWith("/now")) {
      setMenu("now");
    }
  }, [location.pathname]);

  return (
    <div className="bg-gray-50 dark:bg-[#27272a] text-[#3f3f46cc] dark:text-[#d4d4d8cc] w-[90%] rounded-md top-6 pl-4 pr-4 sm:pl-6 sm:pr-6 fixed">
      <div className="pt-2 pb-2 md:pt-3 md:pb-3 flex justify-between items-center">
        <div className="flex gap-2 text-sm text-[#3f3f46] dark:invert">
          <div className="bg-[#ebffea] pl-3 pr-3 pt-1 pb-1 rounded-full border border-[#d9ffd3] inline-flex items-center cursor-pointer hover:bg-[#d1ffe0]">
            <div className="flex items-center justify-center w-4 h-4 bg-[#d1ffe0] rounded-full mr-2 animate-pulse">
              <div className="w-2 h-2 bg-[#0ab313] rounded-full"></div>
            </div>
            Available
          </div>
          <div className="bg-[#fffcef] pl-3 pr-3 pt-1 pb-1 rounded-full border border-[#fff6d3] inline-flex items-center cursor-pointer hover:bg-[#fffcd9]">
            <svg
              className="w-3.5 mr-2 fill-[#625833]"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
            </svg>
            <span className="hidden lg:block">chahat.create@gmail.com</span>
            <span className="lg:hidden">Email</span>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <nav className="hidden lg:flex">
            <ul className="flex gap-2">
              <li
                onClick={() => {
                  navigate("/");
                  setMenu("home");
                }}
                className="pt-0.5 pb-0.5 pl-3 pr-3 rounded cursor-pointer inline-flex items-center">
                <svg
                  className={
                    menu === "home"
                      ? "w-[18px] fill-[#3f3f46] dark:fill-[#d4d4d8]"
                      : "w-[18px] fill-[#3f3f4688] dark:fill-[#d4d4d888]"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512">
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
              </li>
              <li
                onClick={() => {
                  navigate("/portfolio");
                  setMenu("portfolio");
                }}
                className={
                  menu === "portfolio"
                    ? "pt-0.5 pb-0.5 pl-3 pr-3 rounded cursor-pointer inline-flex items-center font-[700] text-[#3f3f46] dark:text-[#d4d4d8]"
                    : "pt-0.5 pb-0.5 pl-3 pr-3 rounded cursor-pointer inline-flex items-center hover:font-[500] hover:text-[#3f3f46] dark:hover:text-[#d4d4d8]"
                }>
                portfolio
              </li>
              <li
                onClick={() => {
                  navigate("/blog");
                  setMenu("blog");
                }}
                className={
                  menu === "blog"
                    ? "pt-0.5 pb-0.5 pl-3 pr-3 rounded cursor-pointer inline-flex items-center font-[700] text-[#3f3f46] dark:text-[#d4d4d8]"
                    : "pt-0.5 pb-0.5 pl-3 pr-3 rounded cursor-pointer inline-flex items-center hover:font-[500] hover:text-[#3f3f46] dark:hover:text-[#d4d4d8]"
                }>
                blog
              </li>
              <li
                onClick={() => {
                  navigate("/booknotes");
                  setMenu("booknotes");
                }}
                className={
                  menu === "booknotes"
                    ? "pt-0.5 pb-0.5 pl-3 pr-3 rounded cursor-pointer inline-flex items-center font-[700] text-[#3f3f46] dark:text-[#d4d4d8]"
                    : "pt-0.5 pb-0.5 pl-3 pr-3 rounded cursor-pointer inline-flex items-center hover:font-[500] hover:text-[#3f3f46] dark:hover:text-[#d4d4d8]"
                }>
                booknotes
              </li>
              <li
                onClick={() => {
                  navigate("/resources");
                  setMenu("resources");
                }}
                className={
                  menu === "resources"
                    ? "pt-0.5 pb-0.5 pl-3 pr-3 rounded cursor-pointer inline-flex items-center font-[700] text-[#3f3f46] dark:text-[#d4d4d8]"
                    : "pt-0.5 pb-0.5 pl-3 pr-3 rounded cursor-pointer inline-flex items-center hover:font-[500] hover:text-[#3f3f46] dark:hover:text-[#d4d4d8]"
                }>
                resources
              </li>
              <li
                onClick={() => {
                  navigate("/about");
                  setMenu("about");
                }}
                className={
                  menu === "about"
                    ? "pt-0.5 pb-0.5 pl-3 pr-3 rounded cursor-pointer inline-flex items-center font-[700] text-[#3f3f46] dark:text-[#d4d4d8]"
                    : "pt-0.5 pb-0.5 pl-3 pr-3 rounded cursor-pointer inline-flex items-center hover:font-[500] hover:text-[#3f3f46] dark:hover:text-[#d4d4d8]"
                }>
                about
              </li>
              <li
                onClick={() => {
                  navigate("/now");
                  setMenu("now");
                }}
                className={
                  menu === "now"
                    ? "pt-0.5 pb-0.5 pl-3 pr-3 rounded cursor-pointer inline-flex items-center font-[700] text-[#3f3f46] dark:text-[#d4d4d8]"
                    : "pt-0.5 pb-0.5 pl-3 pr-3 rounded cursor-pointer inline-flex items-center hover:font-[500] hover:text-[#3f3f46] dark:hover:text-[#d4d4d8]"
                }>
                now
              </li>
            </ul>
          </nav>
          <button
            className="w-8 h-8 flex justify-center items-center rounded"
            onClick={toggleTheme}>
            {theme === "dark" ? (
              <svg
                className="w-[18px] fill-[#d4d4d8cc] hover:fill-[#d4d4d8]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
              </svg>
            ) : (
              <svg
                className="w-4 fill-[#3f3f46cc] hover:fill-[#3f3f46]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
              </svg>
            )}
          </button>
          <svg
            className="dark:fill-[#d4d4d8cc] lg:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
