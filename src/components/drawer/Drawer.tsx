import React from "react";
//import Card from "../card/Card";
import Card2 from "../card/Card2";

const Drawer = () => {
  return (
    <div className="drawer z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill="white"
                fill-rule="evenodd"
                d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
              ></path>{" "}
            </g>
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu w-full min-h-full bg-white flex flex-row justify-between">
          <div className="pr-12 w-[100vw] flex flex-row justify-end text-right items-start px-10">
            <label htmlFor="my-drawer" aria-label="close sidebar">
              <svg
                fill="black"
                width="40px"
                height="40px"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M5.997 6.784l4.454 4.359.787-.804-4.43-4.336 4.465-4.3-.78-.81-4.49 4.323L1.55.857l-.787.804 4.43 4.336-4.465 4.3.78.81 4.49-4.323z"></path>{" "}
                </g>
              </svg>
            </label>
          </div>
          <div className="w-full">
            <div className="w-full">
              <ul className="w-full min-h-full flex flex-col gap-4 text-xl pl-[33%] font-bold text-center align-middle items-start text-base-content z-50">
                <li className="hover: underline-offset-8 hover: underline">
                  <label htmlFor="my-drawer" aria-label="close sidebar">
                    <a href="/">Home</a>
                  </label>
                </li>
                <li>
                  <label htmlFor="my-drawer" aria-label="close sidebar">
                    <a href="#about">About</a>
                  </label>
                </li>
                <li>
                  <label htmlFor="my-drawer" aria-label="close sidebar">
                    <a href="#services">Services</a>
                  </label>
                </li>
                <li>
                  <label htmlFor="my-drawer" aria-label="close sidebar">
                    <a href="/latest-news">Latest News</a>
                  </label>
                </li>
                <li>
                  <label htmlFor="my-drawer" aria-label="close sidebar">
                    <a href="#contact">Contact</a>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
