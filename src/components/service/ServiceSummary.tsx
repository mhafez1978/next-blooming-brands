import { url } from "inspector";
import React from "react";

const ServiceSummary = () => {
  return (
    // https://img.freepik.com/free-photo/paper-hand-holding-megaphone_23-2149152702.jpg
    //
    <div
      id="services"
      className="bg-[url('https://images.pexels.com/photos/3377405/pexels-photo-3377405.jpeg')] bg-cover bg-fixed bg-center bg-no-repeat text-black body-font"
    >
      <div className=" bg-fuchsia-400/80">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h2 className="text-black font-black text-3xl text-center lg:text-4xl mb-4">
              Let&apos;s Get The
              <span className="text-black strikeLine-black">
                <em>Word</em>
              </span>{" "}
              Out
            </h2>
            <p className="w-full text-slate-900 font-medium text-sm md:text-md lg:text-md lg:w-1/2 leading-relaxed">
              We expand your brand reach beyond any geographical limitations.
              Our solutions are geared to help your business get new customers.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <a href="/optimized-websites">
                <div className="border border-gray-200 p-6 rounded bg-zinc-200/50 hover:bg-purple-300 ">
                  <div className="h-10 flex flex-row items-center justify-start gap-2">
                    <div className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-zinc-200/50 text-black mb-4">
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
                          d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                        />
                      </svg>
                    </div>
                    <h2 className="h-10 sm:text-sm md:text-md lg:text-lg text-black hover:text-white font-black title-font mb-2">
                      Optimized Websites
                    </h2>
                  </div>
                  <p className="leading-relaxed text-base">
                    Blazing fast websites that are reliable, scalable, and
                    search engine optimized.
                  </p>
                </div>
              </a>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <a href="/e-commerce-websites">
                <div className="border border-gray-200 p-6 rounded bg-zinc-200/50 hover:bg-purple-300">
                  <div className="h-10 flex flex-row gap-2 items-center justify-start">
                    <div className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-zinc-200/50 text-black mb-4">
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
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                    </div>
                    <h2 className="h-10 sm:text-sm md:text-md lg:text-lg text-black font-black title-font mb-2">
                      E-Commerce Websites
                    </h2>
                  </div>
                  <p className="leading-relaxed text-base">
                    Full Turnkey Online Store with admin panel, storefront,
                    shipping, and payments integration.
                  </p>
                </div>
              </a>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <a href="/mobile-apps">
                <div className="border border-gray-200 p-6 rounded bg-zinc-200/50 hover:bg-purple-300">
                  <div className="h-10 flex flex-row justify-start items-center gap-2">
                    <div className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-zinc-200/50 text-black mb-4">
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
                          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    </div>
                    <h2 className="h-10 sm:text-sm md:text-md lg:text-lg text-black font-black title-font mb-2">
                      Mobile Apps
                    </h2>
                  </div>
                  <p className="leading-relaxed text-base">
                    Talk to our team about your great idea for iOS and Android
                    market app deployment.
                  </p>
                </div>
              </a>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <a href="/custom-development">
                <div className="border border-gray-200 p-6 rounded bg-zinc-200/50 hover:bg-purple-300">
                  <div className="h-10 flex flex-row justify-start items-center gap-2">
                    <div className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-zinc-200/50 text-black mb-4">
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
                          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                        />
                      </svg>
                    </div>
                    <h2 className="h-10 sm:text-sm md:text-md lg:text-lg text-black font-black title-font mb-2">
                      Custom WordPress
                    </h2>
                  </div>
                  <p className="leading-relaxed text-base">
                    Custom built themes to control the look and plugins to
                    extend core functionatlity.
                  </p>
                </div>
              </a>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <a href="/business-branding">
                <div className="border border-gray-200 p-6 rounded bg-zinc-200/50 hover:bg-purple-300">
                  <div className="h-10 flex flex-row justify-start items-center gap-2">
                    <div className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-zinc-200/50 text-black mb-4">
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
                          d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
                        />
                      </svg>
                    </div>
                    <h2 className="h-10 sm:text-sm md:text-md lg:text-lg text-black-900 font-black title-font mb-2">
                      Identity &amp; Branding
                    </h2>
                  </div>
                  <p className="leading-relaxed text-base">
                    We craft an appealing consistent image and brand message to
                    help you stand out.
                  </p>
                </div>
              </a>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <a href="/online-marketing">
                <div className="border border-gray-200 p-6 rounded bg-zinc-200/50 hover:bg-purple-300">
                  <div className="h-10 flex flex-row justify-start items-center gap-2">
                    <div className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-zinc-200/50 text-black mb-4">
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
                          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                        />
                      </svg>
                    </div>
                    <h2 className="h-10 sm:text-sm md:text-md lg:text-lg text-black font-black title-font mb-2">
                      Online Marketing
                    </h2>
                  </div>
                  <p className="leading-relaxed text-base">
                    Monthly plans to help promote your business on social and
                    other platforms.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSummary;
