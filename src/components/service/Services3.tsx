import "./ServicesStyle.css";

const Services3 = () => {
  return (
    <>
      <section className="w-[100vw] min-h-[100vh] bg-gray-900 text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
        <span className="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">
          what we&apos;re offering{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="text-indigo-600 ml-3 w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
        <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
          Services Built Specifically for your Business
        </h1>
        <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <div className="card bg-gray-800 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pr-52">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
                Optimized
                <br /> Websites
              </h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames.
              </p>
            </div>
            <div className="icon"></div>
          </div>
          <div className="card bg-gray-800 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pl-48">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
                E-Commerce <br /> Websites
              </h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames.
              </p>
            </div>
          </div>
          <div className="card bg-gray-800 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pr-44">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
                Identity &amp; <br />
                Branding
              </h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames.
              </p>
            </div>
          </div>
          <div className="card bg-gray-800 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pl-48">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
                Online
                <br /> Marketing
              </h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services3;
