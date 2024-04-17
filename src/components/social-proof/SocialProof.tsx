import React from "react";

const SocialProof = () => {
  return (
    <section id="about">
      <div className="w-[100vw] bg-gradient-to-r from-sky-200 to-sky-300 text-black flex flex-col justify-center items-center px-0 lg:px-4 lg:py-8 sm:py-14 ">
        <h2 className="w-[90%] text-xl font-bold text-center mb-4 lg:text-4xl">
          We Help Your <span className="text-black">Business</span> Bloom
        </h2>
        {/* <h2 className="text-xl font-bold italic text-center mb-2 lg:text-3xl">
          Your business <span className="text-emerald-600">growth</span> starts
          here
        </h2> */}
        <p className="w-full text-lg text-center lg:w-[50%] lg:text-md lg:px-20">
          We craft digital experiences that captivate.
          <br />
          Call{" "}
          <a
            href="tel:+19788887688"
            className="text-black underline underline-offset-8"
          >
            +1 978 888 7688
          </a>{" "}
          for a free consultation
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
