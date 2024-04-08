import React from "react";

const Drawer = () => {
  return (
    <div className="drawer z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer">
          <svg
            width="45px"
            height="45px"
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
        <div className="menu w-[100vw] min-h-full grid grid-cols-2 bg-base-200">
          {/* Sidebar content here */}

          <ul className="menu w-[100vw] min-h-full justify-center items-center text-base-content">
            <li>
              <a className="text-3xl font-black">Home</a>
            </li>
            <li>
              <a className="text-3xl font-black">About</a>
            </li>
            <li>
              <a className="text-3xl font-black">Services</a>
            </li>
            <li>
              <a className="text-3xl font-black">Portfolio</a>
            </li>
            <li>
              <a className="text-3xl font-black">Latest News</a>
            </li>
            <li>
              <a className="text-3xl font-black">Contact</a>
            </li>
          </ul>
          <div className="flex flex-row justify-end text-right items-start px-10">
            <label htmlFor="my-drawer" aria-label="close sidebar">
              <svg
                fill="black"
                width="63px"
                height="63px"
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
        </div>
      </div>
    </div>
  );
};

export default Drawer;
