import React from "react";
import Card from "../card/Card";

const Test = () => {
  return (
    <section className="hidden lg:flex">
      {/* https://png.pngtree.com/thumb_back/fh260/background/20210502/pngtree-abstract-dark-blue-crystal-background-iridescent-texture-macro-panorama-faceted-gem-image_703232.jpg */}
      {/* https://www.webfx.com/wp-content/uploads/2023/08/48_what_is_a_full_service_digital_marketing_agency.png */}
      <div className="relative w-[100vw] h-[90vh] bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210502/pngtree-abstract-dark-blue-crystal-background-iridescent-texture-macro-panorama-faceted-gem-image_703232.jpg')] bg-cover bg-fixed bg-center">
        <div className="absolute w-[100vw] h-[90vh] inset-0 flex flex-col justify-center items-center bg-slate-900/70">
          <div className="relative w-[100vw] h-[90vh] flex flex-col justify-center items-center text-center text-white ">
            <div className="absolute w-[100vw] h-[90vh] mx-auto flex flex-col items-center justify-end z-30">
              <div className="mb-[50px] md:mb-[82px] lg:-mb-[32px]">
                <img
                  src="/images/over-wall.png"
                  alt="please review our services"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[100vw] min-h-[90vh] mx-auto grid justify-center items-center overflow-hidden gird-cols-1 sm:gap-4 lg:grid-cols-2">
          <div className="h-full flex flex-col justify-start items-start lg:pt-[18%]">
            <h3 className="text-white font-black text-4xl capitalize mb-4 lg:text-5xl lg:pl-24 lg:px-[10%]">
              Tailored <span className="text-amber-500 pb-4">experiences</span>
            </h3>
            <p className="w-[80%] text-white text-sm mb-2 md:text-md lg:text-lg lg:pl-24">
              We offer more than just visual elements or targeted marketing
              content. Every client get&apos;s the following standard with each
              project :
            </p>
            <ul className="text-white text-sm md:text-md lg:text-lg lg:pl-24">
              <li className="flex flex-row gap-2 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>{" "}
                Monthly performance reports
              </li>
              <li className="flex flex-row gap-2 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                Comprehensive Target Market Research
              </li>
              <li className="flex flex-row gap-2 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                Cutting Edge Scalable Tech Stack
              </li>
              <li className="flex flex-row gap-2 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                Continous Optimization
              </li>
            </ul>
            <div className="relative">
              <button className="absolute w-[260px] z-40 mt-6 border-2 border-white text-white rounded pt-2 pr-3 pl-3 pb-2 hover:bg-amber-500 hover:text-black sm:mb-8 lg:ml-24">
                Request Consultation
              </button>
            </div>
          </div>
          <div className="z-10 p-0">
            <img
              className="h-full w-full object-cover"
              src="/images/robust-tech.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
