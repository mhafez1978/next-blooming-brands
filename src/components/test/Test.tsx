"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Test = () => {
  const router = useRouter();
  return (
    <section className="w-[100vw] pb-32">
      <div className="w-[80%] mx-auto flex flex-col gap-12 lg:flex lg:flex-row">
        <div className="w-full min-h-[60vh] lg:flex lg:flex-row lg:justify-center lg:w-[40vw]">
          <img
            src="https://img.freepik.com/free-photo/job-position-beside-employee-portrait_23-2150037694.jpg"
            alt=""
            className="object-cover w-full"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center lg:w-[60vw] lg:flex lg:flex-col lg:justify-center lg:items-start">
          <div className="w-[80%]">
            <h3 className="text-black font-black text-4xl lg:text-5xl">
              Tailored{" "}
              <span className="text-sky-500">
                <em>Experiences</em>
              </span>
            </h3>
            <p className="w-full text-black text-lg mt-4 mb-4 lg:text-xl">
              We offer more than just visual elements or targeted marketing
              content. Every client get&apos;s the following standard with each
              project :
            </p>
            <ul className="text-black text-sm md:text-md lg:text-lg">
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
            <button
              onClick={() => router.push("/client-intake")}
              className="mt-8 font-black w-[100%] border-solid border-2 border-sky-600 rounded-md pt-3 pl-4 pr-6 pb-3 bg-gradient-to-r from-sky-200 to-sky-300 hover:text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
