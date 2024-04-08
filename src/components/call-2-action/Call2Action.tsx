import React from "react";

const Call2Action = () => {
  return (
    <section>
      <div
        className="relative min-h-[80vh] bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/grey-abstract-background_1077-4.jpg?t=st=1711812754~exp=1711816354~hmac=26738eef36b644b6eb6eb856cd8e5072a07e0345ad5afc23098818faaecbcece&w=1480')",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-900/30">
          <div className="w-full max-w-[800px] flex flex-col justify-center items-center text-center text-white">
            <h2 className="mb-4 font-black lg:text-6xl lg:px-[5%]">
              <span className="text-amber-500">Propel</span> Your Business{" "}
              <span className="text-amber-500">Forward</span>
            </h2>
            <p className="mb-12 text-sm px-6 lg:text-md lg:px-14">
              Whether you&apos;re looking to establish your online presence,
              re-brand your identity, increase engagement, or maximizing brand
              growth potential, we want to become your business growth most
              valuable partner.
            </p>
          </div>
          <div className="w-full max-w-[60vw] flex flex-col justify-center items-center">
            <div className="w-full mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white">
              <div>
                <h3 className="text-xl font-black text-amber-500 mb-4 lg:px-[4%]">
                  Success Mindset
                </h3>
                <p className="text-md lg:px-[4%]">
                  Providing unmatched value, our approach helps businesses reach
                  their audience effectively.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black text-amber-500 mb-4 lg:px-[4%]">
                  Proven Strategies
                </h3>
                <p className="text-md lg:px-[4%]">
                  Combining human and artificial intelligence, our strategies
                  refine your brand message and fuel success.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black text-amber-500 mb-4">
                  Results Driven
                </h3>
                <p className="text-md">
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
