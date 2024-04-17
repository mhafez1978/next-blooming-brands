import React from "react";

const Call2Action = () => {
  return (
    <section>
      <div className="relative w-[100vw] h-[100vh] bg-[url('https://images.pexels.com/photos/3377405/pexels-photo-3377405.jpeg')] bg-cover bg-center bg-fixed z-10 py-24">
        <div className="absolute w-[100vw] h-[100vh] bg-amber-500/80"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="w-full max-w-[800px] flex flex-col justify-center items-center text-center text-slate-900">
            <h2 className="mb-6 text-black font-black lg:text-6xl">
              We <span className="strikeLine-black">Propell</span> Your Business
              Forward
            </h2>
            <p className="text-slate-900 mb-12 text-sm px-6 lg:text-md lg:px-14">
              Whether you&apos;re looking to establish your online presence,
              re-brand your identity, increase engagement, or maximizing brand
              growth potential, we want to become your business growth most
              valuable partner.
            </p>
          </div>
          <div className="w-full max-w-[60vw] flex flex-col justify-center items-center">
            <div className="w-full mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-slate-900">
              <div>
                <h3 className="text-xl font-black text-black text-center mb-4 lg:px-[4%]">
                  Success Mindset
                </h3>
                <p className="text-center text-md lg:px-[4%]">
                  Providing unmatched value, our approach helps businesses reach
                  their audience effectively.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black text-black text-center mb-4 lg:px-[4%]">
                  Proven Strategies
                </h3>
                <p className="text-center text-md lg:px-[4%]">
                  Combining human and artificial intelligence, to refine your
                  brand message and fuel success.
                </p>
              </div>
              <div className="">
                <h3 className="text-xl font-black text-black text-center mb-4">
                  Results Driven
                </h3>
                <p className="text-center text-md">
                  Sparing no effort, our team works around the clock to achieve
                  measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Call2Action;
